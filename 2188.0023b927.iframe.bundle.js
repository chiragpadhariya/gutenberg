"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[2188],{"./packages/components/src/flex/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>FlexContext,f:()=>useFlexContext});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const FlexContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({flexItemDisplay:void 0}),useFlexContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FlexContext)},"./packages/components/src/flex/flex-item/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/flex-item/hook.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedFlexItem(props,forwardedRef){const flexItemProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.i)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{...flexItemProps,ref:forwardedRef})}UnconnectedFlexItem.displayName="UnconnectedFlexItem";const FlexItem=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(UnconnectedFlexItem,"FlexItem"),__WEBPACK_DEFAULT_EXPORT__=FlexItem;try{FlexItem.displayName="FlexItem",FlexItem.__docgenInfo={description:"`FlexItem` is a primitive layout component that aligns content within layout\ncontainers like `Flex`.\n\n```jsx\nimport { Flex, FlexItem } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Flex>\n      <FlexItem>...</FlexItem>\n    </Flex>\n  );\n}\n```",displayName:"FlexItem",props:{display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},isBlock:{defaultValue:{value:"true"},description:"Determines if `FlexItem` should render as an adaptive full-width block.",name:"isBlock",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/flex/flex-item/component.tsx#FlexItem"]={docgenInfo:FlexItem.__docgenInfo,name:"FlexItem",path:"packages/components/src/flex/flex-item/component.tsx#FlexItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/flex/flex-item/hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useFlexItem});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_ui_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/context.ts"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/flex/styles.ts"),_utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useFlexItem(props){const{className,display:displayProp,isBlock=!1,...otherProps}=(0,_ui_context__WEBPACK_IMPORTED_MODULE_0__.y)(props,"FlexItem"),sx={},contextDisplay=(0,_context__WEBPACK_IMPORTED_MODULE_1__.f)().flexItemDisplay;sx.Base=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv)({display:displayProp||contextDisplay},"","");return{...otherProps,className:(0,_utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_3__.I)()(_styles__WEBPACK_IMPORTED_MODULE_4__.ck,sx.Base,isBlock&&_styles__WEBPACK_IMPORTED_MODULE_4__.Ge,className)}}},"./packages/components/src/flex/flex/hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>useFlex});var _emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/deprecated/build-module/index.js"),_ui_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),_ui_utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/utils/use-responsive-value.ts"),_ui_utils_space__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/ui/utils/space.ts"),_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/flex/styles.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useFlex(props){const{align,className,direction:directionProp="row",expanded=!0,gap=2,justify="space-between",wrap=!1,...otherProps}=(0,_ui_context__WEBPACK_IMPORTED_MODULE_1__.y)(function useDeprecatedProps(props){const{isReversed,...otherProps}=props;return void 0!==isReversed?((0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__.Z)("Flex isReversed",{alternative:'Flex direction="row-reverse" or "column-reverse"',since:"5.9"}),{...otherProps,direction:isReversed?"row-reverse":"row"}):otherProps}(props),"Flex"),directionAsArray=Array.isArray(directionProp)?directionProp:[directionProp],direction=(0,_ui_utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__.V)(directionAsArray),isColumn="string"==typeof direction&&!!direction.includes("column"),cx=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.I)();return{...otherProps,className:(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)((()=>{const base=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.iv)({alignItems:null!=align?align:isColumn?"normal":"center",flexDirection:direction,flexWrap:wrap?"wrap":void 0,gap:(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_6__.D)(gap),justifyContent:justify,height:isColumn&&expanded?"100%":void 0,width:!isColumn&&expanded?"100%":void 0},"","");return cx(_styles__WEBPACK_IMPORTED_MODULE_7__.kC,base,isColumn?_styles__WEBPACK_IMPORTED_MODULE_7__.bg:_styles__WEBPACK_IMPORTED_MODULE_7__.h,className)}),[align,className,cx,direction,expanded,gap,isColumn,justify,wrap]),isColumn}}},"./packages/components/src/flex/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kC:()=>Flex,ck:()=>Item,Ge:()=>block,bg:()=>ItemsColumn,h:()=>ItemsRow});const Flex={name:"zjik7",styles:"display:flex"},Item={name:"qgaee5",styles:"display:block;max-height:100%;max-width:100%;min-height:0;min-width:0"},block={name:"82a6rk",styles:"flex:1"},ItemsColumn={name:"13nosa1",styles:">*{min-height:0;}"},ItemsRow={name:"1pwxzk4",styles:">*{min-width:0;}"}},"./packages/components/src/ui/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});function space(value){var _window$CSS,_window$CSS$supports;if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&null!==(_window$CSS=window.CSS)&&void 0!==_window$CSS&&null!==(_window$CSS$supports=_window$CSS.supports)&&void 0!==_window$CSS$supports&&_window$CSS$supports.call(_window$CSS,"margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(4px * ${value})`}},"./packages/components/src/ui/utils/use-responsive-value.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>useResponsiveValue});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const breakpoints=["40em","52em","64em"],useBreakpointIndex=function(){let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{defaultIndex=0}=options;if("number"!=typeof defaultIndex)throw new TypeError(`Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`);if(defaultIndex<0||defaultIndex>breakpoints.length-1)throw new RangeError(`Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`);const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIndex);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const onResize=()=>{const newValue=breakpoints.filter((bp=>"undefined"!=typeof window&&window.matchMedia(`screen and (min-width: ${bp})`).matches)).length;value!==newValue&&setValue(newValue)};return onResize(),"undefined"!=typeof window&&window.addEventListener("resize",onResize),()=>{"undefined"!=typeof window&&window.removeEventListener("resize",onResize)}}),[value]),value};function useResponsiveValue(values){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const index=useBreakpointIndex(options);if(!Array.isArray(values)&&"function"!=typeof values)return values;const array=values||[];return array[index>=array.length?array.length-1:index]}}}]);