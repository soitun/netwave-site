"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59964],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(87462),r=(t(67294),t(3905)),i=t(54411),o=t(43305);const l={image:"/img/integration-services/logo/integration_services.png",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",keywords:["how to","channels","authorize channel","subscribe channel","read channel","maven","java","nodejs","javascript"]},s="Authorize a Channel",c={unversionedId:"how_tos/integration-services-sdk/authorize-to-channel",id:"how_tos/integration-services-sdk/authorize-to-channel",title:"Authorize a Channel",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/authorize-to-channel.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/authorize-to-channel",permalink:"/integration-services/how_tos/integration-services-sdk/authorize-to-channel",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/authorize-to-channel.mdx",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",keywords:["how to","channels","authorize channel","subscribe channel","read channel","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"Create a Channel",permalink:"/integration-services/how_tos/integration-services-sdk/create-channel"},next:{title:"Search Channel and Validate Data",permalink:"/integration-services/how_tos/integration-services-sdk/search-channel-and-validate-data"}},u={},d=[{value:"Subscribe to a Channel",id:"subscribe-to-a-channel",level:2},{value:"Authorize a Subscription",id:"authorize-a-subscription",level:2},{value:"Write to a Channel",id:"write-to-a-channel",level:2},{value:"Read from a Channel",id:"read-from-a-channel",level:2}],p={toc:d};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authorize-a-channel"},"Authorize a Channel"),(0,r.kt)("p",null,"The example-6 script performs the following tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create two identities: ",(0,r.kt)("inlineCode",{parentName:"li"},"Owner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"User"),"."),(0,r.kt)("li",{parentName:"ol"},"Authorize each identity against Integration Services API using different clients."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Owner")," creates a channel and writes data on it."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"User")," tries to read from said channel, but fails because ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," does not have access."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"User")," requests to ",(0,r.kt)("a",{parentName:"li",href:"#subscribe-to-channel"},"subscribe to the channel"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Owner")," finds an unapproved subscription, and ",(0,r.kt)("a",{parentName:"li",href:"#authorize-subscription"},"authorizes it"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"User")," ",(0,r.kt)("a",{parentName:"li",href:"#write-to-a-channel"},"sends data to the channel"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Owner")," is able to ",(0,r.kt)("a",{parentName:"li",href:"#read-from-a-channel"},"read the second message sent by ",(0,r.kt)("inlineCode",{parentName:"a"},"User")," from that channel"),".")),(0,r.kt)("p",null,"You can run the example with the following command:"),(0,r.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.AuthorizeToChannel\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/AuthorizeToChannel.java"},"Example-6"))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-6\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/6-AuthorizeToChannel.ts"},"Example-6")))),(0,r.kt)("h2",{id:"subscribe-to-a-channel"},"Subscribe to a Channel"),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"userClient")," tries to read from a channel while it did not have read/write permissions. This will raise an exception. The correct way is to first request subscription as shown in the following script:"),(0,r.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'JSONObject subRequest = userClient.requestSubscription(channelAddress,\nnew JSONObject().put("accessRights", AccessRights.READ_AND_WRITE.toString()));\nString subscriptionLink = subRequest.getString("subscriptionLink");\nSystem.out.println("subscription link " + subscriptionLink);\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Request subscription to the channel as the user. The returned subscriptionLink can be used to authorize the user to the channel.\nconst { subscriptionLink } = await userClient.requestSubscription(channelAddress, {\naccessRights: AccessRights.ReadAndWrite\n});\n")))),(0,r.kt)("h2",{id:"authorize-a-subscription"},"Authorize a Subscription"),(0,r.kt)("p",null,"In order to allow ",(0,r.kt)("inlineCode",{parentName:"p"},"userClient")," to read and write on that channel, its subscription needs to be authorized as shown in the following script:"),(0,r.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Find subscriptions to the channel that are not already authorized.\nList<SubscriptionInternal> allSubs = ownerClient.findAllSubscriptions(channelAddress, false);\n\nfor (SubscriptionInternal sub : allSubs) {\n    if (!(sub.isAuthorized())) {\n    System.out.println("authorising subscription " + sub.getId());\n    JSONObject auth = ownerClient.authorizeSubscription(channelAddress,\n    new JSONObject().put("id", channelUser.getJSONObject("doc").getString("id")));\n    System.out.println("KeyloadLink: " + auth.getString("keyloadLink"));\n}\n}\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Find subscriptions to the channel that are not already authorized.\nconst subscriptions = await ownerClient.findAllSubscriptions(channelAddress, false);\n\nconst unauthorizedSubscriptions = subscriptions.filter(subscription => !subscription.isAuthorized)\n\nfor (const subscription of unauthorizedSubscriptions) {\n    // Authorize the user to the channel.\n    // Authorization can happen via the id of the user or the generated subscription link.\n    const keyloadLink = await ownerClient.authorizeSubscription(channelAddress, {\n    id: channelUser.doc.id\n    });\n    console.log("Subscription Keyload Link:", keyloadLink)\n}\n')))),(0,r.kt)("h2",{id:"write-to-a-channel"},"Write to a Channel"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"userClient")," can now write on a channel any JSON payload as using the following script:"),(0,r.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ownerClient.write(channelAddress, "log", null, new JSONObject().put("log", "This is log number 1"));\n'))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Writing data to the channel as the channel owner.\nawait ownerClient.write(channelAddress, {\n    payload: { log: `This is log file 1` }\n});\n")))),(0,r.kt)("h2",{id:"read-from-a-channel"},"Read from a Channel"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"userClient")," can now read from the channel successfully using the following script:"),(0,r.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    List<ChannelData> data2 = userClient.read(channelAddress, null, null, null, null, null);\n    for (ChannelData d : data2) {\n        System.out.println(d.toString());\n    }\n"))),(0,r.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    // Writing data to the channel as the channel owner.\n    await ownerClient.write(channelAddress, {\n    payload: { log: `This is log file 1` }\n    });\n")))))}h.isMDXComponent=!0},43305:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const i="tabItem__kUE";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},54411:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),r=t(67294),i=t(86010),o=t(51048),l=t(33609),s=t(1943),c=t(72957);const u="tabList_fbd4",d="tabItem_v5XY";function p(e){var n,t;const{lazy:o,block:p,defaultValue:h,values:m,groupId:b,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,l.l)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===h?h:null!=(n=null!=h?h:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[T,C]=(0,r.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&v.some((n=>n.value===e))&&C(e)}const O=e=>{const n=e.currentTarget,t=j.indexOf(n),a=v[t].value;a!==T&&(x(n),C(a),null!=b&&N(b,String(a)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=j.indexOf(e.currentTarget)+1;t=null!=(a=j[n])?a:j[0];break}case"ArrowLeft":{var r;const n=j.indexOf(e.currentTarget)-1;t=null!=(r=j[n])?r:j[j.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},g)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>j.push(e),onKeyDown:S,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function h(e){const n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);