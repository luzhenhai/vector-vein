import{p as be,_ as ye,a as xe,b as he,c as De,d as Ee,e as Ce,f as Se,g as Ue,h as Te,i as Ie,j as Ne,k as Re,l as We,m as $e,n as Oe,o as Ve,q as je,r as Pe,s as Ae,t as Be,u as Fe,v as Le,w as Me,x as He,y as qe,z as ze,U as Ze,A as Ye,B as Ge,C as Je,D as Xe,E as Ke}from"./style-b479b0a1.js";import{u as Qe,r as v,a as eo,b as oo,c as to,s as Z,d as so,o as ao,w as Y,m as W,h as $,e as no,f as i,g as w,i as E,j as t,k as O,l as n,n as G,v as J,p as c,L as ro,q as g,t as f,F as X,x as K,M as lo,y as co,E as io,z as Q}from"./index-f19a36db.js";import{u as uo}from"./userAccount-3f947566.js";import{u as _o}from"./userDatabase-78af9299.js";import{_ as po}from"./MarkdownEditor-477d5f97.js";import{_ as mo}from"./UploaderFieldUse-ba09f33a.js";import{d as fo}from"./database-07243708.js";import{_ as vo}from"./_plugin-vue_export-helper-c27b6911.js";import"./TemperatureInput-5ab7dd29.js";const wo={key:0,class:"loading-container"},go={key:1,class:"editor-container"},ko={class:"title-container"},bo={__name:"WorkflowEditor",setup(yo){console.log("in workflow editor");const{t:s}=Qe(),V=v(!0),ee=eo(),h=oo(),k=ee.params.workflowId,D=v(s("workspace.workflowEditor.workflow_canvas")),oe=to([s("workspace.workflowEditor.workflow_info"),s("workspace.workflowEditor.workflow_canvas")]),te=uo();Z(te);const j=_o(),{userDatabases:se}=Z(j),ae=so(),C=v(""),a=v({}),d=v([]);ao(async()=>{const o=Y("get",{wid:k}),e=fo("list",{}),u=await o,p=await e;if(p.status==200&&j.setUserDatabases(p.data),u.status!=200){W.error(s("workspace.workflowSpace.get_workflow_failed")),h.push({name:"WorkflowSpaceMain"});return}a.value=u.data,a.value.data.nodes.forEach(r=>{r.category=="vectorDb"&&(r.data.template.database.options=se.value.filter(_=>_.status=="VALID").map(_=>({value:_.vid,label:_.name})))}),a.value.tags=a.value.tags.map(r=>r.tid),d.value=[...a.value.data.nodes,...a.value.data.edges],d.value.forEach(r=>{r.events={change:_=>B(),delete:_=>F(_)}}),C.value=$(a.value),V.value=!1});const S=v(!1),P=async()=>{S.value=!0,a.value.data=A(),(await Y("update",{wid:k,...a.value})).status==200?(W.success(s("workspace.workflowSpace.save_success")),C.value=$(a.value)):W.error(s("workspace.workflowSpace.save_failed")),ae.updateUserWorkflow(a.value),S.value=!1},ne=()=>{a.value.data=A(),C.value!=$(a.value)?lo.confirm({title:s("common.back"),icon:co(io),content:s("workspace.workflowEditor.exit_not_saved_confirm"),okText:s("workspace.workflowEditor.save_and_exit"),cancelText:s("workspace.workflowEditor.exit_without_save"),onOk(){P().then(()=>{h.push({name:"WorkflowUse",params:{workflowId:k}})})},onCancel(){h.push({name:"WorkflowUse",params:{workflowId:k}})}}):h.push({name:"WorkflowUse",params:{workflowId:k}})},{addEdges:re,updateEdge:le,onConnect:ce,toObject:A}=be();ce(o=>{o.animated=!0,o.style={strokeWidth:3,stroke:"#565656"},re([o])});const ie=({edge:o,connection:e})=>{le(o,e)},B=o=>{},F=o=>{d.value=d.value.filter(e=>e.id!==o.id),d.value=d.value.filter(e=>!(e.source&&e.source===o.id||e.target&&e.target===o.id))},ue=o=>{d.value=d.value.filter(e=>!(e.source===o.edge.source&&e.target===o.edge.target&&e.sourceHandle===o.edge.sourceHandle&&e.targetHandle===o.edge.targetHandle))};let L=null;const _e=o=>{L=o};let M=null;const de=o=>{o.dataTransfer.setData("nodeType",o.target.id)},pe=o=>{const e=o.srcElement.id,u=H[e],p=Ke(),r=JSON.parse(JSON.stringify(U[e].props.templateData));r.description=s(`components.nodes.${u}.${e}.description`),Object.keys(r.template).forEach(m=>{r.template[m].display_name=s(`components.nodes.${u}.${e}.${m}`)});const _=M.getBoundingClientRect(),{x:T,y:I,zoom:y}=L.viewport.value,x=o.clientX-_.left,N=o.clientY-_.top,R={id:p,type:e,category:u,position:{x:(x-T)/y,y:(N-I)/y},data:r,events:{change:m=>B(),delete:m=>F(m)}};d.value.push(R)},me=o=>{o.preventDefault(),M=o.target},fe=Object.assign({"/src/components/nodes/controlFlows/Conditional.vue":ye,"/src/components/nodes/controlFlows/Empty.vue":xe,"/src/components/nodes/controlFlows/RandomChoice.vue":he,"/src/components/nodes/fileProcessing/FileLoader.vue":De,"/src/components/nodes/imageGeneration/StableDiffusion.vue":Ee,"/src/components/nodes/llms/ChatGLM.vue":Ce,"/src/components/nodes/llms/OpenAI.vue":Se,"/src/components/nodes/outputs/Document.vue":Ue,"/src/components/nodes/outputs/Email.vue":Te,"/src/components/nodes/outputs/Mindmap.vue":Ie,"/src/components/nodes/outputs/Text.vue":Ne,"/src/components/nodes/textProcessing/ListRender.vue":Re,"/src/components/nodes/textProcessing/MarkdownToHtml.vue":We,"/src/components/nodes/textProcessing/TemplateCompose.vue":$e,"/src/components/nodes/textProcessing/TextInOut.vue":Oe,"/src/components/nodes/textProcessing/TextSplitters.vue":Ve,"/src/components/nodes/tools/ImageSearch.vue":je,"/src/components/nodes/tools/ProgrammingFunction.vue":Pe,"/src/components/nodes/triggers/ButtonTrigger.vue":Ae,"/src/components/nodes/vectorDb/AddData.vue":Be,"/src/components/nodes/vectorDb/DeleteData.vue":Fe,"/src/components/nodes/vectorDb/Search.vue":Le,"/src/components/nodes/webCrawlers/BilibiliCrawler.vue":Me,"/src/components/nodes/webCrawlers/TextCrawler.vue":He,"/src/components/nodes/webCrawlers/YoutubeCrawler.vue":qe}),U={},b={},H={};return Object.entries(fe).forEach(([o,e])=>{const u=o.match(/\/([^/]+)\.vue$/)[1];U[u]=no(e.default);const p=o.match(/\/([^/]+)\/[^/]+\.vue$/)[1];b[p]||(b[p]=[]),b[p].push(u),H[u]=p}),(o,e)=>{const u=i("a-spin"),p=i("a-typography-link"),r=i("a-col"),_=i("a-typography-text"),T=i("a-segmented"),I=i("a-button"),y=i("a-row"),x=i("a-divider"),N=i("a-menu-item"),R=i("a-sub-menu"),m=i("a-menu"),ve=i("a-layout-sider"),we=i("a-layout-content"),q=i("a-layout");return V.value?(w(),E("div",wo,[t(u,{size:"large"})])):(w(),E("div",go,[O("div",ko,[t(y,{type:"flex",align:"middle",justify:"space-between",gutter:[16,16],style:{width:"100%"}},{default:n(()=>[t(r,{flex:"0 0"},{default:n(()=>[t(p,{onClick:ne,style:{"text-wrap":"nowrap"}},{default:n(()=>[t(c(ro)),g(" "+f(c(s)("common.back")),1)]),_:1})]),_:1}),t(r,{flex:"0 0"},{default:n(()=>[t(_,{class:"title",editable:{triggerType:["text","icon"]},content:a.value.title,"onUpdate:content":e[0]||(e[0]=l=>a.value.title=l)},null,8,["content"])]),_:1}),t(r,{flex:"1 0",style:{display:"flex","justify-content":"center"}},{default:n(()=>[t(T,{value:D.value,"onUpdate:value":e[1]||(e[1]=l=>D.value=l),options:oe},null,8,["value","options"])]),_:1}),t(r,{flex:"0 0",style:{display:"flex","justify-content":"end"}},{default:n(()=>[t(I,{type:"primary",onClick:P,"confirm-loading":S.value},{default:n(()=>[g(f(c(s)("common.save")),1)]),_:1},8,["confirm-loading"])]),_:1})]),_:1})]),G(O("div",null,[t(y,{justify:"center"},{default:n(()=>[t(r,{lg:10,md:12,sm:18,xs:24},{default:n(()=>[t(x,null,{default:n(()=>[g(f(c(s)("workspace.workflowEditor.tags")),1)]),_:1}),t(ze,{modelValue:a.value.tags,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value.tags=l)},null,8,["modelValue"]),t(x,null,{default:n(()=>[g(f(c(s)("workspace.workflowEditor.brief_info")),1)]),_:1}),t(po,{markdown:a.value.brief,"onUpdate:markdown":e[3]||(e[3]=l=>a.value.brief=l)},null,8,["markdown"]),t(x,null,{default:n(()=>[g(f(c(s)("workspace.workflowEditor.brief_images")),1)]),_:1}),t(mo,{modelValue:a.value.images,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value.images=l),multiple:!0},null,8,["modelValue"])]),_:1})]),_:1})],512),[[J,D.value==c(s)("workspace.workflowEditor.workflow_info")]]),G(t(q,{"has-sider":"",style:{height:"100%"}},{default:n(()=>[t(ve,{style:{overflow:"auto",backgroundColor:"#fff"},class:"custom-scrollbar"},{default:n(()=>[t(m,{theme:"light",mode:"inline"},{default:n(()=>[(w(!0),E(X,null,K(Object.keys(b),(l,ge)=>(w(),Q(R,{key:`category-${ge}`},{title:n(()=>[g(f(c(s)(`components.nodes.${l}.title`)),1)]),default:n(()=>[(w(!0),E(X,null,K(b[l],(z,ke)=>(w(),Q(N,{id:z,draggable:"true",onDragstart:de,onDragend:pe,key:`node-${ke}`},{default:n(()=>[O("span",null,f(c(s)(`components.nodes.${l}.${z}.title`)),1)]),_:2},1032,["id"]))),128))]),_:2},1024))),128))]),_:1})]),_:1}),t(q,null,{default:n(()=>[t(we,{style:{margin:"24px 16px 0",overflow:"initial"}},{default:n(()=>[t(c(Ze),{modelValue:d.value,"onUpdate:modelValue":e[5]||(e[5]=l=>d.value=l),"default-edge-options":{type:"smoothstep"},"node-types":U,edgesUpdatable:!0,onEdgeUpdate:ie,onPaneReady:_e,onDragover:me,onEdgeDoubleClick:ue,"snap-to-grid":!0,"snap-grid":[20,20]},{default:n(()=>[t(c(Ye)),t(c(Ge)),t(c(Je),{variant:c(Xe).Dots},null,8,["variant"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},512),[[J,D.value==c(s)("workspace.workflowEditor.workflow_canvas")]])]))}}},No=vo(bo,[["__scopeId","data-v-5e83e68a"]]);export{No as default};