"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[1516],{"./packages/components/src/date-time/stories/time.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_time__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/date-time/time/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TimePicker",component:_time__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{currentTime:{control:"date"},onChange:{action:"onChange",control:{type:null}}},parameters:{sourceLink:"packages/components/src/date-time",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=_ref=>{let{currentTime,onChange,...args}=_ref;const[time,setTime]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(currentTime);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setTime(currentTime)}),[currentTime]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_time__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,currentTime:time,onChange:newTime=>{setTime(newTime),null==onChange||onChange(newTime)}})};Template.displayName="Template";const Default=Template.bind({});try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/stories/time.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/date-time/stories/time.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);