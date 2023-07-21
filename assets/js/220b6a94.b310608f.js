"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[983],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(2962),r=(n(9496),n(9613));const i={title:"The ECMAScript Specification"},o=void 0,s={permalink:"/javascript-parser-in-rust/blog/ecma-spec",editUrl:"https://github.com/Boshen/javascript-parser-in-rust/tree/main/blog/blog/ecma-spec.md",source:"@site/blog/ecma-spec.md",title:"The ECMAScript Specification",description:"The ECMAScript\xae 2023 Language Specification details everything about the JavaScript language, so anyone can implement their own JavaScript engine.",date:"2023-07-21T06:45:25.000Z",formattedDate:"July 21, 2023",tags:[],readingTime:3,hasTruncateMarker:!0,authors:[],frontMatter:{title:"The ECMAScript Specification"},prevItem:{title:"Grammar",permalink:"/javascript-parser-in-rust/blog/grammar"},nextItem:{title:"Conformance Tests",permalink:"/javascript-parser-in-rust/blog/conformance"}},l={authorsImageUrls:[]},p=[{value:"Notational Conventions",id:"notational-conventions",level:2},{value:"Recursion",id:"recursion",level:3},{value:"Optional",id:"optional",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Source Text",id:"source-text",level:2},{value:"ECMAScript Language: Lexical Grammar",id:"ecmascript-language-lexical-grammar",level:2},{value:"Automatic Semicolon Insertion",id:"automatic-semicolon-insertion",level:3},{value:"Expressions, Statements, Functions, Classes, Scripts and Modules",id:"expressions-statements-functions-classes-scripts-and-modules",level:2},{value:"Annex B",id:"annex-b",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/"},"The ECMAScript\xae 2023 Language Specification")," details everything about the JavaScript language, so anyone can implement their own JavaScript engine."),(0,r.kt)("p",null,"The following chapters need to be studied for our parser:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chapter 5: Notational Conventions"),(0,r.kt)("li",{parentName:"ul"},"Chapter 11: ECMAScript Language: Source Text"),(0,r.kt)("li",{parentName:"ul"},"Chapter 12: ECMAScript Language: Lexical Grammar"),(0,r.kt)("li",{parentName:"ul"},"Chapter 13 - 16: Expressions, Statements, Functions, Classes, Scripts and Modules"),(0,r.kt)("li",{parentName:"ul"},"Annex B: Additional ECMAScript Features for Web Browsers"),(0,r.kt)("li",{parentName:"ul"},"Annex C: The Strict Mode of ECMAScript")),(0,r.kt)("p",null,"For navigation inside the specification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anything clickable has a permanent link, they are shown on the URL as anchors, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"#sec-identifiers")),(0,r.kt)("li",{parentName:"ul"},"Hovering over things may show a tooltip, clicking on ",(0,r.kt)("inlineCode",{parentName:"li"},"References")," shows all its references")),(0,r.kt)("h2",{id:"notational-conventions"},"Notational Conventions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-grammar-notation"},"Chapter 5.1.5 Grammar Notation")," is the section we need to read."),(0,r.kt)("p",null,"The things to note here are:"),(0,r.kt)("h3",{id:"recursion"},"Recursion"),(0,r.kt)("p",null,"This is how lists are presented in the grammar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"ArgumentList :\n  AssignmentExpression\n  ArgumentList , AssignmentExpression\n")),(0,r.kt)("p",null,"means"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"a, b = 1, c = 2\n^_____________^ ArgumentList\n   ^__________^ ArgumentList, AssignmentExpression,\n          ^___^ AssignmentExpression\n")),(0,r.kt)("h3",{id:"optional"},"Optional"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_opt_")," suffix for optional syntax. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"VariableDeclaration :\n  BindingIdentifier Initializer_opt\n")),(0,r.kt)("p",null,"means"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var binding_identifier;\nvar binding_identifier = Initializer;\n                       ______________ Initializer_opt\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"[Return]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"[In]")," are parameters of the grammar."),(0,r.kt)("p",null,"For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdup"},"ScriptBody :\n    StatementList[~Yield, ~Await, ~Return]\n")),(0,r.kt)("p",null,"means top-level yield, await and return are not allowed in scripts, but"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdup"},"ModuleItem :\n  ImportDeclaration\n  ExportDeclaration\n  StatementListItem[~Yield, +Await, ~Return]\n")),(0,r.kt)("p",null,"allows for top-level await."),(0,r.kt)("h2",{id:"source-text"},"Source Text"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-types-of-source-code"},"Chapter 11.2 Types of Source Code")," tells us that\nthere is a huge distinction between script code and module code.\nAnd there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"use strict")," mode that makes the grammar saner by disallowing old JavaScript behaviors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Script Code")," is not strict, ",(0,r.kt)("inlineCode",{parentName:"p"},"use strict")," need to be inserted at the top of the file to make script code strict.\nIn html we write ",(0,r.kt)("inlineCode",{parentName:"p"},'<script src="javascript.js"><\/script>'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Module Code")," is automatically strict.\nIn html we write ",(0,r.kt)("inlineCode",{parentName:"p"},'<script type="module" src="main.mjs"><\/script>'),"."),(0,r.kt)("h2",{id:"ecmascript-language-lexical-grammar"},"ECMAScript Language: Lexical Grammar"),(0,r.kt)("p",null,"For more in-depth explanation, read the V8 blog on ",(0,r.kt)("a",{parentName:"p",href:"https://v8.dev/blog/understanding-ecmascript-part-3"},"Understanding the ECMAScript spec"),"."),(0,r.kt)("h3",{id:"automatic-semicolon-insertion"},(0,r.kt)("a",{parentName:"h3",href:"https://tc39.es/ecma262/#sec-automatic-semicolon-insertion"},"Automatic Semicolon Insertion")),(0,r.kt)("p",null,"This section describes all the rules where we can omit a semicolon while writing JavaScript.\nAll the explanation boils down to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"    pub fn asi(&mut self) -> Result<()> {\n        if self.eat(Kind::Semicolon) || self.can_insert_semicolon() {\n            return Ok(());\n        }\n        let range = self.prev_node_end..self.cur_token().start;\n        Err(SyntaxError::AutoSemicolonInsertion(range.into()))\n    }\n\n    pub const fn can_insert_semicolon(&self) -> bool {\n        self.cur_token().is_on_new_line || matches!(self.cur_kind(), Kind::RCurly | Kind::Eof)\n    }\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"asi")," function need to be manually called where applicable, for example in the end of statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"    fn parse_debugger_statement(&mut self) -> Result<Statement<'a>> {\n        let node = self.start_node();\n        self.expect(Kind::Debugger)?;\n        // highlight-next-line\n        self.asi()?;\n        self.ast.debugger_statement(self.finish_node(node))\n    }\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section on asi is written with a parser in mind,\nit explicitly states that the source text is parsed from left to right,\nwhich makes it almost impossible to write the parser in any other way.\nThe author of jsparagus made a rant about this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus/blob/master/js-quirks.md#automatic-semicolon-insertion-"},"here"),"."),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"The specification for this feature is both very-high-level and weirdly procedural (\u201cWhen, as the source text is parsed from left to right, a token is encountered...\u201d, as if the specification is telling a story about a browser. As far as I know, this is the only place in the spec where anything is assumed or implied about the internal implementation details of parsing.) But it would be hard to specify ASI any other way."))),(0,r.kt)("h2",{id:"expressions-statements-functions-classes-scripts-and-modules"},"Expressions, Statements, Functions, Classes, Scripts and Modules"),(0,r.kt)("p",null,"It takes a while to understand the syntactic grammar, then apply them to writing a parser.\nMore in-depth content can be found in ",(0,r.kt)("a",{parentName:"p",href:"./blog/grammar"},"the grammar tutorial"),"."),(0,r.kt)("h2",{id:"annex-b"},"Annex B"))}m.isMDXComponent=!0}}]);