"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29393],{45036:function(t,e,o){o.r(e),o.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=o(87462),s=o(63366),r=(o(67294),o(3905)),i=o(87308),a=o(28268),u=["components"],l={title:"How To List Outputs"},c=void 0,p={unversionedId:"libraries/nodejs/how_to/list_outputs",id:"libraries/nodejs/how_to/list_outputs",title:"How To List Outputs",description:"",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/4_list_outputs.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/list_outputs",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/list_outputs",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/4_list_outputs.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How To List Outputs"},sidebar:"docs",previous:{title:"How To Restore From A Backup",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/restore"},next:{title:"How To List Transactions",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/list_transactions"}},d={},m=[],w={toc:m};function f(t){var e=t.components,o=(0,s.Z)(t,u);return(0,r.kt)("wrapper",(0,n.Z)({},w,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example lists the outputs of the first account\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n        \n        await account.sync();\n        const outputs = await account.listOutputs()\n        console.log('Listing Outputs:', outputs); \n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,r.kt)(a.ZP,{mdxType:"MoreExamples"}))}f.isMDXComponent=!0},28268:function(t,e,o){o.d(e,{ZP:function(){return u}});var n=o(87462),s=o(63366),r=(o(67294),o(3905)),i=["components"],a={toc:[]};function u(t){var e=t.components,o=(0,s.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},a,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"More advanced examples can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}u.isMDXComponent=!0}}]);