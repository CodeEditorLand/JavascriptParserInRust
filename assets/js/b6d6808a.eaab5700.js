"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[85],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(2962),r=(t(9496),t(9613));const i={id:"lexer",title:"Lexer"},o=void 0,s={unversionedId:"lexer",id:"lexer",title:"Lexer",description:"Token",source:"@site/docs/lexer.md",sourceDirName:".",slug:"/lexer",permalink:"/javascript-parser-in-rust/docs/lexer",draft:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/lexer.md",tags:[],version:"current",frontMatter:{id:"lexer",title:"Lexer"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/javascript-parser-in-rust/docs/overview"},next:{title:"Abstract Syntax Tree",permalink:"/javascript-parser-in-rust/docs/ast"}},l={},p=[{value:"Token",id:"token",level:2},{value:"Peek",id:"peek",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"Comments",id:"comments",level:3},{value:"Identifiers and Unicode",id:"identifiers-and-unicode",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Token Value",id:"token-value",level:3},{value:"Rust Optimizations",id:"rust-optimizations",level:2},{value:"Smaller Tokens",id:"smaller-tokens",level:3},{value:"String Interning",id:"string-interning",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"token"},"Token"),(0,r.kt)("p",null,"The lexer, also known as tokenizer or scanner, is responsible for transforming source text into tokens.\nThe tokens will later be consumed by the parser so we don't have to worry about whitespaces and comments from the original text."),(0,r.kt)("p",null,"Let's start simple and transform a single ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," text into a token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Clone, Copy, PartialEq)]\npub struct Token {\n    /// Token Type\n    pub kind: Kind,\n\n    /// Start offset in source\n    pub start: usize,\n\n    /// End offset in source\n    pub end: usize,\n}\n\n#[derive(Debug, Clone, Copy, PartialEq)]\npub enum Kind {\n    Eof, // end of file\n    Plus,\n}\n")),(0,r.kt)("p",null,"A single ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," gives us"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[\n    Token { kind: Kind::Plus, start: 0, end: 1 },\n    Token { kind: Kind::Eof,  start: 1, end: 1 }\n]\n")),(0,r.kt)("p",null,"To loop through the string, we can either keep track of an index and pretend that we are writing C code,\nor we can take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.str.html#"},"string documentation"),"\nand find ourselves a ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/str/struct.Chars.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Chars"))," iterator to work with."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Chars")," iterator abstracts away the tracking index and boundary checking to make us feel truly safe."),(0,r.kt)("p",{parentName:"admonition"},"It gives us an ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<char>")," when we call ",(0,r.kt)("inlineCode",{parentName:"p"},"chars.next()"),".\nBut please note that a ",(0,r.kt)("inlineCode",{parentName:"p"},"char")," is not a 0-255 ASCII value,\nit is a utf8 Unicode point value with the range of 0 to 0x10FFFF.")),(0,r.kt)("p",null,"Let's define a starter lexer abstraction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use std::str::Chars;\n\nstruct Lexer<'a> {\n    /// Source Text\n    source: &'a str,\n\n    /// The remaining characters\n    chars: Chars<'a>\n}\n\nimpl<'a> Lexer<'a> {\n    pub fn new(source: &'a str) -> Self {\n        Self {\n            source,\n            chars: source.chars()\n        }\n    }\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The lifetime ",(0,r.kt)("inlineCode",{parentName:"p"},"'a")," here indicates the iterator has a reference to somewhere, it references to a ",(0,r.kt)("inlineCode",{parentName:"p"},"&'a str")," in this case.")),(0,r.kt)("p",null,"To convert the source text to tokens, just keep calling ",(0,r.kt)("inlineCode",{parentName:"p"},"chars.next()")," and match on the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"s.\nThe final token will always be ",(0,r.kt)("inlineCode",{parentName:"p"},"Kind::Eof"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl<'a> Lexer<'a> {\n    fn read_next_kind(&mut self) -> Kind {\n        while let Some(c) = self.chars.next() {\n            match c {\n              '+' => return Kind::Plus,\n              _ => {}\n            }\n        }\n        Kind::Eof\n    }\n\n    fn read_next_token(&mut self) -> Token {\n        let start = self.offset();\n        let kind = self.read_next_kind();\n        let end = self.offset();\n        Token { kind, start, end }\n    }\n\n    /// Get the length offset from the source text, in UTF-8 bytes\n    fn offset(&self) -> usize {\n        self.source.len() - self.chars.as_str().len()\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".len()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".as_str().len()")," method calls inside ",(0,r.kt)("inlineCode",{parentName:"p"},"fn offset")," feel like O(n), so let's dig deeper."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/src/core/str/iter.rs.html#112"},(0,r.kt)("inlineCode",{parentName:"a"},".as_str()"))," returns a pointer to a string slice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/str/iter.rs#L112-L115\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/slice/index.html"},"slice")," is a view into a block of memory represented as a pointer and a length.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},".len()")," method returns the meta data stored inside the slice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/str/mod.rs#L157-L159\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/str/mod.rs#L323-L325\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/slice/mod.rs#L129-L138\n")),(0,r.kt)("p",null,"All the above code will get compiled into a single data access, so ",(0,r.kt)("inlineCode",{parentName:"p"},".as_str().len()")," is actually O(1)."),(0,r.kt)("h2",{id:"peek"},"Peek"),(0,r.kt)("p",null,"To tokenize multi-character operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"++")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"+="),", a helper function ",(0,r.kt)("inlineCode",{parentName:"p"},"peek")," is required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn peek(&self) -> Option<char> {\n    self.chars.clone().next()\n}\n")),(0,r.kt)("p",null,"We don't want to advance the original ",(0,r.kt)("inlineCode",{parentName:"p"},"chars")," iterator so we clone the iterator and advance the index."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," is cheap if we dig into the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/src/core/slice/iter.rs.html#148-152"},"source code"),",\nit just copies the tracking and boundary index."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/rust-lang/rust/blob/b998821e4c51c44a9ebee395c91323c374236bbb/library/core/src/slice/iter.rs#L148-L152\n"))),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"peek")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chars.next()")," is the former will always return the ",(0,r.kt)("strong",{parentName:"p"},"same")," next ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),",\nwhile the later will move forward and return a different ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"."),(0,r.kt)("p",null,"To demonstrate, consider the string ",(0,r.kt)("inlineCode",{parentName:"p"},"abc"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"repeated ",(0,r.kt)("inlineCode",{parentName:"li"},"peek()")," call returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Some(a)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Some(a)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Some(a)"),", ..."),(0,r.kt)("li",{parentName:"ul"},"repeated ",(0,r.kt)("inlineCode",{parentName:"li"},"chars.next()")," call returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Some('a')"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Some('b')"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Some('c')"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),".")),(0,r.kt)("p",null,"Equipped with ",(0,r.kt)("inlineCode",{parentName:"p"},"peek"),", tokenizing ",(0,r.kt)("inlineCode",{parentName:"p"},"++")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"+=")," are just nested if statements."),(0,r.kt)("p",null,"Here is a real-world implementation from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus"},"jsparagus"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/mozilla-spidermonkey/jsparagus/blob/master/crates/parser/src/lexer.rs#L1769-L1791\n")),(0,r.kt)("p",null,"The above logic applies to all operators, so let us expand our knowledge on lexing JavaScript."),(0,r.kt)("h2",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"A lexer written in Rust is rather boring, it feels like writing C code\nwhere we write long chained if statements and check for each ",(0,r.kt)("inlineCode",{parentName:"p"},"char")," and then return the respective token."),(0,r.kt)("p",null,"The real fun begins when we start lexing for JavaScript."),(0,r.kt)("p",null,"Let's open up the ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/"},"ECMAScript Language Specification")," and re-learn JavaScript."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"I still remember the first time I opened up the specification and went into a little corner\nand cried in agony because it feels like reading foreign text with jargons everywhere.\nSo head over to my ",(0,r.kt)("a",{parentName:"p",href:"/blog/ecma-spec"},"guide on reading the specification")," if things don't make sense.")),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("p",null,"Comments have no semantic meaning, they can be skipped if we are writing a runtime,\nbut they need to be taken into consideration if we are writing a linter or a bundler."),(0,r.kt)("h3",{id:"identifiers-and-unicode"},"Identifiers and Unicode"),(0,r.kt)("p",null,"We mostly code in ASCII,\nbut ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-ecmascript-language-source-code"},"Chapter 11 ECMAScript Language: Source Text"),"\nstates the source text should be in Unicode.\nAnd ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-names-and-keywords"},"Chapter 12.6 Names and Keywords"),"\nstates the identifiers are interpreted according to the Default Identifier Syntax given in Unicode Standard Annex #31.\nIn detail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"IdentifierStartChar ::\n    UnicodeIDStart\n\nIdentifierPartChar ::\n    UnicodeIDContinue\n\nUnicodeIDStart ::\n    any Unicode code point with the Unicode property \u201cID_Start\u201d\n\nUnicodeIDContinue ::\n    any Unicode code point with the Unicode property \u201cID_Continue\u201d\n")),(0,r.kt)("p",null,"This means that we can write ",(0,r.kt)("inlineCode",{parentName:"p"},"var \u0ca0_\u0ca0")," but not ",(0,r.kt)("inlineCode",{parentName:"p"},"var \ud83e\udd80"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"\u0ca0"),' has the Unicode property "ID_Start" while ',(0,r.kt)("inlineCode",{parentName:"p"},"\ud83e\udd80")," does not."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"I published the ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/unicode-id-start"},"unicode-id-start")," crate for this exact purpose.\n",(0,r.kt)("inlineCode",{parentName:"p"},"unicode_id_start::is_id_start(char)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unicode_id_start::is_id_continue(char)")," can be called to check Unicode.")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"All the ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-keywords-and-reserved-words"},"keywords")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"for"),"\nneed to be tokenized and interpreted as a whole.\nThey need to be added to the token kind enum so we don't have to make string comparisons in the parser."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Kind {\n    Identifier,\n    If,\n    While,\n    For\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is not a keyword, it is unnecessary to add it here.")),(0,r.kt)("p",null,"Tokenizing keywords will just be matching the identifier from above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn match_keyword(&self, ident: &str) -> Kind {\n    // all keywords are 1 <= length <= 10\n    if ident.len() == 1 || ident.len() > 10 {\n        return Kind::Identifier;\n    }\n    match ident {\n        "if" => Kind::If,\n        "while" => Kind::While,\n        "for" => Kind::For,\n        _ => Kind::Identifier\n    }\n}\n')),(0,r.kt)("h3",{id:"token-value"},"Token Value"),(0,r.kt)("p",null,"We often need to compare identifiers, numbers and strings in later stages of the compiler phases,\nfor example testing against identifiers inside a linter,"),(0,r.kt)("p",null,"These values are currently in plain source text,\nlet's convert them to Rust types so they are easier to work with."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Kind {\n    Eof, // end of file\n    Plus,\n    // highlight-start\n    Identifier,\n    Number,\n    String,\n    // highlight-end\n}\n\n#[derive(Debug, Clone, Copy, PartialEq)]\npub struct Token {\n    /// Token Type\n    pub kind: Kind,\n\n    /// Start offset in source\n    pub start: usize,\n\n    /// End offset in source\n    pub end: usize,\n\n    // highlight-next-line\n    pub value: TokenValue,\n}\n\n#[derive(Debug, Clone, PartialEq)]\npub enum TokenValue {\n    None,\n    Number(f64),\n    String(String),\n}\n")),(0,r.kt)("p",null,"When an identifier ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," or string ",(0,r.kt)("inlineCode",{parentName:"p"},'"bar"')," is tokenized , we get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'Token { kind: Kind::Identifier, start: 0, end: 2, value: TokenValue::String("foo") }\nToken { kind: Kind::String, start: 0, end: 4, value: TokenValue::String("bar") }\n')),(0,r.kt)("p",null,"To convert them to Rust strings, call ",(0,r.kt)("inlineCode",{parentName:"p"},"let s = self.source[token.start..token.end].to_string()"),"\nand save it with ",(0,r.kt)("inlineCode",{parentName:"p"},"token.value = TokenValue::String(s)"),"."),(0,r.kt)("p",null,"When we tokenized a number ",(0,r.kt)("inlineCode",{parentName:"p"},"1.23"),", we get a token with ",(0,r.kt)("inlineCode",{parentName:"p"},"Token { start: 0, end: 3 }"),".\nTo convert it to Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"f64"),", we can use the string ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.str.html#method.parse"},(0,r.kt)("inlineCode",{parentName:"a"},"parse")),"\nmethod by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"self.source[token.start..token.end].parse::<f64>()"),", and then save the value into ",(0,r.kt)("inlineCode",{parentName:"p"},"token.value"),".\nFor binary, octal and integers, an example of their parsing techniques can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus/blob/master/crates/parser/src/numeric_value.rs"},"jsparagus"),"."),(0,r.kt)("h2",{id:"rust-optimizations"},"Rust Optimizations"),(0,r.kt)("h3",{id:"smaller-tokens"},"Smaller Tokens"),(0,r.kt)("p",null,"It is tempting to put the token values inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kind")," enum and aim for simpler and safer code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Kind {\n    Number(f64),\n    String(String),\n}\n")),(0,r.kt)("p",null,"But it is known that the byte size of a Rust enum is the union of all its variants.\nThis enum packs a lot of bytes compared to the original enum, which has only 1 byte.\nThere will be heavy usages of this ",(0,r.kt)("inlineCode",{parentName:"p"},"Kind")," enum in the parser,\ndealing with a 1 byte enum will obviously be faster than a multi-byte enum."),(0,r.kt)("h3",{id:"string-interning"},"String Interning"),(0,r.kt)("p",null,"It is not performant to use ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," in compilers, mainly due to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")," is a heap allocated object"),(0,r.kt)("li",{parentName:"ul"},"String comparison is an O(n) operation")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/String_interning"},"String Interning")," solves these problems by\nstoring only one copy of each distinct string value with a unique identifier in a cache.\nThere will only be one heap allocation per distinct identifier or string, and string comparisons become O(1)."),(0,r.kt)("p",null,"There are lots of string interning libraries on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/search?q=string%20interning"},"crates.io"),"\nwith different pros and cons."),(0,r.kt)("p",null,"A sufficient starting point is to use ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/string_cache"},(0,r.kt)("inlineCode",{parentName:"a"},"string-cache")),",\nit has an ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," type and a compile time ",(0,r.kt)("inlineCode",{parentName:"p"},'atom!("string")')," interface."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"string-cache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenValue")," becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Clone, PartialEq)]\npub enum TokenValue {\n    None,\n    Number(f64),\n    // highlight-next-line\n    String(Atom),\n}\n")),(0,r.kt)("p",null,"and string comparison becomes ",(0,r.kt)("inlineCode",{parentName:"p"},'matches!(value, TokenValue::String(atom!("string")))'),"."))}c.isMDXComponent=!0}}]);