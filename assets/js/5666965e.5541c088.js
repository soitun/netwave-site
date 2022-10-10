"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[77929],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),f=d(i),m=n,u=f["".concat(l,".").concat(m)]||f[m]||p[m]||s;return i?a.createElement(u,o(o({ref:t},c),{},{components:i})):a.createElement(u,o({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var d=2;d<s;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},53617:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const s={description:"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle. The solidification specification depends on timestamps and UTXO.",image:"/img/research-specifications/solidification-process.png",slug:"4.4Solidification",keywords:["parents","age check","request","message id","buffer","weak solidification","strong solidification"]},o="4.4 Solidification",r={unversionedId:"4.4 Solidification",id:"4.4 Solidification",title:"4.4 Solidification",description:"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle. The solidification specification depends on timestamps and UTXO.",source:"@site/iota/external/iota-2.0-research-specifications/4.4 Solidification.md",sourceDirName:".",slug:"/4.4Solidification",permalink:"/IOTA-2.0-Research-Specifications/4.4Solidification",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/iota/external/iota-2.0-research-specifications/4.4 Solidification.md",tags:[],version:"current",frontMatter:{description:"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle. The solidification specification depends on timestamps and UTXO.",image:"/img/research-specifications/solidification-process.png",slug:"4.4Solidification",keywords:["parents","age check","request","message id","buffer","weak solidification","strong solidification"]},sidebar:"tutorialSidebar",previous:{title:"4.3 Tip Selection Algorithm",permalink:"/IOTA-2.0-Research-Specifications/4.3TipSelectionAlgorithm"},next:{title:"4.5 Rate Control Through Adaptive Proof of Work",permalink:"/IOTA-2.0-Research-Specifications/4.5RateControl"}},l={},d=[{value:"4.4.1 Motivation",id:"441-motivation",level:2},{value:"4.4.2 Definitions",id:"442-definitions",level:2},{value:"4.4.3 Parameters",id:"443-parameters",level:2},{value:"4.4.4 Solidification and Solidfication Check",id:"444-solidification-and-solidfication-check",level:2},{value:"Strong Solidification",id:"strong-solidification",level:3},{value:"Weak Solidification",id:"weak-solidification",level:3},{value:"4.4.5 Communication Details",id:"445-communication-details",level:2},{value:"4.4.5.1 Request and Response",id:"4451-request-and-response",level:3},{value:"SolidificationRequest",id:"solidificationrequest",level:3},{value:"SolidificationResponse",id:"solidificationresponse",level:3},{value:"4.4.6 Denial of Service",id:"446-denial-of-service",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"44-solidification"},"4.4 Solidification"),(0,n.kt)("p",null,"A message is solid if all its parents are stored, solid and valid. This section defines how messages get solid in the Tangle."),(0,n.kt)("p",null,"The Solidification specification depends on the following specifications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./4.2Timestamps"},"4.2 - Timestamps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./5.1UTXO"},"5.1 - UTXO"))),(0,n.kt)("h2",{id:"441-motivation"},"4.4.1 Motivation"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solidification")," is a process of requesting missing referenced messages. It may be recursively repeated until all of a message's past cone up to the genesis (or snapshot) becomes solid."),(0,n.kt)("p",null,"In that way, the Tangle enables all nodes to retrieve all of a message's history, even the ones joining the network at a point later in time."),(0,n.kt)("h2",{id:"442-definitions"},"4.4.2 Definitions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"valid"),":\nA message validity status is initialized as ",(0,n.kt)("em",{parentName:"p"},"valid"),", and it's set as ",(0,n.kt)("em",{parentName:"p"},"invalid")," whenever the message does not pass any of the filters from the solidifier and from the message booker:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Solidifier: checks if parents are valid,"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Booker: checks if the contained transaction is valid. Note that only messages containing a transaction are required to perform this check, which are defined in ",(0,n.kt)("a",{parentName:"li",href:"./5.1UTXO#validation"},"Section 5.1 - UTXO")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"parents age check"),": A check that ensures the timestamps of parents and child are valid, following the details defined in ",(0,n.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"solid"),": A message is solid if it passes the solidification check and all its parents are stored in the storage, solid and their validity status is set as valid."))),(0,n.kt)("h2",{id:"443-parameters"},"4.4.3 Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"retryInterval"),": The time interval of resending the same solidification request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"maxRequestThreshold"),": The maximum retry times to send a solidification request.")),(0,n.kt)("h2",{id:"444-solidification-and-solidfication-check"},"4.4.4 Solidification and Solidfication Check"),(0,n.kt)("p",null,"During solidification, if a node is missing a referenced message, the corresponding message ID is stored in the ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". A node asks its neighbors for the missing message by sending a ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification request")," containing the message ID.\nIt also sets a boolean flag ",(0,n.kt)("inlineCode",{parentName:"p"},"isStrongRequest")," for whether the missing message was requested as a strong (",(0,n.kt)("inlineCode",{parentName:"p"},"TRUE"),") or weak (",(0,n.kt)("inlineCode",{parentName:"p"},"FALSE"),") parent. This information can be used to decide which checks a message shall pass, when the message is received."),(0,n.kt)("p",null,"Note that through the following process the parents of a message that is requested through a weak solidification are not requested, and also the message does not have to pass the parent age check."),(0,n.kt)("p",null,"If a message gets solid, it shall walk through the rest of the data flow, then propagate the solid status to its future cone by performing the solidification checks on each of the message in its future cone again."),(0,n.kt)("h3",{id:"strong-solidification"},"Strong Solidification"),(0,n.kt)("p",null,"Once the requested message is received from its neighbors, its message ID shall be removed from the ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". If ",(0,n.kt)("inlineCode",{parentName:"p"},"isStrongRequest==TRUE")," the requested message is marked as solid after it passes the strong solidification checks. If any of the checks fails, the message remains unsolid, or is set to invalid, see. Image 4.4.1."),(0,n.kt)("p",null,"In the strong solidification check we check if"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"the parents exist;"),(0,n.kt)("li",{parentName:"ol"},"the parents are solid, and if not wait until these get solid;"),(0,n.kt)("li",{parentName:"ol"},"the parents age check passes,"),(0,n.kt)("li",{parentName:"ol"},"the parents are valid.")),(0,n.kt)("h3",{id:"weak-solidification"},"Weak Solidification"),(0,n.kt)("p",null,"Once the requested message is received from its neighbors, its message ID shall be removed from the ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification buffer"),". If ",(0,n.kt)("inlineCode",{parentName:"p"},"isStrongRequest==FALSE")," the requested message is marked as solid."),(0,n.kt)("p",null,"No weak solidification check has to be performed."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/11289354/117009286-28333200-ad1e-11eb-8d0d-186c8d8ce373.png"},(0,n.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/11289354/117009286-28333200-ad1e-11eb-8d0d-186c8d8ce373.png",alt:"Strong solidification process"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Image 4.4.1:")," Strong solidification process."),(0,n.kt)("h2",{id:"445-communication-details"},"4.4.5 Communication Details"),(0,n.kt)("p",null,"Nodes send and receive ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification request/response")," via gossip layer. The ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification request")," is created and scheduled by the gossip manager, if a node does not get the requested message, the gossip manager re-sends it every ",(0,n.kt)("inlineCode",{parentName:"p"},"retryInterval"),". If the requested message is not received within ",(0,n.kt)("inlineCode",{parentName:"p"},"maxRequestThreshold")," rounds, the ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification request")," must be removed from the ",(0,n.kt)("inlineCode",{parentName:"p"},"solidification buffer"),"."),(0,n.kt)("h3",{id:"4451-request-and-response"},"4.4.5.1 Request and Response"),(0,n.kt)("p",null,"Below we define the form of SolidificationRequest and SolidificationResponse:"),(0,n.kt)("h3",{id:"solidificationrequest"},"SolidificationRequest"),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"type"),(0,n.kt)("td",null,"uint8"),(0,n.kt)("td",null,"Indicates that the packet is SolidificationRequest.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"messageID"),(0,n.kt)("td",null,"ByteArray[32]"),(0,n.kt)("td",null,"Contains the message ID of the requested message.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Table 4.4.2:")," SolidificationRequest data fields description."),(0,n.kt)("h3",{id:"solidificationresponse"},"SolidificationResponse"),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"type"),(0,n.kt)("td",null,"uint8"),(0,n.kt)("td",null,"Indicates that the packet is SolidificationResponse.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"message"),(0,n.kt)("td",null,"ByteArray"),(0,n.kt)("td",null,"Contains the entire requested message.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Table 4.4.3:")," SolidificationResponses data fields description."),(0,n.kt)("h2",{id:"446-denial-of-service"},"4.4.6 Denial of Service"),(0,n.kt)("p",null,"All requests/responses exchanged during the solidification are sent via UDP. As such, any UDP based Denial of Service attack may harm the normal functionality of the solidification. To limit this, hardware based protection such as firewall or alternatively may be used."))}p.isMDXComponent=!0}}]);