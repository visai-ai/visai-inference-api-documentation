"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[1499],{71696:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>f});var s=a(87462),i=(a(67294),a(3905)),n=a(26389),r=a(94891),p=a(75190),m=a(47507),o=a(24310),l=a(63303),c=(a(75035),a(85162));const d={id:"speech-segmentation",title:"Speech Segmentation - AI Marketplace",description:"",sidebar_label:"Speech Segmentation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"speechSegmentaionInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{status:{type:"string",description:"Status of request"},data:{type:"array",items:{type:"object",properties:{filename:{type:"string",description:"File name"},interval:{type:"array",description:"List of interval time of speech and non-speech segments",items:{type:"object",properties:{start:{type:"string",description:"Start time in HH:mm:ss.sss format"},end:{type:"string",description:"End time in HH:mm:ss.sss format"},label:{type:"string",description:"speech | non-speech"}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Audio file ('.wav', '.mp3', '.ogg', and etc.)"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://speechsegmentation.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://speechsegmentation.infer.visai.ai/predict",postman:{name:"Speech to Text Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},u=void 0,y={unversionedId:"ai-marketplace/speech-segmentation",id:"ai-marketplace/speech-segmentation",title:"Speech Segmentation - AI Marketplace",description:"",source:"@site/docs/ai-marketplace/speech-segmentation.api.mdx",sourceDirName:"ai-marketplace",slug:"/ai-marketplace/speech-segmentation",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-segmentation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"speech-segmentation",title:"Speech Segmentation - AI Marketplace",description:"",sidebar_label:"Speech Segmentation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"speechSegmentaionInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{status:{type:"string",description:"Status of request"},data:{type:"array",items:{type:"object",properties:{filename:{type:"string",description:"File name"},interval:{type:"array",description:"List of interval time of speech and non-speech segments",items:{type:"object",properties:{start:{type:"string",description:"Start time in HH:mm:ss.sss format"},end:{type:"string",description:"End time in HH:mm:ss.sss format"},label:{type:"string",description:"speech | non-speech"}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Audio file ('.wav', '.mp3', '.ogg', and etc.)"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://speechsegmentation.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://speechsegmentation.infer.visai.ai/predict",postman:{name:"Speech to Text Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"Machine Translation",permalink:"/inference-api-documentation/docs/ai-marketplace/machine-translation"},next:{title:"OCR Documentaion",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-documentation"}},h={},f=[{value:"Speech Segmentation API",id:"speech-segmentation-api",level:2}],k={toc:f};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"speech-segmentation-api"},"Speech Segmentation API"),(0,i.kt)("div",{className:"custom-url-container"},(0,i.kt)("span",{className:"custom-method"},"POST"),(0,i.kt)("span",{className:"custom-url"},"https://speechsegmentation.infer.visai.ai/predict")),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,i.kt)("p",{style:{marginLeft:"1rem",marginBottom:"0px",fontWeight:500,fontSize:"12px"}},"form-data body"),(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("br",null)),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"files"),(0,i.kt)("span",{style:{opacity:"0.6"}}," File"),(0,i.kt)("span",{style:{color:"#FA383E",marginLeft:"0.25rem",fontWeight:"700"}},"required")),(0,i.kt)("p",null,"Audio raw files in a form of multi-part form data using the key name ",(0,i.kt)("b",null,"files"),"."))))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"`success` | `failed`",schema:{description:"Status of request",title:"status"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",schema:{description:"File name",title:"filename"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"interval"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"start",required:!1,schemaName:"string",schema:{description:"Start time in `HH:mm:ss.sss` format",title:"start"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"end",required:!1,schemaName:"string",schema:{description:"End time in `HH:mm:ss.sss` format",title:"end"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"label",required:!1,schemaName:"string",schema:{description:"`non-speech` | `speech`",title:"label"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "status": "success",\n  "data": [\n    {\n      "filename": "record.wav",\n      "interval": [\n        {\n          "start": "00:00:00.000",\n          "end": "00:00:06.599",\n          "label": "speech"\n        },\n        {\n          "start": "00:00:06.600",\n          "end": "00:00:09.874",\n          "label": "non-speech"\n        },\n        {\n          "start": "00:00:09.875",\n          "end": "00:00:12.424",\n          "label": "speech"\n        },\n        {\n          "start": "00:00:12.425",\n          "end": "00:00:14.349",\n          "label": "non-speech"\n        },\n        {\n          "start": "00:00:14.349",\n          "end": "00:00:16.896",\n          "label": "speech"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);