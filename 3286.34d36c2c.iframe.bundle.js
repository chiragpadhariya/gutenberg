"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[3286],{"./packages/components/src/button-group/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedButtonGroup(props,ref){const{className,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-button-group",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{ref,role:"group",className:classes,...restProps})}UnforwardedButtonGroup.displayName="UnforwardedButtonGroup";const ButtonGroup=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedButtonGroup),__WEBPACK_DEFAULT_EXPORT__=ButtonGroup;try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:'ButtonGroup can be used to group any related buttons together. To emphasize\nrelated buttons, a group should share a common container.\n\n```jsx\nimport { Button, ButtonGroup } from \'@wordpress/components\';\n\nconst MyButtonGroup = () => (\n  <ButtonGroup>\n    <Button variant="primary">Button 1</Button>\n    <Button variant="primary">Button 2</Button>\n  </ButtonGroup>\n);\n```',displayName:"ButtonGroup",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/button-group/index.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/components/src/button-group/index.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}try{buttongroup.displayName="buttongroup",buttongroup.__docgenInfo={description:'ButtonGroup can be used to group any related buttons together. To emphasize\nrelated buttons, a group should share a common container.\n\n```jsx\nimport { Button, ButtonGroup } from \'@wordpress/components\';\n\nconst MyButtonGroup = () => (\n  <ButtonGroup>\n    <Button variant="primary">Button 1</Button>\n    <Button variant="primary">Button 2</Button>\n  </ButtonGroup>\n);\n```',displayName:"buttongroup",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/button-group/index.tsx#buttongroup"]={docgenInfo:buttongroup.__docgenInfo,name:"buttongroup",path:"packages/components/src/button-group/index.tsx#buttongroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/date-time/time/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>time});var startOfMinute=__webpack_require__("./packages/components/node_modules/date-fns/esm/startOfMinute/index.js"),format=__webpack_require__("./packages/components/node_modules/date-fns/esm/format/index.js"),set=__webpack_require__("./packages/components/node_modules/date-fns/esm/set/index.js"),setHours=__webpack_require__("./packages/components/node_modules/date-fns/esm/setHours/index.js"),setMonth=__webpack_require__("./packages/components/node_modules/date-fns/esm/setMonth/index.js"),react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),base_control=__webpack_require__("./packages/components/src/base-control/index.tsx"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),button_group=__webpack_require__("./packages/components/src/button-group/index.tsx"),date_build_module=__webpack_require__("./packages/date/build-module/index.js"),tooltip=__webpack_require__("./packages/components/src/tooltip/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),space=__webpack_require__("./packages/components/src/ui/utils/space.ts"),input_control_styles=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx"),number_control=__webpack_require__("./packages/components/src/number-control/index.tsx"),select_control=__webpack_require__("./packages/components/src/select-control/index.tsx"),select_control_styles=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts");const Wrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr23110"})("box-sizing:border-box;font-size:",config_values.Z.fontSize,";"),Fieldset=(0,emotion_styled_base_browser_esm.Z)("fieldset",{target:"evcr2319"})("border:0;margin:0 0 ",(0,space.D)(4)," 0;padding:0;&:last-child{margin-bottom:0;}"),TimeWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr2318"})({name:"pd0mhc",styles:"direction:ltr;display:flex"}),baseInput=(0,emotion_react_browser_esm.iv)("&&& ",input_control_styles.II,"{padding-left:",(0,space.D)(2),";padding-right:",(0,space.D)(2),";text-align:center;}",""),HoursInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2317"})(baseInput," width:",(0,space.D)(9),";&&& ",input_control_styles.II,"{padding-right:0;}&&& ",input_control_styles.Kg,"{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;}"),TimeSeparator=(0,emotion_styled_base_browser_esm.Z)("span",{target:"evcr2316"})("border-top:",config_values.Z.borderWidth," solid ",colors_values.D.gray[700],";border-bottom:",config_values.Z.borderWidth," solid ",colors_values.D.gray[700],";line-height:calc(\n\t\t",config_values.Z.controlHeight," - ",config_values.Z.borderWidth," * 2\n\t);display:inline-block;"),MinutesInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2315"})(baseInput," width:",(0,space.D)(9),";&&& ",input_control_styles.II,"{padding-left:0;}&&& ",input_control_styles.Kg,"{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;}"),MonthSelectWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr2314"})({name:"1ff36h2",styles:"flex-grow:1"}),MonthSelect=(0,emotion_styled_base_browser_esm.Z)(select_control.Z,{target:"evcr2313"})("height:36px;",select_control_styles.Ph,"{line-height:30px;}"),DayInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2312"})(baseInput," width:",(0,space.D)(9),";"),YearInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2311"})(baseInput," width:",(0,space.D)(14),";"),TimeZone=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr2310"})({name:"ebu3jh",styles:"text-decoration:underline dotted"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const timezone_TimeZone=()=>{const{timezone}=(0,date_build_module.Gw)(),userTimezoneOffset=(new Date).getTimezoneOffset()/60*-1;if(Number(timezone.offset)===userTimezoneOffset)return null;const offsetSymbol=Number(timezone.offset)>=0?"+":"",zoneAbbr=""!==timezone.abbr&&isNaN(Number(timezone.abbr))?timezone.abbr:`UTC${offsetSymbol}${timezone.offset}`,timezoneDetail="UTC"===timezone.string?(0,build_module.__)("Coordinated Universal Time"):`(${zoneAbbr}) ${timezone.string.replace("_"," ")}`;return(0,jsx_runtime.jsx)(tooltip.Z,{position:"top center",text:timezoneDetail,children:(0,jsx_runtime.jsx)(TimeZone,{className:"components-datetime__timezone",children:zoneAbbr})})};timezone_TimeZone.displayName="TimeZone";const time_timezone=timezone_TimeZone;try{timezone.displayName="timezone",timezone.__docgenInfo={description:"Displays timezone information when user timezone is different from site\ntimezone.",displayName:"timezone",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/time/timezone.tsx#timezone"]={docgenInfo:timezone.__docgenInfo,name:"timezone",path:"packages/components/src/date-time/time/timezone.tsx#timezone"})}catch(__react_docgen_typescript_loader_error){}var component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),spacer_component=__webpack_require__("./packages/components/src/spacer/component.tsx"),actions=__webpack_require__("./packages/components/src/input-control/reducer/actions.ts"),utils=__webpack_require__("./packages/components/src/date-time/utils.ts"),constants=__webpack_require__("./packages/components/src/date-time/constants.ts");function from12hTo24h(hours,isPm){return isPm?(hours%12+12)%24:hours%12}function buildPadInputStateReducer(pad){return(state,action)=>{const nextState={...state};return action.type!==actions.g&&action.type!==actions.Oh&&action.type!==actions.LX||void 0!==nextState.value&&(nextState.value=nextState.value.toString().padStart(pad,"0")),nextState}}function TimePicker(_ref){let{is12Hour,currentTime,onChange}=_ref;const[date,setDate]=(0,react.useState)((()=>currentTime?(0,startOfMinute.Z)((0,utils.g)(currentTime)):new Date));(0,react.useEffect)((()=>{setDate(currentTime?(0,startOfMinute.Z)((0,utils.g)(currentTime)):new Date)}),[currentTime]);const{day,month,year,minutes,hours,am}=(0,react.useMemo)((()=>({day:(0,format.Z)(date,"dd"),month:(0,format.Z)(date,"MM"),year:(0,format.Z)(date,"yyyy"),minutes:(0,format.Z)(date,"mm"),hours:(0,format.Z)(date,is12Hour?"hh":"HH"),am:(0,format.Z)(date,"a")})),[date,is12Hour]),buildNumberControlChangeCallback=method=>(value,_ref2)=>{let{event}=_ref2;if(!(event.target instanceof HTMLInputElement))return;if(!event.target.validity.valid)return;let numberValue=Number(value);"hours"===method&&is12Hour&&(numberValue=from12hTo24h(numberValue,"PM"===am));const newDate=(0,set.Z)(date,{[method]:numberValue});setDate(newDate),null==onChange||onChange((0,format.Z)(newDate,constants.u))};function buildAmPmChangeCallback(value){return()=>{if(am===value)return;const parsedHours=parseInt(hours,10),newDate=(0,setHours.Z)(date,from12hTo24h(parsedHours,"PM"===value));setDate(newDate),null==onChange||onChange((0,format.Z)(newDate,constants.u))}}const dayField=(0,jsx_runtime.jsx)(DayInput,{className:"components-datetime__time-field components-datetime__time-field-day",label:(0,build_module.__)("Day"),hideLabelFromVision:!0,__next36pxDefaultSize:!0,value:day,step:1,min:1,max:31,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:buildNumberControlChangeCallback("date")}),monthField=(0,jsx_runtime.jsx)(MonthSelectWrapper,{children:(0,jsx_runtime.jsx)(MonthSelect,{className:"components-datetime__time-field components-datetime__time-field-month",label:(0,build_module.__)("Month"),hideLabelFromVision:!0,__nextHasNoMarginBottom:!0,value:month,options:[{value:"01",label:(0,build_module.__)("January")},{value:"02",label:(0,build_module.__)("February")},{value:"03",label:(0,build_module.__)("March")},{value:"04",label:(0,build_module.__)("April")},{value:"05",label:(0,build_module.__)("May")},{value:"06",label:(0,build_module.__)("June")},{value:"07",label:(0,build_module.__)("July")},{value:"08",label:(0,build_module.__)("August")},{value:"09",label:(0,build_module.__)("September")},{value:"10",label:(0,build_module.__)("October")},{value:"11",label:(0,build_module.__)("November")},{value:"12",label:(0,build_module.__)("December")}],onChange:value=>{const newDate=(0,setMonth.Z)(date,Number(value)-1);setDate(newDate),null==onChange||onChange((0,format.Z)(newDate,constants.u))}})});return(0,jsx_runtime.jsxs)(Wrapper,{className:"components-datetime__time",children:[(0,jsx_runtime.jsxs)(Fieldset,{children:[(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,build_module.__)("Time")}),(0,jsx_runtime.jsxs)(component.Z,{className:"components-datetime__time-wrapper",children:[(0,jsx_runtime.jsxs)(TimeWrapper,{className:"components-datetime__time-field components-datetime__time-field-time",children:[(0,jsx_runtime.jsx)(HoursInput,{className:"components-datetime__time-field-hours-input",label:(0,build_module.__)("Hours"),hideLabelFromVision:!0,__next36pxDefaultSize:!0,value:hours,step:1,min:is12Hour?1:0,max:is12Hour?12:23,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:buildNumberControlChangeCallback("hours"),__unstableStateReducer:buildPadInputStateReducer(2)}),(0,jsx_runtime.jsx)(TimeSeparator,{className:"components-datetime__time-separator","aria-hidden":"true",children:":"}),(0,jsx_runtime.jsx)(MinutesInput,{className:"components-datetime__time-field-minutes-input",label:(0,build_module.__)("Minutes"),hideLabelFromVision:!0,__next36pxDefaultSize:!0,value:minutes,step:1,min:0,max:59,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:buildNumberControlChangeCallback("minutes"),__unstableStateReducer:buildPadInputStateReducer(2)})]}),is12Hour&&(0,jsx_runtime.jsxs)(button_group.Z,{className:"components-datetime__time-field components-datetime__time-field-am-pm",children:[(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-datetime__time-am-button",variant:"AM"===am?"primary":"secondary",onClick:buildAmPmChangeCallback("AM"),children:(0,build_module.__)("AM")}),(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-datetime__time-pm-button",variant:"PM"===am?"primary":"secondary",onClick:buildAmPmChangeCallback("PM"),children:(0,build_module.__)("PM")})]}),(0,jsx_runtime.jsx)(spacer_component.Z,{}),(0,jsx_runtime.jsx)(time_timezone,{})]})]}),(0,jsx_runtime.jsxs)(Fieldset,{children:[(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,build_module.__)("Date")}),(0,jsx_runtime.jsxs)(component.Z,{className:"components-datetime__time-wrapper",children:[is12Hour?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[monthField,dayField]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[dayField,monthField]}),(0,jsx_runtime.jsx)(YearInput,{className:"components-datetime__time-field components-datetime__time-field-year",label:(0,build_module.__)("Year"),hideLabelFromVision:!0,__next36pxDefaultSize:!0,value:year,step:1,min:1,max:9999,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:buildNumberControlChangeCallback("year"),__unstableStateReducer:buildPadInputStateReducer(4)})]})]})]})}TimePicker.displayName="TimePicker";const time=TimePicker;try{TimePicker.displayName="TimePicker",TimePicker.__docgenInfo={description:"TimePicker is a React component that renders a clock for time selection.\n\n```jsx\nimport { TimePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTimePicker = () => {\n  const [ time, setTime ] = useState( new Date() );\n\n  return (\n    <TimePicker\n      currentTime={ date }\n      onChange={ ( newTime ) => setTime( newTime ) }\n      is12Hour\n    />\n  );\n};\n```",displayName:"TimePicker",props:{currentTime:{defaultValue:null,description:"The initial current time the time picker should render.",name:"currentTime",required:!1,type:{name:"string | number | Date"}},is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed and the time format is assumed to be `MM-DD-YYYY` (as opposed\nto the default format `DD-MM-YYYY`).",name:"is12Hour",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"The function called when a new time has been selected. It is passed the\ntime as an argument.",name:"onChange",required:!1,type:{name:"(time: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/time/index.tsx#TimePicker"]={docgenInfo:TimePicker.__docgenInfo,name:"TimePicker",path:"packages/components/src/date-time/time/index.tsx#TimePicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/select-control/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>SelectControl,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/base-control/index.tsx"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/input-control/input-base.tsx"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts"),_chevron_down__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function UnforwardedSelectControl(props,ref){const{className,disabled=!1,help,hideLabelFromVision,id:idProp,label,multiple=!1,onBlur=noop,onChange,onFocus=noop,options=[],size="default",value:valueProp,labelPosition="top",children,prefix,suffix,__next36pxDefaultSize=!1,__nextHasNoMarginBottom=!1,...restProps}=props,[isFocused,setIsFocused]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!(null!=options&&options.length||children))return null;const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-select-control",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_4__.ZP,{help,id,__nextHasNoMarginBottom,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__.Z,{className:classes,disabled,hideLabelFromVision,id,isFocused,label,size,suffix:suffix||!multiple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chevron_down__WEBPACK_IMPORTED_MODULE_6__.Z,{}),prefix,labelPosition,__next36pxDefaultSize,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__.Ph,{...restProps,__next36pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled,id,multiple,onBlur:event=>{onBlur(event),setIsFocused(!1)},onChange:event=>{var _props$onChange2;if(props.multiple){var _props$onChange;const newValues=Array.from(event.target.options).filter((_ref=>{let{selected}=_ref;return selected})).map((_ref2=>{let{value}=_ref2;return value}));null===(_props$onChange=props.onChange)||void 0===_props$onChange||_props$onChange.call(props,newValues,{event})}else null===(_props$onChange2=props.onChange)||void 0===_props$onChange2||_props$onChange2.call(props,event.target.value,{event})},onFocus:event=>{onFocus(event),setIsFocused(!0)},ref,selectSize:size,value:valueProp,children:children||options.map(((option,index)=>{const key=option.id||`${option.label}-${option.value}-${index}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option",{value:option.value,disabled:option.disabled,children:option.label},key)}))})})})}UnforwardedSelectControl.displayName="UnforwardedSelectControl";const SelectControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(UnforwardedSelectControl),__WEBPACK_DEFAULT_EXPORT__=SelectControl;try{SelectControl.displayName="SelectControl",SelectControl.__docgenInfo={description:"`SelectControl` allows users to select from a single or multiple option menu.\nIt functions as a wrapper around the browser's native `<select>` element.",displayName:"SelectControl",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},suffix:{defaultValue:null,description:"Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>",name:"suffix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"side"'},{value:'"top"'},{value:'"bottom"'},{value:'"edge"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; id?: string; disabled?: boolean; }[]"}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},multiple:{defaultValue:{value:"false\nfalse"},description:"If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",name:"onChange",required:!1,type:{name:"((value: string, extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void) | ((value: string[], extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/select-control/index.tsx#SelectControl"]={docgenInfo:SelectControl.__docgenInfo,name:"SelectControl",path:"packages/components/src/select-control/index.tsx#SelectControl"})}catch(__react_docgen_typescript_loader_error){}try{selectcontrol.displayName="selectcontrol",selectcontrol.__docgenInfo={description:"`SelectControl` allows users to select from a single or multiple option menu.\nIt functions as a wrapper around the browser's native `<select>` element.",displayName:"selectcontrol",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"__unstable-large"'}]}},suffix:{defaultValue:null,description:"Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>",name:"suffix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"side"'},{value:'"top"'},{value:'"bottom"'},{value:'"edge"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLSelectElement, Element>) => void"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; id?: string; disabled?: boolean; }[]"}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},multiple:{defaultValue:{value:"false\nfalse"},description:"If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",name:"onChange",required:!1,type:{name:"((value: string, extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void) | ((value: string[], extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/select-control/index.tsx#selectcontrol"]={docgenInfo:selectcontrol.__docgenInfo,name:"selectcontrol",path:"packages/components/src/select-control/index.tsx#selectcontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/node_modules/date-fns/esm/set/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>set});var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/date-fns/esm/toDate/index.js"),_setMonth_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/date-fns/esm/setMonth/index.js"),_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/date-fns/esm/_lib/toInteger/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/date-fns/esm/_lib/requiredArgs/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function set(dirtyDate,values){if((0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(2,arguments),"object"!==_typeof(values)||null===values)throw new RangeError("values parameter must be an object");var date=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDate);return isNaN(date.getTime())?new Date(NaN):(null!=values.year&&date.setFullYear(values.year),null!=values.month&&(date=(0,_setMonth_index_js__WEBPACK_IMPORTED_MODULE_2__.Z)(date,values.month)),null!=values.date&&date.setDate((0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__.Z)(values.date)),null!=values.hours&&date.setHours((0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__.Z)(values.hours)),null!=values.minutes&&date.setMinutes((0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__.Z)(values.minutes)),null!=values.seconds&&date.setSeconds((0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__.Z)(values.seconds)),null!=values.milliseconds&&date.setMilliseconds((0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__.Z)(values.milliseconds)),date)}},"./packages/components/node_modules/date-fns/esm/setHours/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>setHours});var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/date-fns/esm/_lib/toInteger/index.js"),_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/date-fns/esm/toDate/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/date-fns/esm/_lib/requiredArgs/index.js");function setHours(dirtyDate,dirtyHours){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(2,arguments);var date=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDate),hours=(0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.Z)(dirtyHours);return date.setHours(hours),date}},"./packages/components/node_modules/date-fns/esm/setMonth/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>setMonth});var toInteger=__webpack_require__("./packages/components/node_modules/date-fns/esm/_lib/toInteger/index.js"),toDate=__webpack_require__("./packages/components/node_modules/date-fns/esm/toDate/index.js"),requiredArgs=__webpack_require__("./packages/components/node_modules/date-fns/esm/_lib/requiredArgs/index.js");function getDaysInMonth(dirtyDate){(0,requiredArgs.Z)(1,arguments);var date=(0,toDate.Z)(dirtyDate),year=date.getFullYear(),monthIndex=date.getMonth(),lastDayOfMonth=new Date(0);return lastDayOfMonth.setFullYear(year,monthIndex+1,0),lastDayOfMonth.setHours(0,0,0,0),lastDayOfMonth.getDate()}function setMonth(dirtyDate,dirtyMonth){(0,requiredArgs.Z)(2,arguments);var date=(0,toDate.Z)(dirtyDate),month=(0,toInteger.Z)(dirtyMonth),year=date.getFullYear(),day=date.getDate(),dateWithDesiredMonth=new Date(0);dateWithDesiredMonth.setFullYear(year,month,15),dateWithDesiredMonth.setHours(0,0,0,0);var daysInMonth=getDaysInMonth(dateWithDesiredMonth);return date.setMonth(month,Math.min(day,daysInMonth)),date}},"./packages/components/node_modules/date-fns/esm/startOfMinute/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>startOfMinute});var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/date-fns/esm/toDate/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/node_modules/date-fns/esm/_lib/requiredArgs/index.js");function startOfMinute(dirtyDate){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(1,arguments);var date=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDate);return date.setSeconds(0,0),date}}}]);