"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[37732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89018:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Never store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0},19042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(89018);const o={description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","Gradle"]},l="Getting Started with Java",s={unversionedId:"getting_started/java",id:"getting_started/java",title:"Getting Started with Java",description:"Getting started with the official IOTA Client Library Java binding.",source:"@site/content/build/iota.rs/develop/documentation/docs/getting_started/java.mdx",sourceDirName:"getting_started",slug:"/getting_started/java",permalink:"/iota.rs/develop/getting_started/java",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/getting_started/java.mdx",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","Gradle"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/iota.rs/develop/getting_started/"},next:{title:"Getting Started with Node.js",permalink:"/iota.rs/develop/getting_started/nodejs"}},d={},u=[{value:"Security",id:"security",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Build the JAR for Your Operating System (Linux, macOS, Windows)",id:"build-the-jar-for-your-operating-system-linux-macos-windows",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Change to the Java Binding Directory",id:"change-to-the-java-binding-directory",level:3},{value:"Make <code>gradlew</code> Executable",id:"make-gradlew-executable",level:3},{value:"Build Your JAR",id:"build-your-jar",level:3},{value:"Use the Library",id:"use-the-library",level:2},{value:"Keep Learning",id:"keep-learning",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-java"},"Getting Started with Java"),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)(i.ZP,{mdxType:"WarningPasswordStorage"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The latest ",(0,r.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/downloads/"},"Java Development Kit (JDK)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo")," to compile the binding."),(0,r.kt)("li",{parentName:"ul"},"(for Linux only) ",(0,r.kt)("inlineCode",{parentName:"li"},"libudev"),". You can install it with ",(0,r.kt)("inlineCode",{parentName:"li"},"apt install libudev-dev"),".")),(0,r.kt)("h2",{id:"build-the-jar-for-your-operating-system-linux-macos-windows"},"Build the JAR for Your Operating System (Linux, macOS, Windows)"),(0,r.kt)("p",null,"To use the IOTA Java Client Library in your Java project, you must first build the library JAR for your operating\nsystem."),(0,r.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,r.kt)("p",null,"You can clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"iota.rs client library")," by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iotaledger/iota.rs.git\n")),(0,r.kt)("h3",{id:"change-to-the-java-binding-directory"},"Change to the Java Binding Directory"),(0,r.kt)("p",null,"After you have cloned the repository, you should change directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/iota-client-java"),". You can do so by\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs/bindings/java/iota-client-java\n")),(0,r.kt)("h3",{id:"make-gradlew-executable"},"Make ",(0,r.kt)("inlineCode",{parentName:"h3"},"gradlew")," Executable"),(0,r.kt)("p",null,"If needed, you can make the ",(0,r.kt)("inlineCode",{parentName:"p"},"gradlew")," file executable by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x gradlew\n")),(0,r.kt)("h3",{id:"build-your-jar"},"Build Your JAR"),(0,r.kt)("p",null,"You can now build your JAR file by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew jar\n")),(0,r.kt)("p",null,"This will produce a ",(0,r.kt)("inlineCode",{parentName:"p"},"JAR")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"build/libs/")," which you can add to your Java project."),(0,r.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,r.kt)("p",null,"After you linked the library, you can create a Client instance and interface with it as shown in the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\nimport org.iota.types.responses.NodeInfoResponse;\n\npublic class HelloWorld {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Get the node information for a given node.\n        NodeInfoResponse response = client.getNodeInfo();\n\n        // Print the URL of the node that was requested.\n        System.out.println(response.getNodeUrl());\n\n        // Print the node information for the requested node.\n        System.out.println(response.getNodeInfo());\n    }\n}\n')),(0,r.kt)("h2",{id:"keep-learning"},"Keep Learning"),(0,r.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,r.kt)("a",{parentName:"p",href:"/iota.rs/develop/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/java/iota-client-java/examples/ExampleProject/src"},"code example project "),"."))}c.isMDXComponent=!0}}]);