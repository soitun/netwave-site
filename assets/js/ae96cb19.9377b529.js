"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97559],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={image:"/img/integration-services/logo/integration_services.png",description:"This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes instance.",keywords:["how to","integration services kubernetes","services kubernetes instance","Kubernetes","configuration","MongoDB","APIs"]},l="Configuration",c={unversionedId:"getting_started/installation/kubernetes/configuration",id:"getting_started/installation/kubernetes/configuration",title:"Configuration",description:"This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes instance.",source:"@site/content/build/integration-services/production/documentation/docs/getting_started/installation/kubernetes/configuration.md",sourceDirName:"getting_started/installation/kubernetes",slug:"/getting_started/installation/kubernetes/configuration",permalink:"/integration-services/getting_started/installation/kubernetes/configuration",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/getting_started/installation/kubernetes/configuration.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes instance.",keywords:["how to","integration services kubernetes","services kubernetes instance","Kubernetes","configuration","MongoDB","APIs"]},sidebar:"docs",previous:{title:"Local Setup",permalink:"/integration-services/getting_started/installation/kubernetes/local_setup"},next:{title:"Local Setup",permalink:"/integration-services/getting_started/installation/docker_compose_setup"}},u={},p=[{value:"Database",id:"database",level:2},{value:"Secrets",id:"secrets",level:2},{value:"Number of Replicas",id:"number-of-replicas",level:2},{value:"Private Tangle",id:"private-tangle",level:2}],g={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes\ninstance. Please keep in mind that all values must be changed before deployment. If your Kubernetes instance is already\nrunning, you should run the following command to load your most recent configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f kubernetes/optional -f kubernetes/ -f kubernetes/kong-gw\n")),(0,a.kt)("h2",{id:"database"},"Database"),(0,a.kt)("p",null,"You can connect the Integration Service APIs to any MongoDB database by changing the following parameters\nin  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-config.yaml"},"kubernetes/is-config.yaml file")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," with the connection string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_NAME")," with the database name")),(0,a.kt)("p",null,"The default values reference a single-instance MongoDB instance that is deployed\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes/optional/mongo-*.yaml")," files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace."),(0,a.kt)("h2",{id:"secrets"},"Secrets"),(0,a.kt)("p",null,"The Integration Services APIs are protected by a fixed api key. Furthermore, the data on database is encrypted using a\nserver key."),(0,a.kt)("p",null,"Both of these keys are defined in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-secrets.yaml"},"is-secrets.yaml file"),"\nand are base64 encoded, so you can obtain them with by running the follwing command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo -n ...SERVER_SECRET_KEY or API_KEY... | base64\n")),(0,a.kt)("p",null,"The default values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"7w9gfhb123jngh4gd53z465fewcs569e")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"SERVER_SECRET"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"7w9gfhb123jngh4gd53z465fewcs569e")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"JWT_SECRET"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4ed59704-9a26-11ec-a749-3f57454709b9")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"API_KEY"),".")),(0,a.kt)("h2",{id:"number-of-replicas"},"Number of Replicas"),(0,a.kt)("p",null,"You can set up the initial number of replicas in the ",(0,a.kt)("inlineCode",{parentName:"p"},".spec.replicas")," field\nin ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/kubernetes/audit-trail-deployment.yaml"},"kubernetes/audit-trail-deployment.yaml  file")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/kubernetes/ssi-bridge-deployment.yaml"},"kubernetes/ssi-bridge-deployment.yaml  file"),"\n."),(0,a.kt)("h2",{id:"private-tangle"},"Private Tangle"),(0,a.kt)("p",null,"You can reference your own private IOTA node (either from the mainnet tangle or a private one) by the ",(0,a.kt)("inlineCode",{parentName:"p"},"IOTA_PERMA_NODE"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"IOTA_HORNET_NODE")," fields in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-config.yaml"},"kubernetes/is-config.yaml file"),"\n."))}d.isMDXComponent=!0}}]);