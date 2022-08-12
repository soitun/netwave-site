"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59964],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92268:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(34259),l=t(18679),s=["components"],u={image:"/img/integration-services/logo/integration_services.png",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",keywords:["how to","channels","authorize channel","subscribe channel","read channel","maven","java","nodejs","javascript"]},c="Authorize a Channel",p={unversionedId:"how_tos/integration-services-sdk/authorize-to-channel",id:"how_tos/integration-services-sdk/authorize-to-channel",title:"Authorize a Channel",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/authorize-to-channel.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/authorize-to-channel",permalink:"/integration-services/how_tos/integration-services-sdk/authorize-to-channel",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/authorize-to-channel.mdx",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",keywords:["how to","channels","authorize channel","subscribe channel","read channel","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"Create a Channel",permalink:"/integration-services/how_tos/integration-services-sdk/create-channel"},next:{title:"Search Channel and Validate Data",permalink:"/integration-services/how_tos/integration-services-sdk/search-channel-and-validate-data"}},d={},h=[{value:"Subscribe to a Channel",id:"subscribe-to-a-channel",level:2},{value:"Authorize a Subscription",id:"authorize-a-subscription",level:2},{value:"Write to a Channel",id:"write-to-a-channel",level:2},{value:"Read from a Channel",id:"read-from-a-channel",level:2}],m={toc:h};function b(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorize-a-channel"},"Authorize a Channel"),(0,i.kt)("p",null,"The example-6 script performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create two identities: ",(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"User"),"."),(0,i.kt)("li",{parentName:"ol"},"Authorize each identity against Integration Services API using different clients."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," creates a channel and writes data on it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," tries to read from said channel, but fails because ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," does not have access."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," requests to ",(0,i.kt)("a",{parentName:"li",href:"#subscribe-to-channel"},"subscribe to the channel"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," finds an unapproved subscription, and ",(0,i.kt)("a",{parentName:"li",href:"#authorize-subscription"},"authorizes it"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," ",(0,i.kt)("a",{parentName:"li",href:"#write-to-a-channel"},"sends data to the channel"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," is able to ",(0,i.kt)("a",{parentName:"li",href:"#read-from-a-channel"},"read the second message sent by ",(0,i.kt)("inlineCode",{parentName:"a"},"User")," from that channel"),".")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.AuthorizeToChannel\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/AuthorizeToChannel.java"},"Example-6"))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-6\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/6-AuthorizeToChannel.ts"},"Example-6")))),(0,i.kt)("h2",{id:"subscribe-to-a-channel"},"Subscribe to a Channel"),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," tries to read from a channel while it did not have read/write permissions. This will raise an exception. The correct way is to first request subscription as shown in the following script:"),(0,i.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'JSONObject subRequest = userClient.requestSubscription(channelAddress,\nnew JSONObject().put("accessRights", AccessRights.READ_AND_WRITE.toString()));\nString subscriptionLink = subRequest.getString("subscriptionLink");\nSystem.out.println("subscription link " + subscriptionLink);\n'))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Request subscription to the channel as the user. The returned subscriptionLink can be used to authorize the user to the channel.\nconst { subscriptionLink } = await userClient.requestSubscription(channelAddress, {\naccessRights: AccessRights.ReadAndWrite\n});\n")))),(0,i.kt)("h2",{id:"authorize-a-subscription"},"Authorize a Subscription"),(0,i.kt)("p",null,"In order to allow ",(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," to read and write on that channel, its subscription needs to be authorized as shown in the following script:"),(0,i.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Find subscriptions to the channel that are not already authorized.\nList<SubscriptionInternal> allSubs = ownerClient.findAllSubscriptions(channelAddress, false);\n\nfor (SubscriptionInternal sub : allSubs) {\n    if (!(sub.isAuthorized())) {\n    System.out.println("authorising subscription " + sub.getId());\n    JSONObject auth = ownerClient.authorizeSubscription(channelAddress,\n    new JSONObject().put("id", channelUser.getJSONObject("doc").getString("id")));\n    System.out.println("KeyloadLink: " + auth.getString("keyloadLink"));\n}\n}\n'))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Find subscriptions to the channel that are not already authorized.\nconst subscriptions = await ownerClient.findAllSubscriptions(channelAddress, false);\n\nconst unauthorizedSubscriptions = subscriptions.filter(subscription => !subscription.isAuthorized)\n\nfor (const subscription of unauthorizedSubscriptions) {\n    // Authorize the user to the channel.\n    // Authorization can happen via the id of the user or the generated subscription link.\n    const keyloadLink = await ownerClient.authorizeSubscription(channelAddress, {\n    id: channelUser.doc.id\n    });\n    console.log("Subscription Keyload Link:", keyloadLink)\n}\n')))),(0,i.kt)("h2",{id:"write-to-a-channel"},"Write to a Channel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," can now write on a channel any JSON payload as using the following script:"),(0,i.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ownerClient.write(channelAddress, "log", null, new JSONObject().put("log", "This is log number 1"));\n'))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Writing data to the channel as the channel owner.\nawait ownerClient.write(channelAddress, {\n    payload: { log: `This is log file 1` }\n});\n")))),(0,i.kt)("h2",{id:"read-from-a-channel"},"Read from a Channel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," can now read from the channel successfully using the following script:"),(0,i.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    List<ChannelData> data2 = userClient.read(channelAddress, null, null, null, null, null);\n    for (ChannelData d : data2) {\n        System.out.println(d.toString());\n    }\n"))),(0,i.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    // Writing data to the channel as the channel owner.\n    await ownerClient.write(channelAddress, {\n    payload: { log: `This is log file 1` }\n    });\n")))))}b.isMDXComponent=!0},18679:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),i="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},34259:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(87462),r=t(67294),i=t(86010),o=t(51048),l=t(33609),s=t(1943),u=t(72957),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,o=e.lazy,d=e.block,h=e.defaultValue,m=e.values,b=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(n=null!=h?h:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),N=y.tabGroupChoices,T=y.setTabGroupChoices,C=(0,r.useState)(w),j=C[0],x=C[1],O=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var z=N[b];null!=z&&z!==j&&v.some((function(e){return e.value===z}))&&x(z)}var A=function(e){var n=e.currentTarget,t=O.indexOf(n),a=v[t].value;a!==j&&(S(n),x(a),null!=b&&T(b,String(a)))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;t=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,o=O.indexOf(e.currentTarget)-1;t=null!=(i=O[o])?i:O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:A,onClick:A},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function h(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}}}]);