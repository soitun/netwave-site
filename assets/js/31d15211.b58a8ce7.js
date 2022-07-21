"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[82561],{16003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={description:"How to contribute to IOTA Smart Contracts. How to create better pull requests by running tests and the linter locally.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","Contribute","pull request","linting","Go-lang","golangci-lint","how to"]},s="Contributing",u={unversionedId:"contribute",id:"contribute",title:"Contributing",description:"How to contribute to IOTA Smart Contracts. How to create better pull requests by running tests and the linter locally.",source:"@site/content/build/wasp/develop/documentation/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/smart-contracts/contribute",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/contribute.md",tags:[],version:"current",frontMatter:{description:"How to contribute to IOTA Smart Contracts. How to create better pull requests by running tests and the linter locally.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","Contribute","pull request","linting","Go-lang","golangci-lint","how to"]},sidebar:"tutorialSidebar",previous:{title:"Preconfigured Development Docker setup",permalink:"/smart-contracts/guide/development_tools/docker_preconfigured"},next:{title:"Exposed Metrics",permalink:"/smart-contracts/metrics"}},c={},p=[{value:"Creating a Pull Request",id:"creating-a-pull-request",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Running the Linter",id:"running-the-linter",level:2},{value:"Setup",id:"setup",level:3},{value:"Step 1: Install golintci",id:"step-1-install-golintci",level:4},{value:"Step 2: Set Up Your Environment",id:"step-2-set-up-your-environment",level:4},{value:"Usage",id:"usage",level:3},{value:"False Positives",id:"false-positives",level:3},{value:"Appendix: Recommended Settings",id:"appendix-recommended-settings",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"GoLand",id:"goland",level:3}],d={toc:p};function g(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"If you want to contribute to this repository, consider posting a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/issues/new-issue"},"bug report"),", feature request, or a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/pulls/"},"pull request"),"."),(0,a.kt)("p",null,"You can talk to us directly on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"Discord server"),", in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#smartcontracts-dev")," channel."),(0,a.kt)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,a.kt)("p",null,"Please base your work on the ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,a.kt)("p",null,"Before creating a pull request ensure that all tests pass locally, and that the linter reports no violations."),(0,a.kt)("h2",{id:"running-tests"},"Running Tests"),(0,a.kt)("p",null,"To run tests locally, execute one of the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go test -short -tags rocksdb,builtin_static ./...\n")),(0,a.kt)("p",null,"or, as an alternative:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make test-short\n")),(0,a.kt)("p",null,"The commands above execute a subset of all available tests. If you introduced major changes, consider running the whole test suite instead, with ",(0,a.kt)("inlineCode",{parentName:"p"},"make test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"make test-full")," (these can take several minutes, so go and grab a coffee!)."),(0,a.kt)("h2",{id:"running-the-linter"},"Running the Linter"),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("h4",{id:"step-1-install-golintci"},"Step 1: Install golintci"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"provider instructions")," on how to install golintci."),(0,a.kt)("h4",{id:"step-2-set-up-your-environment"},"Step 2: Set Up Your Environment"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/integrations/#editor-integration"},"provider instructions")," on how to integrate golintci into your source code editor. You can also find our ",(0,a.kt)("a",{parentName:"p",href:"#appendix-recommended-settings"},"recommended settings")," for VS Code and GoLand at the bottom of this article."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To run the linter locally, execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"golangci-lint run\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make lint\n")),(0,a.kt)("p",null,"The linter will also automatically run every time you run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make\n")),(0,a.kt)("h3",{id:"false-positives"},"False Positives"),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/false-positives/"},"disable"),' false positives by placing a special comment directly above the "violating" element:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//nolint\nfunc foobar() *string {\n    // ...\n}\n")),(0,a.kt)("p",null,"To be sure that linter will not ignore actual issues in the future, try to suppress only relevant warnings over an element. Also explain the reason why the ",(0,a.kt)("inlineCode",{parentName:"p"},"nolint")," is needed. E.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//nolint:unused // This is actually used by the xyz tool\nfunc foo() *string {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"appendix-recommended-settings"},"Appendix: Recommended Settings"),(0,a.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,a.kt)("p",null,"Adjust your VS Code settings as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// required:\n"go.lintTool": "golangci-lint",\n// recommended:\n"go.lintOnSave": "package"\n"go.lintFlags": ["--fix"],\n"editor.formatOnSave": true,\n')),(0,a.kt)("h3",{id:"goland"},"GoLand"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/12496-go-linter"},"golintci")," plugin.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot that shows how to install golintci in GoLand.",src:n(75901).Z,title:"Click to see the full-sized image.",width:"999",height:"740"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure path for golangci.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot that shows how to configure path for golangci in GoLand.",src:n(94337).Z,title:"Click to see the full-sized image.",width:"991",height:"731"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add a golangci file watcher with a custom command. We recommend you to use it with the ",(0,a.kt)("inlineCode",{parentName:"li"},"--fix")," parameter.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A screenshot that shows how to add a golangci file watcher in GoLand.",src:n(55614).Z,title:"Click to see the full-sized image.",width:"699",height:"443"})))}g.isMDXComponent=!0},75901:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-1-6e97b6e4c7df17ea575c301aa7c51113.png"},94337:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-2-d3eb0f9e4810e1dd3abd093a1ef4f3fc.png"},55614:function(e,t,n){t.Z=n.p+"assets/images/golintci-goland-3-743934a7d30130bd2a92f1ad024544be.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);