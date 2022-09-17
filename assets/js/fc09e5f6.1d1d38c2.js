"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99056],{57002:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>u,metadata:()=>r,toc:()=>l});var i=o(87462),a=(o(67294),o(3905)),n=o(44393);const u={title:"How To Get An Output"},p=void 0,r={unversionedId:"libraries/java/how_to/get_output",id:"libraries/java/how_to/get_output",title:"How To Get An Output",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/java/how_to/get_output.mdx",sourceDirName:"libraries/java/how_to",slug:"/libraries/java/how_to/get_output",permalink:"/iota.rs/develop/libraries/java/how_to/get_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/java/how_to/get_output.mdx",tags:[],version:"current",frontMatter:{title:"How To Get An Output"},sidebar:"docs",previous:{title:"How To Generate Addresses",permalink:"/iota.rs/develop/libraries/java/how_to/generate_addresses"},next:{title:"How To Build An Output",permalink:"/iota.rs/develop/libraries/java/how_to/build_output"}},s={},l=[],d={toc:l};function c(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{className:"language-java",mdxType:"CodeBlock"},'package node_api_core;\n\nimport org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\nimport org.iota.types.Output;\nimport org.iota.types.OutputMetadata;\nimport org.iota.types.ids.OutputId;\n\nimport java.util.Map;\n\nimport static node_api_core.ExampleUtils.setUpOutputId;\n\npublic class GetOutputs {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Set up a output ID for this example.\n        OutputId outputId = setUpOutputId(client);\n        \n        // Get the output for the given output id.\n        Map.Entry<Output, OutputMetadata> outputData = client.getOutput(outputId);\n\n        // Print the output and its metadata.\n        System.out.println(outputData.getKey());\n        System.out.println(outputData.getValue());\n    }\n}'))}c.isMDXComponent=!0}}]);