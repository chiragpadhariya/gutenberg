"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[4795],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./storybook/stories/docs/components/readme.story.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>readme_story});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("h1",{id:"component-reference"},"Component Reference"),(0,esm.kt)("p",null,"This package includes a library of generic WordPress components to be used for creating common UI elements shared between screens and features of the WordPress dashboard."),(0,esm.kt)("h2",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wordpress/components --save\n")),(0,esm.kt)("p",null,(0,esm.kt)("em",{parentName:"p"},"This package assumes that your code will run in an ",(0,esm.kt)("strong",{parentName:"em"},"ES2015+")," environment. If you're using an environment that has limited or no support for such language features and APIs, you should include ",(0,esm.kt)("a",{parentName:"em",href:"https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill",target:"_blank",rel:"nofollow noopener noreferrer"},"the polyfill shipped in ",(0,esm.kt)("inlineCode",{parentName:"a"},"@wordpress/babel-preset-default"))," in your code.")),(0,esm.kt)("h2",{id:"usage"},"Usage"),(0,esm.kt)("p",null,"Within Gutenberg, these components can be accessed by importing from the ",(0,esm.kt)("inlineCode",{parentName:"p"},"components")," root directory:"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * WordPress dependencies\n */\nimport { Button } from '@wordpress/components';\n\nexport default function MyButton() {\n    return <Button>Click Me!</Button>;\n}\n")),(0,esm.kt)("p",null,"Many components include CSS to add styles, which you will need to load in order for them to appear correctly. Within WordPress, add the ",(0,esm.kt)("inlineCode",{parentName:"p"},"wp-components")," stylesheet as a dependency of your plugin's stylesheet. See ",(0,esm.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/wp_enqueue_style/#parameters",target:"_blank",rel:"nofollow noopener noreferrer"},"wp_enqueue_style documentation")," for how to specify dependencies."),(0,esm.kt)("p",null,"In non-WordPress projects, link to the ",(0,esm.kt)("inlineCode",{parentName:"p"},"build-style/style.css")," file directly, it is located at ",(0,esm.kt)("inlineCode",{parentName:"p"},"node_modules/@wordpress/components/build-style/style.css"),"."),(0,esm.kt)("h3",{id:"popovers-and-tooltips"},"Popovers and Tooltips"),(0,esm.kt)("p",null,(0,esm.kt)("em",{parentName:"p"},"If you're using ",(0,esm.kt)("a",{parentName:"em",href:"/packages/components/src/popover/README.md"},(0,esm.kt)("inlineCode",{parentName:"a"},"Popover"))," or ",(0,esm.kt)("a",{parentName:"em",href:"/packages/components/src/tooltip/README.md"},(0,esm.kt)("inlineCode",{parentName:"a"},"Tooltip"))," components outside of the editor, make sure they are rendered within a ",(0,esm.kt)("inlineCode",{parentName:"em"},"SlotFillProvider")," and with a ",(0,esm.kt)("inlineCode",{parentName:"em"},"Popover.Slot")," somewhere up the element tree.")),(0,esm.kt)("p",null,"By default, the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Popover")," component will render inline i.e. within its\nparent to which it should anchor. Depending upon the context in which the\n",(0,esm.kt)("inlineCode",{parentName:"p"},"Popover")," is being consumed, this might lead to incorrect positioning. For\nexample, when being nested within another popover."),(0,esm.kt)("p",null,"This issue can be solved by rendering popovers to a specific location in the DOM via the\n",(0,esm.kt)("inlineCode",{parentName:"p"},"Popover.Slot"),". For this to work, you will need your use of the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Popover"),"\ncomponent and its ",(0,esm.kt)("inlineCode",{parentName:"p"},"Slot")," to be wrapped in a ",(0,esm.kt)("a",{parentName:"p",href:"/packages/components/src/slot-fill/README.md"},(0,esm.kt)("inlineCode",{parentName:"a"},"SlotFill"))," provider."),(0,esm.kt)("p",null,"A ",(0,esm.kt)("inlineCode",{parentName:"p"},"Popover")," is also used as the underlying mechanism to display ",(0,esm.kt)("inlineCode",{parentName:"p"},"Tooltip")," components.\nSo the same considerations should be applied to them."),(0,esm.kt)("p",null,"The following example illustrates how you can wrap a component using a\n",(0,esm.kt)("inlineCode",{parentName:"p"},"Popover")," and have those popovers render to a single location in the DOM."),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * External dependencies\n */\nimport { Popover, SlotFillProvider } from '@wordpress/components';\n\n/**\n * Internal dependencies\n */\nimport { MyComponentWithPopover } from './my-component';\n\nconst Example = () => {\n    <SlotFillProvider>\n        <MyComponentWithPopover />\n        <Popover.Slot>\n    </SlotFillProvider>\n};\n")),(0,esm.kt)("h2",{id:"docs--examples"},"Docs & examples"),(0,esm.kt)("p",null,"You can browse the components docs and examples at ",(0,esm.kt)("a",{parentName:"p",href:"https://wordpress.github.io/gutenberg/",target:"_blank",rel:"nofollow noopener noreferrer"},"https://wordpress.github.io/gutenberg/")),(0,esm.kt)("h2",{id:"contributing-to-this-package"},"Contributing to this package"),(0,esm.kt)("p",null,"This is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to ",(0,esm.kt)("a",{parentName:"p",href:"https://www.npmjs.com/",target:"_blank",rel:"nofollow noopener noreferrer"},"npm")," and used by ",(0,esm.kt)("a",{parentName:"p",href:"https://make.wordpress.org/core/",target:"_blank",rel:"nofollow noopener noreferrer"},"WordPress")," as well as other software projects."),(0,esm.kt)("p",null,"To find out more about contributing to this package or Gutenberg as a whole, please read the project's main ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md",target:"_blank",rel:"nofollow noopener noreferrer"},"contributor guide"),"."),(0,esm.kt)("p",null,"This package also has its own ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/WordPress/gutenberg/tree/HEAD/packages/components/CONTRIBUTING.md",target:"_blank",rel:"nofollow noopener noreferrer"},"contributing information")," where you can find additional details."),(0,esm.kt)("br",null),(0,esm.kt)("br",null),(0,esm.kt)("p",{align:"center"},(0,esm.kt)("img",{src:"https://s.w.org/style/images/codeispoetry.png?1",alt:"Code is Poetry."})))}function readme_story_extends(){return readme_story_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},readme_story_extends.apply(this,arguments)}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const readme_story_layoutProps={};function readme_story_MDXContent({components,...props}){return(0,esm.kt)("wrapper",readme_story_extends({},readme_story_layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Introduction",mdxType:"Meta"}),(0,esm.kt)(MDXContent,{mdxType:"Readme"}))}readme_story_MDXContent.displayName="MDXContent",readme_story_MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(readme_story_MDXContent,null))};const readme_story=componentMeta,__namedExportsOrder=["__page"]}}]);