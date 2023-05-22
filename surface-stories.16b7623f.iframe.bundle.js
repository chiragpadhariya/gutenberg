(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[7227],{"./packages/components/src/text/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/text/hook.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(props,forwardedRef){const textProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.Z)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{as:"span",...textProps,ref:forwardedRef})}Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(Text,"Text");Text.__docgenInfo={description:"@param {import('../ui/context').WordPressComponentProps<import('./types').Props, 'span'>} props\n@param {import('react').ForwardedRef<any>}                                                forwardedRef",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/text/component.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"packages/components/src/text/component.js"})},"./packages/components/src/ui/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>space});function space(value){var _window$CSS,_window$CSS$supports;if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&null!==(_window$CSS=window.CSS)&&void 0!==_window$CSS&&null!==(_window$CSS$supports=_window$CSS.supports)&&void 0!==_window$CSS$supports&&_window$CSS$supports.call(_window$CSS,"margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(4px * ${value})`}},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./packages/components/src/surface/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),hook=__webpack_require__("./packages/components/src/surface/hook.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedSurface(props,forwardedRef){const surfaceProps=(0,hook.v)(props);return(0,jsx_runtime.jsx)(component.Z,{...surfaceProps,ref:forwardedRef})}UnconnectedSurface.displayName="UnconnectedSurface";const Surface=(0,context_connect.Iq)(UnconnectedSurface,"Surface"),surface_component=Surface;try{Surface.displayName="Surface",Surface.__docgenInfo={description:"`Surface` is a core component that renders a primary background color.\n\nIn the example below, notice how the `Surface` renders in white (or dark gray if in dark mode).\n\n```jsx\nimport {\n__experimentalSurface as Surface,\n__experimentalText as Text,\n} from '@wordpress/components';\n\nfunction Example() {\n\treturn (\n\t\t<Surface>\n\t\t\t<Text>Code is Poetry</Text>\n\t\t</Surface>\n\t);\n}\n```",displayName:"Surface",props:{backgroundSize:{defaultValue:{value:"12"},description:'Determines the grid size for "dotted" and "grid" variants.',name:"backgroundSize",required:!1,type:{name:"number"}},borderBottom:{defaultValue:{value:"false"},description:"Renders a bottom border.",name:"borderBottom",required:!1,type:{name:"boolean"}},borderLeft:{defaultValue:{value:"false"},description:"Renders a left border.",name:"borderLeft",required:!1,type:{name:"boolean"}},borderRight:{defaultValue:{value:"false"},description:"Renders a right border.",name:"borderRight",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"Renders a top border.",name:"borderTop",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'primary'"},description:"Modifies the background color of `Surface`.\n\n* `primary`: Used for almost all cases.\n* `secondary`: Used as a secondary background for inner `Surface` components.\n* `tertiary`: Used as the app/site wide background. Visible in **dark mode** only. Use case is rare.\n* `grid`: Used to show a grid.\n* `dotted`: Used to show a dots grid.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"dotted"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 507 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/surface/component.tsx#Surface"]={docgenInfo:Surface.__docgenInfo,name:"Surface",path:"packages/components/src/surface/component.tsx#Surface"})}catch(__react_docgen_typescript_loader_error){}var text_component=__webpack_require__("./packages/components/src/text/component.js");const stories={component:surface_component,title:"Components (Experimental)/Surface",argTypes:{children:{control:{type:null}},as:{control:{type:"text"}}},parameters:{sourceLink:"packages/components/src/surface",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=args=>(0,jsx_runtime.jsx)(surface_component,{...args,style:{padding:20,maxWidth:400,margin:"20vh auto"},children:(0,jsx_runtime.jsx)(text_component.Z,{children:"Code is Poetry"})});Template.displayName="Template";const Default=Template.bind({});Default.args={};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/surface/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/surface/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);