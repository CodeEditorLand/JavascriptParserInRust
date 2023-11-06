"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[377],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(2962),a=(t(9496),t(9613));const i={id:"typescript",title:"TypeScript"},o=void 0,s={unversionedId:"typescript",id:"typescript",title:"TypeScript",description:"So you are done with JavaScript and you want to challenge parsing TypeScript?",source:"@site/docs/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/javascript-parser-in-rust/docs/typescript",draft:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/typescript.md",tags:[],version:"current",frontMatter:{id:"typescript",title:"TypeScript"},sidebar:"tutorialSidebar",previous:{title:"Semantic Analysis",permalink:"/javascript-parser-in-rust/docs/semantics_analysis"},next:{title:"References",permalink:"/javascript-parser-in-rust/docs/references"}},p={},l=[{value:"JSX vs TSX",id:"jsx-vs-tsx",level:2},{value:"Lookahead",id:"lookahead",level:2},{value:"TSIndexSignature",id:"tsindexsignature",level:3},{value:"Arrow Expressions",id:"arrow-expressions",level:3}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So you are done with JavaScript and you want to challenge parsing TypeScript?\nThe bad news is that there is no specification,\nbut the good news is that the TypeScript parser is in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/blob/main/src/compiler/parser.ts"},"a single file")," \ud83d\ude43."),(0,a.kt)("h2",{id:"jsx-vs-tsx"},"JSX vs TSX"),(0,a.kt)("p",null,"For the following code,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let foo = <string> bar;\n")),(0,a.kt)("p",null,"It is a syntax error if this is ",(0,a.kt)("inlineCode",{parentName:"p"},"tsx")," (Unterminated JSX),\nbut it is correct ",(0,a.kt)("inlineCode",{parentName:"p"},"VariableDeclaration")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"TSTypeAssertion"),"."),(0,a.kt)("h2",{id:"lookahead"},"Lookahead"),(0,a.kt)("p",null,"In certain places, the parser need to lookahead and peek more than one token to determine the correct grammar."),(0,a.kt)("h3",{id:"tsindexsignature"},"TSIndexSignature"),(0,a.kt)("p",null,"For example, to parse ",(0,a.kt)("inlineCode",{parentName:"p"},"TSIndexSignature"),", consider the following two cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type A = { readonly [a: number]: string }\n           ^__________________________^ TSIndexSignature\n\ntype B = { [a]: string }\n           ^_________^ TSPropertySignature\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"type A")," on the first ",(0,a.kt)("inlineCode",{parentName:"p"},"{"),", we need to peek 5 tokens (",(0,a.kt)("inlineCode",{parentName:"p"},"readonly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"["),", ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") in order to make sure\nit is a ",(0,a.kt)("inlineCode",{parentName:"p"},"TSIndexSignature")," and not a ",(0,a.kt)("inlineCode",{parentName:"p"},"TSPropertySignature"),"."),(0,a.kt)("p",null,"To make this possible and efficient, the lexer requires a buffer for storing multiple tokens."),(0,a.kt)("h3",{id:"arrow-expressions"},"Arrow Expressions"),(0,a.kt)("p",null,"Discussed in ",(0,a.kt)("a",{parentName:"p",href:"/blog/grammar#cover-grammar"},"cover grammar"),",\nwe need to convert from ",(0,a.kt)("inlineCode",{parentName:"p"},"Expression"),"s to ",(0,a.kt)("inlineCode",{parentName:"p"},"BindingPattern"),"s when the ",(0,a.kt)("inlineCode",{parentName:"p"},"=>")," token is found after a SequenceExpression."),(0,a.kt)("p",null,"But this approach does not work for TypeScript as each item inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," can have TypeScript syntax, there are just too many cases to cover, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"<x>a, b as c, d!;\n(a?: b = {} as c!) => {};\n")),(0,a.kt)("p",null,"It is recommended to study the TypeScript source code for this specific case. The relevant code are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function tryParseParenthesizedArrowFunctionExpression(\n  allowReturnTypeInArrowFunction: boolean\n): Expression | undefined {\n  const triState = isParenthesizedArrowFunctionExpression();\n  if (triState === Tristate.False) {\n    // It's definitely not a parenthesized arrow function expression.\n    return undefined;\n  }\n\n  // If we definitely have an arrow function, then we can just parse one, not requiring a\n  // following => or { token. Otherwise, we *might* have an arrow function.  Try to parse\n  // it out, but don't allow any ambiguity, and return 'undefined' if this could be an\n  // expression instead.\n  return triState === Tristate.True\n    ? parseParenthesizedArrowFunctionExpression(\n        /*allowAmbiguity*/ true,\n        /*allowReturnTypeInArrowFunction*/ true\n      )\n    : tryParse(() =>\n        parsePossibleParenthesizedArrowFunctionExpression(\n          allowReturnTypeInArrowFunction\n        )\n      );\n}\n\n//  True        -> We definitely expect a parenthesized arrow function here.\n//  False       -> There *cannot* be a parenthesized arrow function here.\n//  Unknown     -> There *might* be a parenthesized arrow function here.\n//                 Speculatively look ahead to be sure, and rollback if not.\nfunction isParenthesizedArrowFunctionExpression(): Tristate {\n  if (\n    token() === SyntaxKind.OpenParenToken ||\n    token() === SyntaxKind.LessThanToken ||\n    token() === SyntaxKind.AsyncKeyword\n  ) {\n    return lookAhead(isParenthesizedArrowFunctionExpressionWorker);\n  }\n\n  if (token() === SyntaxKind.EqualsGreaterThanToken) {\n    // ERROR RECOVERY TWEAK:\n    // If we see a standalone => try to parse it as an arrow function expression as that's\n    // likely what the user intended to write.\n    return Tristate.True;\n  }\n  // Definitely not a parenthesized arrow function.\n  return Tristate.False;\n}\n")),(0,a.kt)("p",null,"In summary, the TypeScript parser uses a combination of lookahead (fast path) and backtracking to parse arrow functions."))}u.isMDXComponent=!0}}]);