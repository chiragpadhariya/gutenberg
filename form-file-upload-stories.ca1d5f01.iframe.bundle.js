"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[2883],{"./packages/components/src/ui/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cT:()=>COMPONENT_NAMESPACE,_3:()=>CONNECTED_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iq:()=>contextConnect,H:()=>hasConnectNamespace});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function _contextConnect(Component,namespace,options){const WrappedComponent=null!=options&&options.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eb:()=>useComponentsContext,G8:()=>ContextSystemProvider});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=_ref2=>{let{children,value}=_ref2;const contextValue=function useContextSystemBridge(_ref){let{value}=_ref;const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_5__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/context/context-system-provider.js"]={name:"BaseContextSystemProvider",docgenInfo:BaseContextSystemProvider.__docgenInfo,path:"packages/components/src/ui/context/context-system-provider.js"})},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=(null==contextSystemProps?void 0:contextSystemProps[namespace])||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/icons/build-module/library/upload.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"}))},"./packages/components/src/form-file-upload/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllowMultipleFiles:()=>AllowMultipleFiles,Default:()=>Default,RestrictFileTypes:()=>RestrictFileTypes,WithCustomRender:()=>WithCustomRender,WithIcon:()=>WithIcon,default:()=>stories});var upload=__webpack_require__("./packages/icons/build-module/library/upload.js"),react=__webpack_require__("./node_modules/react/index.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormFileUpload(_ref){let{accept,children,multiple=!1,onChange,onClick,render,...props}=_ref;const ref=(0,react.useRef)(null),openFileDialog=()=>{var _ref$current;null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.click()},ui=render?render({openFileDialog}):(0,jsx_runtime.jsx)(src_button.ZP,{onClick:openFileDialog,...props,children});return(0,jsx_runtime.jsxs)("div",{className:"components-form-file-upload",children:[ui,(0,jsx_runtime.jsx)("input",{type:"file",ref,multiple,style:{display:"none"},accept,onChange,onClick,"data-testid":"form-file-upload-input"})]})}FormFileUpload.displayName="FormFileUpload";const form_file_upload=FormFileUpload;try{FormFileUpload.displayName="FormFileUpload",FormFileUpload.__docgenInfo={description:"FormFileUpload is a component that allows users to select files from their local device.\n\n```jsx\nimport { FormFileUpload } from '@wordpress/components';\n\nconst MyFormFileUpload = () => (\n  <FormFileUpload\n    accept=\"image/*\"\n    onChange={ ( event ) => console.log( event.currentTarget.files ) }\n  >\n    Upload\n  </FormFileUpload>\n);\n```",displayName:"FormFileUpload",props:{accept:{defaultValue:null,description:"A string passed to `input` element that tells the browser which file types can be\nupload to the upload by the user use. e.g: `image/*,video/*`.\n@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers.",name:"accept",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children are passed as children of `Button`.",name:"children",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"The icon to render in the `Button`.",name:"icon",required:!1,type:{name:"IconType"}},multiple:{defaultValue:{value:"false"},description:"Whether to allow multiple selection of files or not.",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback function passed directly to the `input` file element.\n\nSelect files will be available in `event.currentTarget.files`.",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:"Callback function passed directly to the `input` file element.\n\nThis can be useful when you want to force a `change` event to fire when\nthe user chooses the same file again. To do this, set the target value to\nan empty string in the `onClick` function.\n\n```jsx\n<FormFileUpload\n\tonClick={ ( event ) => ( event.target.value = '' ) }\n\tonChange={ onChange }\n>\n\tUpload\n</FormFileUpload>\n```",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},render:{defaultValue:null,description:"Optional callback function used to render the UI.\n\nIf passed, the component does not render the default UI (a button) and\ncalls this function to render it. The function receives an object with\nproperty `openFileDialog`, a function that, when called, opens the browser\nnative file upload modal window.",name:"render",required:!1,type:{name:"(arg: { openFileDialog: () => void; }) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/form-file-upload/index.tsx#FormFileUpload"]={docgenInfo:FormFileUpload.__docgenInfo,name:"FormFileUpload",path:"packages/components/src/form-file-upload/index.tsx#FormFileUpload"})}catch(__react_docgen_typescript_loader_error){}const stories={title:"Components/FormFileUpload",component:form_file_upload,argTypes:{icon:{control:{type:null}},onChange:{action:"onChange",control:{type:null}},onClick:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/form-file-upload",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=props=>(0,jsx_runtime.jsx)(form_file_upload,{...props});Template.displayName="Template";const Default=Template.bind({});Default.args={children:"Select file"};const RestrictFileTypes=Template.bind({});RestrictFileTypes.args={...Default.args,accept:"image/*",children:"Select image"};const AllowMultipleFiles=Template.bind({});AllowMultipleFiles.args={...Default.args,children:"Select files",multiple:!0};const WithIcon=Template.bind({});WithIcon.args={...Default.args,children:"Upload",icon:upload.Z};const WithCustomRender=Template.bind({});WithCustomRender.args={...Default.args,render:_ref=>{let{openFileDialog}=_ref;return(0,jsx_runtime.jsx)("button",{onClick:openFileDialog,children:"Custom Upload Button"})}},WithCustomRender.parameters??={},WithCustomRender.parameters.docs??={},WithCustomRender.parameters.docs.description??={},WithCustomRender.parameters.docs.description.story??="Render a custom trigger button by passing a render function to the `render` prop.\n\n```jsx\n( { openFileDialog } ) => <button onClick={ openFileDialog }>Custom Upload Button</button>\n```";try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/form-file-upload/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/form-file-upload/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{WithCustomRender.displayName="WithCustomRender",WithCustomRender.__docgenInfo={description:"Render a custom trigger button by passing a render function to the `render` prop.\n\n```jsx\n( { openFileDialog } ) => <button onClick={ openFileDialog }>Custom Upload Button</button>\n```",displayName:"WithCustomRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/form-file-upload/stories/index.tsx#WithCustomRender"]={docgenInfo:WithCustomRender.__docgenInfo,name:"WithCustomRender",path:"packages/components/src/form-file-upload/stories/index.tsx#WithCustomRender"})}catch(__react_docgen_typescript_loader_error){}}}]);