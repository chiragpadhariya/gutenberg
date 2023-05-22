"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[7348],{"./packages/components/src/ui/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cT:()=>COMPONENT_NAMESPACE,_3:()=>CONNECTED_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iq:()=>contextConnect,H:()=>hasConnectNamespace});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function _contextConnect(Component,namespace,options){const WrappedComponent=null!=options&&options.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eb:()=>useComponentsContext,G8:()=>ContextSystemProvider});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=_ref2=>{let{children,value}=_ref2;const contextValue=function useContextSystemBridge(_ref){let{value}=_ref;const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_5__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/context/context-system-provider.js"]={name:"BaseContextSystemProvider",docgenInfo:BaseContextSystemProvider.__docgenInfo,path:"packages/components/src/ui/context/context-system-provider.js"})},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=(null==contextSystemProps?void 0:contextSystemProps[namespace])||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/tooltip/stories/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,SmallTarget:()=>SmallTarget,DisabledChild:()=>DisabledChild});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/tooltip/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ToolTip",component:___WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{delay:{control:"number"},position:{control:{type:"select",options:["top left","top center","top right","bottom left","bottom center","bottom right"]}},text:{control:"text"}},parameters:{sourceLink:"packages/components/src/tooltip",storySource:{source:"/**\n * Internal dependencies\n */\nimport Tooltip from '../';\n\nexport default {\n\ttitle: 'Components/ToolTip',\n\tcomponent: Tooltip,\n\targTypes: {\n\t\tdelay: { control: 'number' },\n\t\tposition: {\n\t\t\tcontrol: {\n\t\t\t\ttype: 'select',\n\t\t\t\toptions: [\n\t\t\t\t\t'top left',\n\t\t\t\t\t'top center',\n\t\t\t\t\t'top right',\n\t\t\t\t\t'bottom left',\n\t\t\t\t\t'bottom center',\n\t\t\t\t\t'bottom right',\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t\ttext: { control: 'text' },\n\t},\n\tparameters: {\n\t\tdocs: { source: { state: 'open' } },\n\t},\n};\n\nconst Template = ( args ) => {\n\treturn <Tooltip { ...args } />;\n};\n\nexport const Default = Template.bind( {} );\nDefault.args = {\n\ttext: 'More information',\n\tchildren: (\n\t\t<div\n\t\t\tstyle={ {\n\t\t\t\tmargin: '50px auto',\n\t\t\t\twidth: '200px',\n\t\t\t\tpadding: '20px',\n\t\t\t\ttextAlign: 'center',\n\t\t\t\tborder: '1px solid #ccc',\n\t\t\t} }\n\t\t>\n\t\t\tHover for more information\n\t\t</div>\n\t),\n};\n\nexport const SmallTarget = Template.bind( {} );\nSmallTarget.args = {\n\t...Default.args,\n\tchildren: (\n\t\t<div\n\t\t\tstyle={ {\n\t\t\t\tmargin: '50px auto',\n\t\t\t\twidth: 'min-content',\n\t\t\t\tpadding: '4px',\n\t\t\t\ttextAlign: 'center',\n\t\t\t\tborder: '1px solid #ccc',\n\t\t\t} }\n\t\t>\n\t\t\tSmall target\n\t\t</div>\n\t),\n};\n\nexport const DisabledChild = Template.bind( {} );\nDisabledChild.args = {\n\t...Default.args,\n\tchildren: (\n\t\t<button\n\t\t\tdisabled\n\t\t\tonClick={ () =>\n\t\t\t\t\n\t\t\t\twindow.alert( 'This alert should not be triggered' )\n\t\t\t}\n\t\t>\n\t\t\tHover me, but I am disabled\n\t\t</button>\n\t),\n};\n",locationsMap:{default:{startLoc:{col:17,line:31},endLoc:{col:1,line:33},startBody:{col:17,line:31},endBody:{col:1,line:33}},"small-target":{startLoc:{col:17,line:31},endLoc:{col:1,line:33},startBody:{col:17,line:31},endBody:{col:1,line:33}},"disabled-child":{startLoc:{col:17,line:31},endLoc:{col:1,line:33},startBody:{col:17,line:31},endBody:{col:1,line:33}}}},docs:{source:{state:"open"}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={text:"More information",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{margin:"50px auto",width:"200px",padding:"20px",textAlign:"center",border:"1px solid #ccc"},children:"Hover for more information"})};const SmallTarget=Template.bind({});SmallTarget.args={...Default.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{margin:"50px auto",width:"min-content",padding:"4px",textAlign:"center",border:"1px solid #ccc"},children:"Small target"})};const DisabledChild=Template.bind({});DisabledChild.args={...Default.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{disabled:!0,onClick:()=>window.alert("This alert should not be triggered"),children:"Hover me, but I am disabled"})}}}]);