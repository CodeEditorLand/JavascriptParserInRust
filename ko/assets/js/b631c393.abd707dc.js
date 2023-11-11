"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[249],{8569:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(1527),s=n(7660);const i={id:"errors",title:"Dealing with Errors"},c=void 0,o={id:"errors",title:"Dealing with Errors",description:"\uc778\uc6a9: Dragon Book",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/javascript-parser-in-rust/ko/docs/errors",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/errors.md",tags:[],version:"current",frontMatter:{id:"errors",title:"Dealing with Errors"},sidebar:"tutorialSidebar",previous:{title:"Parser",permalink:"/javascript-parser-in-rust/ko/docs/parser"},next:{title:"Semantic Analysis",permalink:"/javascript-parser-in-rust/ko/docs/semantics_analysis"}},d={},l=[{value:"The <code>Error</code> Trait",id:"the-error-trait",level:3},{value:"Fancy Error Report",id:"fancy-error-report",level:3}];function a(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["\uc778\uc6a9: ",(0,t.jsx)(r.a,{href:"https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811",children:"Dragon Book"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\ub300\ubd80\ubd84\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4 \uc0ac\uc591\uc5d0\ub294 \ucef4\ud30c\uc77c\ub7ec\uac00 \uc624\ub958\uc5d0 \uc5b4\ub5bb\uac8c \ub300\uc751\ud574\uc57c \ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc124\uba85\uc774 \uc5c6\uc73c\uba70, \uc624\ub958 \ucc98\ub9ac\ub294 \ucef4\ud30c\uc77c\ub7ec \uc124\uacc4\uc790\uc5d0\uac8c \ub9e1\uaca8\uc838 \uc788\uc2b5\ub2c8\ub2e4.\n\ucc98\uc74c\ubd80\ud130 \uc624\ub958 \ucc98\ub9ac\ub97c \uacc4\ud68d\ud558\uba74 \ucef4\ud30c\uc77c\ub7ec\uc758 \uad6c\uc870\ub97c \ub2e8\uc21c\ud654\ud558\uace0 \uc624\ub958 \ucc98\ub9ac\ub97c \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\uc644\uc804\ud788 \ubcf5\uad6c \uac00\ub2a5\ud55c \ud30c\uc11c\ub294 \uc6b0\ub9ac\uac00 \uc5b4\ub5a4 \uac83\uc744 \ub358\uc838\ub3c4 AST\ub97c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nlinter\ub098 formatter\uc640 \uac19\uc740 \ub3c4\uad6c\uc758 \uacbd\uc6b0, \ud504\ub85c\uadf8\ub7a8 \uc77c\ubd80\uc5d0 \ub3d9\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \uc644\uc804\ud788 \ubcf5\uad6c \uac00\ub2a5\ud55c \ud30c\uc11c\ub97c \uc6d0\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(r.p,{children:"\ud328\ub2c9 \ud30c\uc11c\ub294 \ubb38\ubc95 \ubd88\uc77c\uce58\uac00 \uc788\uc73c\uba74 \uc911\ub2e8\ud558\uace0, \ubd80\ubd84\uc801\uc73c\ub85c \ubcf5\uad6c \uac00\ub2a5\ud55c \ud30c\uc11c\ub294 \uacb0\uc815\ub860\uc801 \ubb38\ubc95\uc5d0\uc11c \ubcf5\uad6c\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(r.p,{children:["\uc608\ub97c \ub4e4\uc5b4, \ubb38\ubc95\uc801\uc73c\ub85c \uc798\ubabb\ub41c \ub3d9\uc548 \ubb38 ",(0,t.jsx)(r.code,{children:"while true {}"}),"\uac00 \uc8fc\uc5b4\uc9c0\uba74 \ub300\uad04\ud638\uac00 \ub204\ub77d\ub418\uc5c8\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4,\n\uadf8\ub9ac\uace0 \ud3ec\ud568\ub420 \uc218 \uc788\ub294 \uc720\uc77c\ud55c \uad6c\ub450\uc810\uc740 \ub300\uad04\ud638\ubfd0\uc774\ubbc0\ub85c \uc5ec\uc804\ud788 \uc720\ud6a8\ud55c AST\ub97c \ubc18\ud658\ud558\uace0 \ub204\ub77d\ub41c \ub300\uad04\ud638\ub97c \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(r.p,{children:"\ub300\ubd80\ubd84\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc11c\ub294 \ubd80\ubd84\uc801\uc73c\ub85c \ubcf5\uad6c\uac00 \uac00\ub2a5\ud558\ubbc0\ub85c, \uc800\ud76c\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ubd80\ubd84\uc801\uc73c\ub85c \ubcf5\uad6c \uac00\ub2a5\ud55c \ud30c\uc11c\ub97c \ub9cc\ub4e4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/rome/tools",children:"Rome"})," \uc740 \uc644\uc804 \ubcf5\uad6c \uac00\ub2a5\ud55c \ud30c\uc11c\uc785\ub2c8\ub2e4."]})}),"\n",(0,t.jsxs)(r.p,{children:["Rust\uc5d0\ub294 \uc624\ub958\ub97c \ubc18\ud658\ud558\uace0 \uc804\ud30c\ud558\uae30 \uc704\ud55c ",(0,t.jsx)(r.code,{children:"Result"})," \ud0c0\uc785\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\uad6c\ubb38 ",(0,t.jsx)(r.code,{children:"?"}),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uba74 \uad6c\ubb38 \ubd84\uc11d \ud568\uc218\uac00 \uac04\ub2e8\ud558\uace0 \uae54\ub054\ud558\uac8c \uc720\uc9c0\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(r.p,{children:"\ub098\uc911\uc5d0 \uc624\ub958\ub97c \ub300\uccb4\ud560 \uc218 \uc788\ub3c4\ub85d \uacb0\uacfc \ud0c0\uc785\uc744 \ub798\ud551\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"pub type Result<T> = std::result::Result<T, ()>;\n"})}),"\n",(0,t.jsx)(r.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \ud30c\uc2f1 \ud568\uc218\ub294 Result\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"pub fn parse_binding_pattern(&mut self, ctx: Context) -> Result<BindingPattern<'a>> {\n    match self.cur_kind() {\n        Kind::LCurly => self.parse_object_binding_pattern(ctx),\n        Kind::LBrack => self.parse_array_binding_pattern(ctx),\n        kind if kind.is_binding_identifier() => {\n          // ... code omitted\n        }\n        // highlight-next-line\n        _ => Err(()),\n    }\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\ud604\uc7ac \ud1a0\ud070\uc774 \ubb38\ubc95\uacfc \uc77c\uce58\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc624\ub958\ub97c \ubc18\ud658\ud558\ub294 ",(0,t.jsx)(r.code,{children:"expect"})," \ud568\uc218\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"/// Expect a `Kind` or return error\npub fn expect(&mut self, kind: Kind) -> Result<()> {\n    if !self.at(kind) {\n        return Err(())\n    }\n    self.advance();\n    Ok(())\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"\uc774\ub300\ub85c \uc0ac\uc6a9\ud574\ubcf4\uc138\uc694:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"pub fn parse_paren_expression(&mut self, ctx: Context) -> Result<Expression> {\n    self.expect(Kind::LParen)?;\n    let expression = self.parse_expression(ctx)?;\n    self.expect(Kind::RParen)?;\n    Ok(expression)\n}\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["lexing \uc548\uc5d0 \uc608\uc0c1\uce58 \ubabb\ud55c ",(0,t.jsx)(r.code,{children:"char"}),"\uac00 \ubc1c\uacac\ub418\ub294 \uacbd\uc6b0.\n\uc644\uc804\uc131\uc744 \uc704\ud574, lexer \ud568\uc218 ",(0,t.jsx)(r.code,{children:"read_next_token"}),"\uc740 \uc608\uc0c1\uce58 \ubabb\ud55c ",(0,t.jsx)(r.code,{children:"\ubb38\uc790"}),"\uac00 \ubc1c\uacac\ub420 \ub54c ",(0,t.jsx)(r.code,{children:"Result"}),"\ub3c4 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."]})}),"\n",(0,t.jsxs)(r.h3,{id:"the-error-trait",children:["The ",(0,t.jsx)(r.code,{children:"Error"})," Trait"]}),"\n",(0,t.jsxs)(r.p,{children:["\ud2b9\uc815 \uc624\ub958\ub97c \ubc18\ud658\ud558\ub824\uba74 ",(0,t.jsx)(r.code,{children:"Result"}),"\uc758 ",(0,t.jsx)(r.code,{children:"Err"})," \ubd80\ubd84\uc744 \ucc44\uc6cc\uc57c \ud569\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"pub type Result<T> = std::result::Result<T, SyntaxError>;\n                                            ^^^^^^^^^^^\n#[derive(Debug)]\npub enum SyntaxError {\n    UnexpectedToken(String),\n    AutoSemicolonInsertion(String),\n    UnterminatedMultiLineComment(String),\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:['ECMAScript \uc0ac\uc591\uc758 \ubb38\ubc95 \uc139\uc158\uc5d0 \uc815\uc758\ub41c \ubaa8\ub4e0 "early error"\ub294 \uad6c\ubb38 \uc624\ub958\uc774\ubbc0\ub85c \uc774\ub97c ',(0,t.jsx)(r.code,{children:"SyntaxError"}),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.p,{children:["\uc774\ub97c \uc81c\ub300\ub85c \ub41c ",(0,t.jsx)(r.code,{children:"Error"}),"\ub85c \ub9cc\ub4e4\ub824\uba74 ",(0,t.jsxs)(r.a,{href:"https://doc.rust-lang.org/std/error/trait.Error.html",children:[(0,t.jsx)(r.code,{children:"Error"})," Trait"]}),"\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4. \ub354 \uae54\ub054\ud55c \ucf54\ub4dc\ub97c \uc704\ud574 ",(0,t.jsx)(r.a,{href:"https://docs.rs/thiserror/latest/thiserror",children:(0,t.jsx)(r.code,{children:"thiserror"})})," crate\uc5d0\uc11c \ub9e4\ud06c\ub85c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'#[derive(Debug, Error)]\npub enum SyntaxError {\n    #[error("Unexpected Token")]\n    UnexpectedToken,\n\n    #[error("Expected a semicolon or an implicit semicolon after a statement, but found none")]\n    AutoSemicolonInsertion,\n\n    #[error("Unterminated multi-line comment")]\n    UnterminatedMultiLineComment,\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\uadf8\ub7f0 \ub2e4\uc74c \ud1a0\ud070\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc624\ub958\ub97c \ub358\uc9c0\ub294 ",(0,t.jsx)(r.code,{children:"expect"})," \ud5ec\ud37c \ud568\uc218\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"/// Expect a `Kind` or return error\npub fn expect(&mut self, kind: Kind) -> Result<()> {\n    if self.at(kind) {\n        return Err(SyntaxError::UnExpectedToken);\n    }\n    self.advance(kind);\n    Ok(())\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"parse_debugger_statement"}),"\uac00 ",(0,t.jsx)(r.code,{children:"expect"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c\ub418\uc5b4 \uc801\uc808\ud55c \uc624\ub958\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"fn parse_debugger_statement(&mut self) -> Result<Statement> {\n    let node = self.start_node();\n    self.expect(Kind::Debugger)?;\n    Ok(Statement::DebuggerStatement {\n        node: self.finish_node(node),\n    })\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"expect"})," \ub4a4\uc5d0 \uc788\ub294 ",(0,t.jsx)(r.code,{children:"?"}),"\ub97c \ubcf4\uc138\uc694,\n\uc774\uac83\uc740 syntactic sugar ",(0,t.jsx)(r.a,{href:"https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#a-shortcut-for-propagating-errors-the--operator",children:'"question mark operator"'}),"\uc73c\ub85c ",(0,t.jsx)(r.code,{children:"expect"})," \ud568\uc218\uac00 ",(0,t.jsx)(r.code,{children:"Err"}),"\ub97c \ubc18\ud658\ud558\ub294 \uacbd\uc6b0\uc5d0 \ud568\uc218\ub97c \uc870\uae30\uc5d0 \ubc18\ud658\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(r.h3,{id:"fancy-error-report",children:"Fancy Error Report"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://docs.rs/miette/latest/miette",children:(0,t.jsx)(r.code,{children:"miette"})}),"\ub294 \uac00\uc7a5 \uba4b\uc9c4 \uc624\ub958 \ubcf4\uace0 crete \uc911 \ud558\ub098\uc785\ub2c8\ub2e4,\n\uba4b\uc9c4 \uc0c9\uc0c1\uc758 \ucd9c\ub825\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/zkat/miette/main/images/serde_json.png",alt:"miette"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"miette"}),"\ub97c \uc6b0\ub9ac ",(0,t.jsx)(r.code,{children:"Cargo.toml"}),"\uc5d0 \ucd94\uac00\ud574\ubcf4\uc8e0"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-toml",children:'[dependencies]\nmiette = { version = "5", features = ["fancy"] }\n'})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Error"}),"\ub97c ",(0,t.jsx)(r.code,{children:"miette"}),"\ub85c \uac10\uc308\uc73c\ub85c \ud30c\uc11c\uc5d0 \uc815\uc758\ub41c ",(0,t.jsx)(r.code,{children:"Result"})," \ud0c0\uc785\uc744 \uc218\uc815\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:'pub fn main() -> Result<()> {\n    let source_code = "".to_string();\n    let file_path = "test.js".to_string();\n    let mut parser = Parser::new(&source_code);\n    parser.parse().map_err(|error| {\n        miette::Error::new(error).with_source_code(miette::NamedSource::new(file_path, source_code))\n    })\n}\n'})})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},7660:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>c});var t=n(959);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);