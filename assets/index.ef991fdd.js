import{_ as h}from"./empty-status.vue_vue_type_script_setup_true_name_EmptyStatus_lang.47e8f7bf.js";import{_ as k}from"./text-copyable.7e87e8ae.js";import{d as S,e as r,o as D,aH as a,C as o,aE as s,aG as t,aI as _,aL as p,u as n,aF as B,D as N,aK as w,aJ as E,aM as G}from"./arco.a57ec162.js";import{W as I,_ as T}from"./index.61bbd04d.js";import"./chart.9b630f60.js";import"./vue.3c21c30b.js";const V="/status",F=()=>I.get(V),J=S({__name:"index",setup(L){r();const c=r(),e=r(),l=async()=>{try{c.value=await F(),e.value=Object.entries(c.value)}catch{e.value=[]}};return D(async()=>{l()}),(i,M)=>{const d=a("a-button"),m=k,f=a("a-tag"),y=a("a-descriptions-item"),x=a("a-descriptions"),g=h,b=a("a-card"),v=a("a-layout-content"),C=a("a-layout");return o(),s(C,{class:"layout status"},{default:t(()=>[_(v,null,{default:t(()=>[_(b,{title:"GreptimeDB Status"},{extra:t(()=>[_(d,{type:"text",onClick:l},{default:t(()=>[p("refresh")]),_:1}),n(e)&&n(e).length>0?(o(),s(m,{key:0,copyTooltip:"Copy to Clipboard",data:JSON.stringify(n(c)),showData:!1},null,8,["data"])):B("",!0)]),default:t(()=>[n(e)&&n(e).length>0?(o(),s(x,{key:0,bordered:"",column:2},{default:t(()=>[(o(!0),N(w,null,E(n(e),u=>(o(),s(y,{label:u[0]},{default:t(()=>[_(f,null,{default:t(()=>[p(G(u[1]),1)]),_:2},1024)]),_:2},1032,["label"]))),256))]),_:1})):(o(),s(g,{key:1,data:"Status is not supported until GreptimeDB v0.3.1"}))]),_:1})]),_:1})]),_:1})}}});const W=T(J,[["__scopeId","data-v-259f58b4"]]);export{W as default};
