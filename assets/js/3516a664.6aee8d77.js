"use strict";(self.webpackChunkvisai_inference_api_documentation=self.webpackChunkvisai_inference_api_documentation||[]).push([[9869],{2072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),o=a(94891),r=a(75190),l=a(47507),c=a(24310),p=a(63303),m=(a(75035),a(85162));const d={id:"text-classification",title:"Text Classification: Product Review - AI Marketplace",description:"",sidebar_label:"Text Classification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"textClassificationInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{results:{type:"array",description:"List of results",items:{type:"object",properties:{inputs:{type:"string",description:"Input sentence"},prediction:{type:"array",description:"List of prediction result",items:{type:"object",properties:{class_name:{type:"string",description:"Class name about product review (\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23, \u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e02\u0e19\u0e2a\u0e48\u0e07, \u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32, \u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32)"},confidence:{type:"number","Confidence value":null}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{inputs:{type:"array",description:"List of sentences",items:{type:"string"}}}}}},required:!0},jsonRequestBodyExample:{inputs:["\u0e23\u0e32\u0e04\u0e32\u0e14\u0e35\u0e21\u0e35\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e"]},method:"post",path:"/predict",servers:[{url:"https://textclass.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},postman:{name:"Word Tokenization Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},y=void 0,u={unversionedId:"ai-marketplace/text-classification",id:"ai-marketplace/text-classification",title:"Text Classification: Product Review - AI Marketplace",description:"",source:"@site/docs/ai-marketplace/text-classificstion.api.mdx",sourceDirName:"ai-marketplace",slug:"/ai-marketplace/text-classification",permalink:"/inference-api-documentation/docs/ai-marketplace/text-classification",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"text-classification",title:"Text Classification: Product Review - AI Marketplace",description:"",sidebar_label:"Text Classification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["ai-marketplace"],description:"",operationId:"textClassificationInfer",parameters:[{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{results:{type:"array",description:"List of results",items:{type:"object",properties:{inputs:{type:"string",description:"Input sentence"},prediction:{type:"array",description:"List of prediction result",items:{type:"object",properties:{class_name:{type:"string",description:"Class name about product review (\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23, \u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e02\u0e19\u0e2a\u0e48\u0e07, \u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32, \u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32)"},confidence:{type:"number","Confidence value":null}}}}}}}},title:"ApiResponse"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{inputs:{type:"array",description:"List of sentences",items:{type:"string"}}}}}},required:!0},jsonRequestBodyExample:{inputs:["\u0e23\u0e32\u0e04\u0e32\u0e14\u0e35\u0e21\u0e35\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e"]},method:"post",path:"/predict",servers:[{url:"https://textclass.infer.visai.ai/predict",description:"Default server"}],securitySchemes:{"X-API-Key":{type:"apiKey",in:"header",name:"X-API-Key"}},postman:{name:"Word Tokenization Inference",header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"aiMarketplaceSidebar",previous:{title:"Sentiment Analysis",permalink:"/inference-api-documentation/docs/ai-marketplace/sentiment-analysis"},next:{title:"Word Tokenization",permalink:"/inference-api-documentation/docs/ai-marketplace/word-tokenization"}},k={},f=[{value:"Text Classification: Product Review API",id:"text-classification-product-review-api",level:2}],h={toc:f};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"text-classification-product-review-api"},"Text Classification: Product Review API"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Header")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"X-API-Key",in:"header",description:"Your API key",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," ","required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},"List of sentences")),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"inputs"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"List of sentence",title:""},mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"results"),(0,s.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"input",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"array",description:"Input sentence"},mdxType:"SchemaItem"})),(0,s.kt)(c.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"prediction"),(0,s.kt)("span",{style:{opacity:"0.6"}}," Array [")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"class_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"`\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23`"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",description:"Probability `\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23` of sentence"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"class_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"`\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e02\u0e19\u0e2a\u0e48\u0e07`"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",description:"Probability `\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e02\u0e19\u0e2a\u0e48\u0e07` of sentence"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"class_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"`\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32`"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",description:"Probability `\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32` of sentence"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"class_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"`\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32`"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"confidence",required:!1,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",description:"Probability `\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32` of sentence"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))),(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "results": [\n    {\n      "input": "\u0e23\u0e32\u0e04\u0e32\u0e14\u0e35\u0e21\u0e35\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e",\n      "prediction": [\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23",\n            "confidence": 0.5123007644462169\n          },\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e02\u0e19\u0e2a\u0e48\u0e07",\n            "confidence": 0.475151361780465\n          },\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e23\u0e32\u0e04\u0e32",\n            "confidence": 1\n          },\n          {\n            "class_name": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32",\n            "confidence": 0.6353219167629959\n          }\n        ]\n      }\n    ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);