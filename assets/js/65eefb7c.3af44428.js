"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20091],{32405:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=t(87308),i=t(28268),l=["components"],c={title:"How To Send An Nft"},d=void 0,u={unversionedId:"libraries/nodejs/how_to/send_nft",id:"libraries/nodejs/how_to/send_nft",title:"How To Send An Nft",description:"",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/12_send_nft.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/send_nft",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/send_nft",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/how_to/12_send_nft.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"How To Send An Nft"},sidebar:"docs",previous:{title:"How To Mint An Nft",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/mint_nft"},next:{title:"Stardust Exchange Integration Guide",permalink:"/wallet.rs/develop/libraries/nodejs/exchange_guide"}},p={},f=[],m={toc:f};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example will send an NFT\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const { initLogger } = require('@iota/wallet');\n    initLogger({\n        name: './wallet.log',\n        levelFilter: 'debug',\n        targetExclusions: [\"h2\", \"hyper\", \"rustls\"]\n    });\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // Send the full NFT output to the specified address\n        const response = await account.sendNft([{\n            //TODO: Replace with the address of your choice!\n            address: 'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0',\n            //TODO: Replace with an NFT id from your account, you can mint one with `25-mint-nft.js`.\n            nftId: '0x09aa7871e126cc41f1f3784a479a5dd5f23e4dd8b97e932a001e77a11ad42f0c',\n        }]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,a.kt)(i.ZP,{mdxType:"MoreExamples"}))}h.isMDXComponent=!0},28268:function(e,n,t){t.d(n,{ZP:function(){return l}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],i={toc:[]};function l(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"More advanced examples can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}l.isMDXComponent=!0}}]);