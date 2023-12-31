# -*- coding: utf-8 -*-
# @Author: Bi Ying
# @Date:   2023-04-26 21:10:52
# @Last Modified by:   Bi Ying
# @Last Modified time: 2023-08-09 17:00:33
from typing import Union

import httpx
import openai

from utilities.workflow import Workflow
from utilities.embeddings import get_token_counts
from utilities.web_crawler import proxies, proxies_for_requests
from worker.tasks import task


model_max_tokens_map = {
    "gpt-3.5-turbo": 4096,
    "gpt-3.5-turbo-16k": 16384,
    "gpt-4": 8192,
    "gpt-4-32k": 32768,
}


@task
def open_ai(
    workflow_data: dict,
    node_id: str,
):
    workflow = Workflow(workflow_data)
    input_prompt: Union[str, list] = workflow.get_node_field_value(node_id, "prompt")
    temperature: float = workflow.get_node_field_value(node_id, "temperature")
    openai_api_type = workflow.setting.get("openai_api_type")
    if openai_api_type == "azure":
        openai.api_type = "azure"
        openai.api_base = workflow.setting.get("openai_api_base")
        openai.api_version = "2023-05-15"
        engine_model_param = {"engine": workflow.setting.get("openai_chat_engine")}
        model_max_tokens = 4096
    else:
        openai.api_type = "open_ai"
        openai.api_base = workflow.setting.get("openai_api_base", "https://api.openai.com/v1")
        openai.api_version = None
        model = workflow.get_node_field_value(node_id, "llm_model")
        engine_model_param = {"model": model}
        model_max_tokens = model_max_tokens_map.get(model, 4096)
    openai.api_key = workflow.setting.get("openai_api_key")
    openai.proxy = proxies_for_requests()

    if isinstance(input_prompt, str):
        prompts = [input_prompt]
    elif isinstance(input_prompt, list):
        prompts = input_prompt

    results = []
    for prompt in prompts:
        messages = [
            {
                "role": "system",
                "content": prompt,
            },
        ]
        token_counts = get_token_counts(prompt)
        max_tokens = model_max_tokens - token_counts - 50
        response = openai.ChatCompletion.create(
            **engine_model_param,
            messages=messages,
            temperature=temperature,
            max_tokens=max_tokens,
            top_p=0.77,
        )
        result = response.choices[0].message.content
        results.append(result)

    output = results[0] if isinstance(input_prompt, str) else results
    workflow.update_node_field_value(node_id, "output", output)
    workflow.set_node_status(node_id, 200)
    return workflow.data


@task
def chat_glm(
    workflow_data: dict,
    node_id: str,
):
    workflow = Workflow(workflow_data)
    input_prompt: Union[str, list] = workflow.get_node_field_value(node_id, "prompt")
    temperature: float = workflow.get_node_field_value(node_id, "temperature")
    model = workflow.get_node_field_value(node_id, "llm_model")
    if model == "chatglm-6b":
        api_base = workflow.setting.get("chatglm6b_api_base")
    else:
        raise ValueError("model not supported")

    if isinstance(input_prompt, str):
        prompts = [input_prompt]
    elif isinstance(input_prompt, list):
        prompts = input_prompt

    results = []
    for prompt in prompts:
        messages = {"prompt": prompt, "history": [], "temperature": temperature}
        response = httpx.post(api_base, json=messages, proxies=proxies(), timeout=None)
        result = response.json()["response"]
        results.append(result)

    output = results[0] if isinstance(input_prompt, str) else results
    workflow.update_node_field_value(node_id, "output", output)
    workflow.set_node_status(node_id, 200)
    return workflow.data
