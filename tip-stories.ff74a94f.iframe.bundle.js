"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[6933],{"./packages/icons/build-module/icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function Icon(_ref){let{icon,size=24,...props}=_ref;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon,{width:size,height:size,...props})}},"./packages/icons/build-module/library/tip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M12 15.8c-3.7 0-6.8-3-6.8-6.8s3-6.8 6.8-6.8c3.7 0 6.8 3 6.8 6.8s-3.1 6.8-6.8 6.8zm0-12C9.1 3.8 6.8 6.1 6.8 9s2.4 5.2 5.2 5.2c2.9 0 5.2-2.4 5.2-5.2S14.9 3.8 12 3.8zM8 17.5h8V19H8zM10 20.5h4V22h-4z"}))},"./packages/primitives/build-module/svg/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,G:()=>G,y$:()=>Path,UL:()=>Rect,Wj:()=>SVG});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",props),SVG=_ref=>{let{className,isPressed,...props}=_ref;const appliedProps={...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",appliedProps)}},"./packages/components/src/tip/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),tip=__webpack_require__("./packages/icons/build-module/library/tip.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Tip(props){const{children}=props;return(0,jsx_runtime.jsxs)("div",{className:"components-tip",children:[(0,jsx_runtime.jsx)(icon.Z,{icon:tip.Z}),(0,jsx_runtime.jsx)("p",{children})]})}Tip.displayName="Tip";const src_tip=Tip;try{Tip.displayName="Tip",Tip.__docgenInfo={description:"",displayName:"Tip",props:{children:{defaultValue:null,description:"Children to render in the tip.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/tip/index.tsx#Tip"]={docgenInfo:Tip.__docgenInfo,name:"Tip",path:"packages/components/src/tip/index.tsx#Tip"})}catch(__react_docgen_typescript_loader_error){}const stories={component:src_tip,title:"Components/Tip",argTypes:{children:{control:{type:"text"}}},parameters:{sourceLink:"packages/components/src/tip",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=args=>(0,jsx_runtime.jsx)(src_tip,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={children:"An example tip"};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/tip/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/tip/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);