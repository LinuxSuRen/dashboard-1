import{d as q,c as z,aI as s,D as t,aF as a,b7 as E,aH as o,aJ as l,H as c,aN as n,E as i,aL as A,aK as F,aM as h,u as f,aG as g}from"./arco.2be430d2.js";import{g as L,s as R}from"./vue.8b51e00f.js";import{b as v,_ as D}from"./index.0b8943ec.js";import{u as H}from"./query-code.418681ba.js";const M={class:"code"},Q={class:"width-35"},j={key:2,class:"script"},G={key:0},J={key:1},K={class:"start-time"},O={key:0},P={key:1,class:"total-time"},U=q({__name:"log",props:{log:{type:Object,default:()=>({})},codeType:{type:String,default:"sql"},hasAction:{type:Boolean,default:!0}},setup(e){const d=e;L(),R(v());const{inputFromNewLineToQueryCode:k,replaceCode:b}=H(),{updateSettings:x}=v(),u=z(()=>Reflect.has(d.log,"execution_time_ms")),I=()=>{x({queryModalVisible:!0}),d.log.type==="sql"?k(d.log.codeInfo,0):b(d.log.codeInfo)};return(r,W)=>{const T=s("icon-play-arrow"),w=s("a-button"),C=s("a-tooltip"),p=s("a-typography-text"),m=s("a-list-item"),N=s("a-list"),y=s("a-popover"),S=s("icon-check-circle"),B=s("icon-close-circle"),_=s("a-space");return t(),a(m,{class:"smaller-divider"},E({default:o(()=>[l(_,{direction:"vertical",fill:"",size:0},{default:o(()=>[c("div",M,[e.log.error?(t(),a(C,{key:0,position:"tl",content:e.log.error},{default:o(()=>[c("div",null,n(e.log.error),1)]),_:1},8,["content"])):e.log.type!=="python"?(t(),a(y,{key:1,"content-class":"code-popup",position:"tl"},{content:o(()=>[l(N,{size:"small",split:!1,bordered:!1},{default:o(()=>[e.log.type==="promql"?(t(!0),i(A,{key:0},F(e.log.promInfo,(V,$)=>(t(),a(m,null,{default:o(()=>[c("span",Q,n($),1),l(p,{class:"ml-4",code:""},{default:o(()=>[h(n(V),1)]),_:2},1024)]),_:2},1024))),256)):(t(),a(m,{key:1},{default:o(()=>[l(p,{class:"popup"},{default:o(()=>[h(n(e.log.codeInfo),1)]),_:1})]),_:1}))]),_:1})]),default:o(()=>[c("div",null,n(e.log.codeInfo),1)]),_:1})):(t(),i("div",j,[f(u)?(t(),i("div",G,n(r.$t("dashboard.runScript",{name:e.log.codeInfo})),1)):(t(),i("div",J,n(r.$t("dashboard.saveName",{name:e.log.codeInfo})),1))]))]),l(_,{class:"info",fill:""},{default:o(()=>[e.log.error?(t(),a(B,{key:1,class:"danger-color"})):(t(),a(S,{key:0,class:"success-color icon-14"})),c("div",K,n(e.log.startTime),1),e.log.error?g("",!0):(t(),a(_,{key:2,class:"result",fill:"",size:4},{default:o(()=>[f(u)?(t(),i("span",O,n(e.log.message),1)):g("",!0),f(u)?(t(),i("div",P,[l(y,{"content-class":"total-time-popover"},{content:o(()=>[c("div",null,n(r.$t("dashboard.executeTime",{time:e.log.execution_time_ms})),1),c("div",null,n(r.$t("dashboard.network",{time:e.log.networkTime-e.log.execution_time_ms})),1)]),default:o(()=>[c("div",null,n(`in ${e.log.networkTime} ms`),1)]),_:1})])):g("",!0)]),_:1}))]),_:1})]),_:1})]),_:2},[e.hasAction&&e.log.type!=="python"&&!e.log.error?{name:"actions",fn:o(()=>[l(w,{class:"play",type:"text",size:"small",onClick:I},{icon:o(()=>[l(T,{class:"icon-color"})]),_:1})]),key:"0"}:void 0]),1024)}}});const oe=D(U,[["__scopeId","data-v-f133d11e"]]);export{oe as _};