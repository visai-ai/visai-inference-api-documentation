"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[8419],{4711:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),n=s(94891),o=s(75190),p=s(47507),l=s(24310),c=s(63303),m=(s(75035),s(85162));const d={id:"pre-singed-url",title:"Asynchronous API - Speech to Text",description:"",sidebar_label:"Submit Pre-signed URLs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asynchronous"],description:"",operationId:"asynSTTPreSignedURLInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{job_id:{type:"string",description:"Job ID of the inference"}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{pre_signed_url:{type:"array",description:"List of pre-signed urls",items:{type:"object",properties:{filename:{type:"string"},url:{type:"string"}}}}}}}},required:!0},jsonRequestBodyExample:{pre_signed_url:[{file_name:"visai",url:"https://<pre-signed-url>"}],webhook_url:"https://your-webhook-url",boosting_words:["\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35","\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c"]},method:"post",path:"/predict",servers:[{url:"https://longrun-api.visai.ai/v1/job/stt/predict/presigned",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://longrun-api.visai.ai/v1/job/stt/predict/presigned",postman:{name:"Speech to Text Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},u=void 0,y={unversionedId:"ai-marketplace/speech-to-text/asynchronous-api/pre-singed-url",id:"ai-marketplace/speech-to-text/asynchronous-api/pre-singed-url",title:"Asynchronous API - Speech to Text",description:"",source:"@site/docs/ai-marketplace/speech-to-text/asynchronous-api/submit-pre-signed-url.api.mdx",sourceDirName:"ai-marketplace/speech-to-text/asynchronous-api",slug:"/ai-marketplace/speech-to-text/asynchronous-api/pre-singed-url",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text/asynchronous-api/pre-singed-url",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pre-singed-url",title:"Asynchronous API - Speech to Text",description:"",sidebar_label:"Submit Pre-signed URLs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["asynchronous"],description:"",operationId:"asynSTTPreSignedURLInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{job_id:{type:"string",description:"Job ID of the inference"}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{pre_signed_url:{type:"array",description:"List of pre-signed urls",items:{type:"object",properties:{filename:{type:"string"},url:{type:"string"}}}}}}}},required:!0},jsonRequestBodyExample:{pre_signed_url:[{file_name:"visai",url:"https://<pre-signed-url>"}],webhook_url:"https://your-webhook-url",boosting_words:["\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35","\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c"]},method:"post",path:"/predict",servers:[{url:"https://longrun-api.visai.ai/v1/job/stt/predict/presigned",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://longrun-api.visai.ai/v1/job/stt/predict/presigned",postman:{name:"Speech to Text Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"Uploading Files",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text/asynchronous-api/uploading-file"},next:{title:"Get job status by ID",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text/asynchronous-api/get-job-status"}},h={},k=[{value:"Asynchronous - Speech to Text API",id:"asynchronous---speech-to-text-api",level:2}],g={toc:k};function b(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"asynchronous---speech-to-text-api"},"Asynchronous - Speech to Text API"),(0,i.kt)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"1rem"}},(0,i.kt)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.kt)("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:"#475467",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),(0,i.kt)("h2",{style:{marginBottom:"0"}},"Create inference by presigned url")),(0,i.kt)("div",{className:"custom-url-container"},(0,i.kt)("span",{className:"custom-method"},"POST"),(0,i.kt)("span",{className:"custom-url"},"https://longrun-api.visai.ai/v1/job/stt/predict/presigned")),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)("p",{style:{marginLeft:"1rem",marginBottom:"0px",fontWeight:500,fontSize:"12px"}},"Raw JSON body"),(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," ","required")),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pre_signed_url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null),(0,i.kt)("span",{style:{opacity:"0.6"}},"object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"file_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"File name"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Pre-signed URL"},mdxType:"SchemaItem"})))))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}},"optional")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"webhook_url",in:"query",description:"Webhook endpoint for calling once job status is completed.",required:!1,style:"form",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"boosting_words",in:"query",description:'An array of specific words to enhance recognition accuracy.\n Maximum 10 words can be provided.\ne.g., ["\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35", "\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c"].',required:!1,style:"form",schema:{type:"string[]"}},mdxType:"ParamsItem"}))))))))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"job_id",required:!1,schemaName:"string",schema:{description:"ID of the inference job",title:"job_id"},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n    "job_id": "<job-id>"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);