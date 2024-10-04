"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[7494],{47764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var n=a(87462),i=(a(67294),a(3905)),s=a(26389),r=a(94891),o=a(75190),l=a(47507),m=a(24310),p=a(63303),c=(a(75035),a(85162));const d={id:"ocr-documentation",title:"OCR Documentation - AI Marketplace",description:"",sidebar_label:"OCR Documentaion",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{filename:{type:"string",description:"Name of the file"},status:{type:"string",description:"Status of request"},result:{type:"array",items:{type:"object",properties:{full_text:{type:"string"},page:{type:"number"},data:{type:"array",items:{type:"object",properties:{text:{type:"string"},bbox:{type:"array",description:"4-pixel coordinate x, y of text box. [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]"}}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Image or document file ('.jpg', '.jpeg', '.png', '.pdf', '.docx', and '.pptx')"},box_threshold:{type:"string",description:"Number between 0 to 1"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrdoc.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://ocrdoc.infer.visai.ai/predict",postman:{name:"OCR Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},y=void 0,u={unversionedId:"ai-marketplace/ocr-documentation",id:"ai-marketplace/ocr-documentation",title:"OCR Documentation - AI Marketplace",description:"",source:"@site/docs/ai-marketplace/ocr-documentation.api.mdx",sourceDirName:"ai-marketplace",slug:"/ai-marketplace/ocr-documentation",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-documentation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ocr-documentation",title:"OCR Documentation - AI Marketplace",description:"",sidebar_label:"OCR Documentaion",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"ocrInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{filename:{type:"string",description:"Name of the file"},status:{type:"string",description:"Status of request"},result:{type:"array",items:{type:"object",properties:{full_text:{type:"string"},page:{type:"number"},data:{type:"array",items:{type:"object",properties:{text:{type:"string"},bbox:{type:"array",description:"4-pixel coordinate x, y of text box. [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]"}}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{files:{type:"string",format:"binary",description:"Image or document file ('.jpg', '.jpeg', '.png', '.pdf', '.docx', and '.pptx')"},box_threshold:{type:"string",description:"Number between 0 to 1"}},required:["files"]}}}},method:"post",path:"/predict",servers:[{url:"https://ocrdoc.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},fullURL:"https://ocrdoc.infer.visai.ai/predict",postman:{name:"OCR Inference",method:"POST",body:{mode:"formdata",formdata:[{key:"files",value:"file",type:"file"}]}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"Speech to Text",permalink:"/inference-api-documentation/docs/ai-marketplace/speech-to-text"},next:{title:"OCR Thai ID Card",permalink:"/inference-api-documentation/docs/ai-marketplace/ocr-thai-id-card"}},f={},h=[{value:"OCR Documentation Inference API",id:"ocr-documentation-inference-api",level:2}],k={toc:h};function x(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ocr-documentation-inference-api"},"OCR Documentation Inference API"),(0,i.kt)("div",{class:"custom-url-container"},(0,i.kt)("span",{class:"custom-method"},"POST"),(0,i.kt)("span",{class:"custom-url"},"https://ocrdoc.infer.visai.ai/predict")),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,i.kt)("p",{style:{marginLeft:"1rem",marginBottom:"0px",fontWeight:500,fontSize:"12px"}},"form-data body"),(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"files"),(0,i.kt)("span",{style:{opacity:"0.6"}}," File"),(0,i.kt)("span",{style:{color:"#FA383E",marginLeft:"0.25rem",fontWeight:"700"}},"required")),(0,i.kt)("p",{style:{marginTop:0}},"Image or document raw files in a form of multi-part form data using the key name ",(0,i.kt)("b",null,"files"),".")))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}},"optional"),(0,i.kt)("p",{style:{fontSize:"14px",opacity:"0.6"}},"Send with the form of multi-part form data")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"box_threshold",in:"query",description:"Adjusting the box_threshold value, ranged between 0 to 1, affects the detection of text in documents.\nA lower value allows the model to detect more bounding boxes, while a higher value reduces detection sensitivity.\nIt is recommended to start with the default value of 0.4 and gradually increment the value by 0.1 until achieving the desired result for the document being used.\n(Number between 0 - 1)",required:!1,style:"form",schema:{type:"float",default:"0.4"}},mdxType:"ParamsItem"})))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",schema:{description:"File name",type:"string",minLength:1},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"`success` | `failed`",schema:{description:"Status of request",title:"status"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"result"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null),(0,i.kt)("span",{style:{opacity:"0.6"}},"object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"page",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The page number corresponding to the retrieved text."},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"full_text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The full text content of the specified page.\nThis includes all text present on the page, with newline characters (\\n) representing line breaks."},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," ","Array [")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{style:{opacity:"0.6"}},"object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"bbox:",required:!1,schemaName:"[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]",qualifierMessage:void 0,schema:{type:"array",description:"4-pixel coordinate x, y of text box."},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",schema:{description:"The extracted text in each box.",type:"string",minLength:1},mdxType:"SchemaItem"}))))))))))),(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'[\n   {\n      "filename": "filename.pdf",\n      "status": "success",\n      "result": [\n         {\n            "page": 1,\n            "data": [\n               {\n                  "bbox": [\n                     [\n                        32,\n                        14\n                     ],\n                     [\n                        196,\n                        14\n                     ],\n                     [\n                        196,\n                        48\n                     ],\n                     [\n                        32,\n                        48\n                     ]\n                  ],\n                  "text": "\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23"\n               },\n               {\n                  "bbox": [\n                     [\n                        80,\n                        46\n                     ],\n                     [\n                        150,\n                        46\n                     ],\n                     [\n                        150,\n                        78\n                     ],\n                     [\n                        80,\n                        78\n                     ]\n                  ],\n                  "text": "\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48 1"\n               }\n            ],\n            "full_text": "\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\\n\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48 1"\n         },\n         {\n            "page": 2,\n            "data": [\n               {\n                  "bbox": [\n                     [\n                        32,\n                        14\n                     ],\n                     [\n                        196,\n                        14\n                     ],\n                     [\n                        196,\n                        48\n                     ],\n                     [\n                        32,\n                        48\n                     ]\n                  ],\n                  "text": "\u0e19\u0e01\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1a\u0e34\u0e19\u0e2d\u0e2d\u0e01"\n               }\n            ],\n            "full_text": "\u0e19\u0e01\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1a\u0e34\u0e19\u0e2d\u0e2d\u0e01"\n         }\n      ]\n   }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);