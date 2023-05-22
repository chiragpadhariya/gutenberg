"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8562],{"./packages/compose/build-module/hooks/use-keyboard-shortcut/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var mousetrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/mousetrap/mousetrap.js"),mousetrap__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js"),__webpack_require__("./node_modules/react/index.js")),_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/keycodes/build-module/platform.js");const __WEBPACK_DEFAULT_EXPORT__=function useKeyboardShortcut(shortcuts,callback){let{bindGlobal=!1,eventName="keydown",isDisabled=!1,target}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const currentCallback=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(callback);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{currentCallback.current=callback}),[callback]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{if(isDisabled)return;const mousetrap=new(mousetrap__WEBPACK_IMPORTED_MODULE_0___default())(target&&target.current?target.current:document);return(Array.isArray(shortcuts)?shortcuts:[shortcuts]).forEach((shortcut=>{const keys=shortcut.split("+"),modifiers=new Set(keys.filter((value=>value.length>1))),hasAlt=modifiers.has("alt"),hasShift=modifiers.has("shift");if((0,_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.R)()&&(1===modifiers.size&&hasAlt||2===modifiers.size&&hasAlt&&hasShift))throw new Error(`Cannot bind ${shortcut}. Alt and Shift+Alt modifiers are reserved for character input.`);mousetrap[bindGlobal?"bindGlobal":"bind"](shortcut,(function(){return currentCallback.current(...arguments)}),eventName)})),()=>{mousetrap.reset()}}),[shortcuts,bindGlobal,eventName,target,isDisabled])}},"./packages/keycodes/build-module/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isAppleOS(){let _window=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!_window){if("undefined"==typeof window)return!1;_window=window}const{platform}=_window.navigator;return-1!==platform.indexOf("Mac")||["iPad","iPhone"].includes(platform)}__webpack_require__.d(__webpack_exports__,{R:()=>isAppleOS})},"./packages/components/src/keyboard-shortcuts/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),use_keyboard_shortcut=__webpack_require__("./packages/compose/build-module/hooks/use-keyboard-shortcut/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function KeyboardShortcut(_ref){let{target,callback,shortcut,bindGlobal,eventName}=_ref;return(0,use_keyboard_shortcut.Z)(shortcut,callback,{bindGlobal,target,eventName}),null}function KeyboardShortcuts(_ref2){let{children,shortcuts,bindGlobal,eventName}=_ref2;const target=(0,react.useRef)(null),element=Object.entries(null!=shortcuts?shortcuts:{}).map((_ref3=>{let[shortcut,callback]=_ref3;return(0,jsx_runtime.jsx)(KeyboardShortcut,{shortcut,callback,bindGlobal,eventName,target},shortcut)}));return react.Children.count(children)?(0,jsx_runtime.jsxs)("div",{ref:target,children:[element,children]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:element})}KeyboardShortcuts.displayName="KeyboardShortcuts";const keyboard_shortcuts=KeyboardShortcuts;try{KeyboardShortcuts.displayName="KeyboardShortcuts",KeyboardShortcuts.__docgenInfo={description:"`KeyboardShortcuts` is a component which handles keyboard sequences during the lifetime of the rendering element.\n\nWhen passed children, it will capture key events which occur on or within the children. If no children are passed, events are captured on the document.\n\nIt uses the [Mousetrap](https://craig.is/killing/mice) library to implement keyboard sequence bindings.\n\n```jsx\nimport { KeyboardShortcuts } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyKeyboardShortcuts = () => {\n\tconst [ isAllSelected, setIsAllSelected ] = useState( false );\n\tconst selectAll = () => {\n\t\tsetIsAllSelected( true );\n\t};\n\n\treturn (\n\t\t<div>\n\t\t\t<KeyboardShortcuts\n\t\t\t\tshortcuts={ {\n\t\t\t\t\t'mod+a': selectAll,\n\t\t\t\t} }\n\t\t\t/>\n\t\t\t[cmd/ctrl + A] Combination pressed? { isAllSelected ? 'Yes' : 'No' }\n\t\t</div>\n\t);\n};\n```",displayName:"KeyboardShortcuts",props:{children:{defaultValue:null,description:"Elements to render, upon whom key events are to be monitored.",name:"children",required:!1,type:{name:"ReactNode"}},shortcuts:{defaultValue:null,description:"An object of shortcut bindings, where each key is a keyboard combination,\nthe value of which is the callback to be invoked when the key combination is pressed.\n\nThe value of each shortcut should be a consistent function reference, not an anonymous function.\nOtherwise, the callback will not be correctly unbound when the component unmounts.\n\nThe `KeyboardShortcuts` component will not update to reflect a changed `shortcuts` prop.\nIf you need to change shortcuts, mount a separate `KeyboardShortcuts` element,\nwhich can be achieved by assigning a unique `key` prop.\n@see {@link https://craig.is/killing/mice Mousetrap documentation}",name:"shortcuts",required:!0,type:{name:"Record<string, (event: ExtendedKeyboardEvent, combo: string) => void>"}},bindGlobal:{defaultValue:null,description:"By default, a callback will not be invoked if the key combination occurs in an editable field.\nPass `bindGlobal` as `true` if the key events should be observed globally, including within editable fields.\n\nTip: If you need some but not all keyboard events to be observed globally,\nsimply render two distinct `KeyboardShortcuts` elements, one with and one without the `bindGlobal` prop.",name:"bindGlobal",required:!1,type:{name:"boolean"}},eventName:{defaultValue:null,description:"By default, a callback is invoked in response to the `keydown` event.\nTo override this, pass `eventName` with the name of a specific keyboard event.",name:"eventName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/keyboard-shortcuts/index.tsx#KeyboardShortcuts"]={docgenInfo:KeyboardShortcuts.__docgenInfo,name:"KeyboardShortcuts",path:"packages/components/src/keyboard-shortcuts/index.tsx#KeyboardShortcuts"})}catch(__react_docgen_typescript_loader_error){}const stories={component:keyboard_shortcuts,title:"Components/KeyboardShortcuts",parameters:{sourceLink:"packages/components/src/keyboard-shortcuts",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=props=>(0,jsx_runtime.jsx)(keyboard_shortcuts,{...props});Template.displayName="Template";const Default=Template.bind({});Default.args={shortcuts:{a:()=>window.alert('You hit "a"!'),b:()=>window.alert('You hit "b"!')},children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:'Hit the "a" or "b" key in this textarea:'}),(0,jsx_runtime.jsx)("textarea",{})]})},Default.parameters={docs:{source:{code:'\n<KeyboardShortcuts\n  shortcuts={{\n    a: () => window.alert(\'You hit "a"!\'),\n    b: () => window.alert(\'You hit "b"!\'),\n  }}\n>\n  <div>\n    <p>\n      Hit the "a" or "b" key in this textarea:\n    </p>\n    <textarea />\n  </div>\n</KeyboardShortcuts>\n\t\t\t'}}};try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/keyboard-shortcuts/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/keyboard-shortcuts/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);