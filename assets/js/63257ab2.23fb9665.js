"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[7494],{47764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var i=a(87462),n=(a(67294),a(3905)),r=a(26389),s=a(94891),o=a(75190),m=a(47507),l=a(24310),p=a(63303),c=(a(75035),a(85162));const d={id:"ocr-documentation",title:"OCR Documentation - AI Marketplace",description:"",sidebar_label:"OCR Documentaion",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{image_size:{type:"array",description:"Size of the image or document",items:{type:"integer"}},results:{type:"array",description:"Coordinate x, y of text box",items:{type:"string"}},texts:{type:"string",description:"The extracted text in each box"}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Image or document file ('.docx', '.pptx', '.pdf', '.jpeg', and '.png')"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrdoc.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},postman:{name:"OCR Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},y=void 0,u={unversionedId:"ai-marketplace/ocr-documentation",id:"ai-marketplace/ocr-documentation",title:"OCR Documentation - AI Marketplace",description:"",source:"@site/docs/ai-marketplace/ocr-documentation.api.mdx",sourceDirName:"ai-marketplace",slug:"/ai-marketplace/ocr-documentation",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-documentation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ocr-documentation",title:"OCR Documentation - AI Marketplace",description:"",sidebar_label:"OCR Documentaion",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{image_size:{type:"array",description:"Size of the image or document",items:{type:"integer"}},results:{type:"array",description:"Coordinate x, y of text box",items:{type:"string"}},texts:{type:"string",description:"The extracted text in each box"}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Image or document file ('.docx', '.pptx', '.pdf', '.jpeg', and '.png')"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrdoc.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},postman:{name:"OCR Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"Speech to Text",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text"},next:{title:"OCR Thai ID Card",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-thai-id-card"}},f={},k=[{value:"OCR Inference API",id:"ocr-inference-api",level:2}],h={toc:k};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ocr-inference-api"},"OCR Inference API"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Header")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(s.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"files"),(0,n.kt)("span",{style:{opacity:"0.6"}}," File"),(0,n.kt)("span",{style:{color:"#FA383E",marginLeft:"0.25rem",fontWeight:"700"}},"required"))))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"image_size",required:!1,schemaName:"integer[]",qualifierMessage:void 0,schema:{description:"Size of image or document.",title:"image_size"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"results"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"0:",required:!1,schemaName:"[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]",qualifierMessage:void 0,schema:{type:"array",description:"4-pixel coordinate x, y of text box."},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"1:",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"array",description:"The extracted text in each box."},mdxType:"SchemaItem"})),(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))),(0,n.kt)(l.Z,{collapsible:!1,name:"texts",required:!1,schemaName:"string",schema:{description:"Text result of an image or document page.",type:"string",minLength:1},mdxType:"SchemaItem"}))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'[\n  {\n    "image_size": [\n      95,\n      554,\n      3\n    ],\n    "results": [\n      [\n        [\n          [\n            32,\n            14\n          ],\n          [\n            196,\n            14\n          ],\n          [\n            196,\n            48\n          ],\n          [\n            32,\n            48\n          ]\n        ],\n        "\u0e19\u0e01\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1a\u0e34\u0e19\u0e2d\u0e2d\u0e01"\n      ],\n      [\n        [\n          [\n            80,\n            46\n          ],\n          [\n            150,\n            46\n          ],\n          [\n            150,\n            78\n          ],\n          [\n            80,\n            78\n          ]\n        ],\n        "\u0e08\u0e32\u0e01\u0e23\u0e31\u0e07"\n      ]\n    ],\n    "texts": "\u0e19\u0e01\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1a\u0e34\u0e19\u0e2d\u0e2d\u0e01 \u0e08\u0e32\u0e01\u0e23\u0e31\u0e07"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);