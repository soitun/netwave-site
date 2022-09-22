"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18605],{19272:(e,n,t)=>{t.d(n,{ZP:()=>s});var o=t(87462),a=(t(67294),t(3905));const i={toc:[]};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Dotenv",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}s.isMDXComponent=!0},20229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>M,contentTitle:()=>N,default:()=>D,frontMatter:()=>T,metadata:()=>E,toc:()=>O});var o=t(87462),a=(t(67294),t(3905)),i=t(54411),s=t(43305),r=t(44393);const l={toc:[{value:"How To Build A Basic Output",id:"how-to-build-a-basic-output",level:2}]};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-build-a-basic-output"},"How To Build A Basic Output"),(0,a.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'package output_builder;\n\nimport org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\nimport org.iota.types.Output;\nimport org.iota.types.UnlockCondition;\nimport org.iota.types.output_builder.BasicOutputBuilderParams;\nimport org.iota.types.secret.GenerateAddressesOptions;\nimport org.iota.types.secret.MnemonicSecretManager;\nimport org.iota.types.secret.Range;\n\npublic class BuildBasicOutput {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Configure a simple Basic output.\n        MnemonicSecretManager secretManager = new MnemonicSecretManager("endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river");\n        String hexAddress = client.bech32ToHex(client.generateAddresses(secretManager, new GenerateAddressesOptions().withRange(new Range(0, 1)))[0]);\n        String amount = "1000000";\n        UnlockCondition[] unlockConditions = new UnlockCondition[]{new UnlockCondition("{ type: 0, address: { type: 0, pubKeyHash: \\"" + hexAddress + "\\"} }")};\n        BasicOutputBuilderParams params = new BasicOutputBuilderParams().withAmount(amount).withUnlockConditions(unlockConditions);\n\n        // Build the output.\n        Output output = client.buildBasicOutput(params);\n\n        // Print the output.\n        System.out.println(output.toString());\n\n    }\n}'))}u.isMDXComponent=!0;const d={toc:[]};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 3,\n  "amount": "1000000",\n  "unlockConditions": [\n    {\n      "type": 0,\n      "address": {\n        "type": 0,\n        "pubKeyHash": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3"\n      }\n    }\n  ]\n}\n')))}c.isMDXComponent=!0;var p=t(19272);const m={toc:[]};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(p.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/11_build_output.js\n\n// Build a basic output\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n        const secretManager = {\n            Mnemonic: process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1,\n        };\n\n        const addresses = await client.generateAddresses(secretManager, {\n            range: {\n                start: 0,\n                end: 1,\n            },\n        });\n\n        const hexAddress = await client.bech32ToHex(addresses[0]);\n\n        // most simple basic output\n        const basicOutput = await client.buildBasicOutput({\n            amount: '1000000',\n            unlockConditions: [\n                {\n                    type: 0,\n                    address: {\n                        type: 0,\n                        pubKeyHash: hexAddress,\n                    },\n                },\n            ],\n        });\n\n        console.log(basicOutput);\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun();\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/11_build_output.js"))}h.isMDXComponent=!0;const b={toc:[]};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  type: 3,\n  amount: '1000000',\n  unlockConditions: [ { type: 0, address: [Object] } ]\n}\n")))}k.isMDXComponent=!0;const g={toc:[]};function _(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_client import IotaClient, MnemonicSecretManager\n\n# Create an IotaClient instance\nclient = IotaClient({\'nodes\': [\'https://api.testnet.shimmer.network\']})\n\nbasic_output = client.build_basic_output(\n    unlock_conditions=[\n        {\n            "type": 0,\n            "address": {\n                "type": 0,\n                "pubKeyHash": client.bech32_to_hex("rms1qzpf0tzpf8yqej5zyhjl9k3km7y6j0xjnxxh7m2g3jtj2z5grej67sl6l46"),\n            },\n        },\n    ],\n    amount=\'1000000\',\n)\nprint(f\'{basic_output}\')\n'),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 11_build_output.py"))}_.isMDXComponent=!0;const f={toc:[]};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  'type': 3,\n  'amount': '1000000',\n  'unlockConditions': [\n    {\n      'type': 0,\n      'address': {\n        'type': 0,\n        'pubKeyHash': '0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n      }\n    }\n  ]\n}\n")))}y.isMDXComponent=!0;const v={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function w(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(p.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example basic --release\n\nuse iota_client::{\n    block::output::{\n        feature::MetadataFeature,\n        unlock_condition::{\n            AddressUnlockCondition, ExpirationUnlockCondition, StorageDepositReturnUnlockCondition,\n            TimelockUnlockCondition, UnlockCondition,\n        },\n        BasicOutputBuilder, Feature,\n    },\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    utils::request_funds_from_faucet,\n    Client, Result,\n};\n\n/// In this example we will send basic outputs with different feature blocks\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production!\n    // Configure your own mnemonic in the ".env" file. Since the output amount cannot be zero, the seed must contain\n    // non-zero balance.\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n    let faucet_url = std::env::var("FAUCET_URL").unwrap();\n\n    // Create a client instance.\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    let address = client.get_addresses(&secret_manager).with_range(0..1).get_raw().await?[0];\n    println!(\n        "{}",\n        request_funds_from_faucet(&faucet_url, &address.to_bech32(client.get_bech32_hrp().await?)).await?\n    );\n\n    let basic_output_builder = BasicOutputBuilder::new_with_amount(1_000_000)?\n        .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(address)));\n\n    let outputs = vec![\n        // most simple output\n        basic_output_builder.clone().finish_output()?,\n        // with metadata feature block\n        basic_output_builder\n            .clone()\n            .add_feature(Feature::Metadata(MetadataFeature::new(vec![13, 37])?))\n            .finish_output()?,\n        // with storage deposit return\n        basic_output_builder\n            .clone()\n            .with_amount(234_100)?\n            .add_unlock_condition(UnlockCondition::StorageDepositReturn(\n                StorageDepositReturnUnlockCondition::new(address, 234_000)?,\n            ))\n            .finish_output()?,\n        // with expiration\n        basic_output_builder\n            .clone()\n            .add_unlock_condition(UnlockCondition::Expiration(ExpirationUnlockCondition::new(address, 1)?))\n            .finish_output()?,\n        // with timelock\n        basic_output_builder\n            .clone()\n            .add_unlock_condition(UnlockCondition::Timelock(TimelockUnlockCondition::new(1)?))\n            .finish_output()?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n\n    println!("Transaction sent: {node_url}/api/core/v2/blocks/{}", block.id());\n    println!("Block metadata: {node_url}/api/core/v2/blocks/{}/metadata", block.id());\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n    Ok(())\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example basic --release"))}w.isMDXComponent=!0;const C={toc:[]};function x(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x7e85b3a62beeedafadbb3dc89a6f5813c34417dfe44fc7a679f3b42b0df3210e\nBlock metadata: https://api.testnet.shimmer.network/api/core/v2/blocks/0x7e85b3a62beeedafadbb3dc89a6f5813c34417dfe44fc7a679f3b42b0df3210e/metadata\n")))}x.isMDXComponent=!0;const T={title:"Build a Basic Output",description:"Build a simple output using the Client.buildBasicOutput(options) function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","addressgetter","environment variable","java","nodejs","python","rust"]},N=void 0,E={unversionedId:"how_tos/build_output",id:"how_tos/build_output",title:"Build a Basic Output",description:"Build a simple output using the Client.buildBasicOutput(options) function.",source:"@site/content/build/iota.rs/develop/documentation/docs/how_tos/05_build_output.mdx",sourceDirName:"how_tos",slug:"/how_tos/build_output",permalink:"/iota.rs/develop/how_tos/build_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/how_tos/05_build_output.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Build a Basic Output",description:"Build a simple output using the Client.buildBasicOutput(options) function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","addressgetter","environment variable","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Get Outputs",permalink:"/iota.rs/develop/how_tos/get_output"},next:{title:"Get Address Balance",permalink:"/iota.rs/develop/how_tos/get_address_balances"}},M={},O=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],B={toc:O};function D(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},B,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can build a simple output using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client.buildBasicOutput(options)")," function."),(0,a.kt)("p",null,"The following code example will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/iota.rs/develop/how_tos/generate_addresses"},"Generate a public address"),"."),(0,a.kt)("li",{parentName:"ol"},"Build a simple output.")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(w,{mdxType:"RustCode"})),(0,a.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(h,{mdxType:"NodejsCode"})),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(_,{mdxType:"PythonCode"})),(0,a.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(u,{mdxType:"JavaCode"}))),(0,a.kt)("h2",{id:"expected-output"},"Expected Output"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(x,{mdxType:"RustOutput"})),(0,a.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(k,{mdxType:"NodejsOutput"})),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(y,{mdxType:"PythonOutput"})),(0,a.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(c,{mdxType:"JavaOutput"}))))}D.isMDXComponent=!0},43305:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(67294),a=t(86010);const i="tabItem__kUE";function s(e){let{children:n,hidden:t,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:t},n)}},54411:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(87462),a=t(67294),i=t(86010),s=t(51048),r=t(33609),l=t(1943),u=t(72957);const d="tabList_fbd4",c="tabItem_v5XY";function p(e){var n,t;const{lazy:s,block:p,defaultValue:m,values:h,groupId:b,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=h?h:g.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),f=(0,r.l)(_,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(n=null!=m?m:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==y&&!_.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+_.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[C,x]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=v[b];null!=e&&e!==C&&_.some((n=>n.value===e))&&x(e)}const E=e=>{const n=e.currentTarget,t=T.indexOf(n),o=_[t].value;o!==C&&(N(n),x(o),null!=b&&w(b,String(o)))},M=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var o;const n=T.indexOf(e.currentTarget)+1;t=null!=(o=T[n])?o:T[0];break}case"ArrowLeft":{var a;const n=T.indexOf(e.currentTarget)-1;t=null!=(a=T[n])?a:T[T.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},_.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>T.push(e),onKeyDown:M,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function m(e){const n=(0,s.Z)();return a.createElement(p,(0,o.Z)({key:String(n)},e))}}}]);