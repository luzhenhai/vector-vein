import{au as e}from"./index-f19a36db.js";const r=()=>{try{return JSON.parse(localStorage.getItem("userAccount")||"{}")}catch{return{}}},o=e("userAccount",{state:()=>({userAccount:r()}),actions:{setUserAccount(t){this.userAccount=t,localStorage.setItem("userAccount",JSON.stringify(this.userAccount))}}});export{o as u};