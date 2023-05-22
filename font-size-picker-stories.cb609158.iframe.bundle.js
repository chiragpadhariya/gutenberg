"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[958],{"./packages/components/src/custom-select-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CustomSelectControl});var downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icon=__webpack_require__("./packages/icons/build-module/icon/index.js"),check=__webpack_require__("./packages/icons/build-module/library/check.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js"),deprecated_build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),select_control_styles=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts"),chevron_down=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),input_base=__webpack_require__("./packages/components/src/input-control/input-base.tsx"),input_control_styles=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx");const backCompatMinWidth=props=>props.__nextUnconstrainedWidth?"":(0,emotion_react_browser_esm.iv)(input_control_styles.W2,"{min-width:130px;}",""),InputBaseWithBackCompatMinWidth=(0,emotion_styled_base_browser_esm.Z)(input_base.Z,{target:"eswuck60"})(backCompatMinWidth,";");var base_control_styles=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const itemToString=item=>null==item?void 0:item.name,stateReducer=(_ref,_ref2)=>{let{selectedItem}=_ref,{type,changes,props:{items}}=_ref2;switch(type){case downshift_esm.L7.stateChangeTypes.ToggleButtonKeyDownArrowDown:return{selectedItem:items[selectedItem?Math.min(items.indexOf(selectedItem)+1,items.length-1):0]};case downshift_esm.L7.stateChangeTypes.ToggleButtonKeyDownArrowUp:return{selectedItem:items[selectedItem?Math.max(items.indexOf(selectedItem)-1,0):items.length-1]};default:return changes}};function CustomSelectControl(props){var _menuProps$ariaActiv;const{__next36pxDefaultSize=!1,__nextUnconstrainedWidth=!1,className,hideLabelFromVision,label,describedBy,options:items,onChange:onSelectedItemChange,size="default",value:_selectedItem,onMouseOver,onMouseOut,onFocus,onBlur,__experimentalShowSelectedHint=!1}=props,{getLabelProps,getToggleButtonProps,getMenuProps,getItemProps,isOpen,highlightedIndex,selectedItem}=(0,downshift_esm.L7)({initialSelectedItem:items[0],items,itemToString,onSelectedItemChange,...null!=_selectedItem?{selectedItem:_selectedItem}:void 0,stateReducer}),[isFocused,setIsFocused]=(0,react.useState)(!1);__nextUnconstrainedWidth||(0,deprecated_build_module.Z)("Constrained width styles for wp.components.CustomSelectControl",{since:"6.1",version:"6.4",hint:"Set the `__nextUnconstrainedWidth` prop to true to start opting into the new styles, which will become the default in a future version"});const menuProps=getMenuProps({className:"components-custom-select-control__menu","aria-hidden":!isOpen}),onKeyDownHandler=(0,react.useCallback)((e=>{var _menuProps$onKeyDown;e.stopPropagation(),null==menuProps||null===(_menuProps$onKeyDown=menuProps.onKeyDown)||void 0===_menuProps$onKeyDown||_menuProps$onKeyDown.call(menuProps,e)}),[menuProps]);return null!==(_menuProps$ariaActiv=menuProps["aria-activedescendant"])&&void 0!==_menuProps$ariaActiv&&_menuProps$ariaActiv.startsWith("downshift-null")&&delete menuProps["aria-activedescendant"],(0,jsx_runtime.jsxs)("div",{className:classnames_default()("components-custom-select-control",className),children:[hideLabelFromVision?(0,jsx_runtime.jsx)(component.Z,{as:"label",...getLabelProps(),children:label}):(0,jsx_runtime.jsx)(base_control_styles.ar,{...getLabelProps({className:"components-custom-select-control__label"}),children:label}),(0,jsx_runtime.jsx)(InputBaseWithBackCompatMinWidth,{__next36pxDefaultSize,__nextUnconstrainedWidth,isFocused:isOpen||isFocused,__unstableInputWidth:__nextUnconstrainedWidth?void 0:"auto",labelPosition:__nextUnconstrainedWidth?void 0:"top",size,suffix:(0,jsx_runtime.jsx)(chevron_down.Z,{}),children:(0,jsx_runtime.jsxs)(select_control_styles.Ph,{onMouseOver,onMouseOut,as:"button",onFocus:function handleOnFocus(e){setIsFocused(!0),null==onFocus||onFocus(e)},onBlur:function handleOnBlur(e){setIsFocused(!1),null==onBlur||onBlur(e)},selectSize:size,__next36pxDefaultSize,...getToggleButtonProps({"aria-label":label,"aria-labelledby":void 0,className:"components-custom-select-control__button",describedBy:function getDescribedBy(){return describedBy||(selectedItem?(0,build_module.gB)((0,build_module.__)("Currently selected: %s"),selectedItem.name):(0,build_module.__)("No selection"))}()}),children:[itemToString(selectedItem),__experimentalShowSelectedHint&&selectedItem.__experimentalHint&&(0,jsx_runtime.jsx)("span",{className:"components-custom-select-control__hint",children:selectedItem.__experimentalHint})]})}),(0,jsx_runtime.jsx)("ul",{...menuProps,onKeyDown:onKeyDownHandler,children:isOpen&&items.map(((item,index)=>(0,jsx_runtime.jsxs)("li",{...getItemProps({item,index,key:item.key,className:classnames_default()(item.className,"components-custom-select-control__item",{"is-highlighted":index===highlightedIndex,"has-hint":!!item.__experimentalHint,"is-next-36px-default-size":__next36pxDefaultSize}),style:item.style}),children:[item.name,item.__experimentalHint&&(0,jsx_runtime.jsx)("span",{className:"components-custom-select-control__item-hint",children:item.__experimentalHint}),item===selectedItem&&(0,jsx_runtime.jsx)(icon.Z,{icon:check.Z,className:"components-custom-select-control__item-icon"})]})))})]})}function StableCustomSelectControl(props){return(0,jsx_runtime.jsx)(CustomSelectControl,{...props,__experimentalShowSelectedHint:!1})}CustomSelectControl.displayName="CustomSelectControl",StableCustomSelectControl.displayName="StableCustomSelectControl",CustomSelectControl.__docgenInfo={description:"",methods:[],displayName:"CustomSelectControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-select-control/index.js"]={name:"CustomSelectControl",docgenInfo:CustomSelectControl.__docgenInfo,path:"packages/components/src/custom-select-control/index.js"}),StableCustomSelectControl.__docgenInfo={description:"",methods:[],displayName:"StableCustomSelectControl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-select-control/index.js"]={name:"StableCustomSelectControl",docgenInfo:StableCustomSelectControl.__docgenInfo,path:"packages/components/src/custom-select-control/index.js"})},"./packages/icons/build-module/library/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"./packages/icons/build-module/library/settings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"}))},"./packages/components/src/font-size-picker/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithComplexCSSValues:()=>WithComplexCSSValues,WithCustomSizesDisabled:()=>WithCustomSizesDisabled,WithMoreFontSizes:()=>WithMoreFontSizes,WithSlider:()=>WithSlider,WithUnits:()=>WithUnits,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),settings=__webpack_require__("./packages/icons/build-module/library/settings.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),range_control=__webpack_require__("./packages/components/src/range-control/index.tsx"),component=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),flex_item_component=__webpack_require__("./packages/components/src/flex/flex-item/component.tsx"),unit_control=__webpack_require__("./packages/components/src/unit-control/index.tsx"),utils=__webpack_require__("./packages/components/src/unit-control/utils.ts"),visually_hidden_component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx");function getCommonSizeUnit(fontSizes){const[firstFontSize,...otherFontSizes]=fontSizes;if(!firstFontSize)return null;const[,firstUnit]=(0,utils.YX)(firstFontSize.size);return otherFontSizes.every((fontSize=>{const[,unit]=(0,utils.YX)(fontSize.size);return unit===firstUnit}))?firstUnit:null}var h_stack_component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),base_control=__webpack_require__("./packages/components/src/base-control/index.tsx"),space=__webpack_require__("./packages/components/src/ui/utils/space.ts"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const Container=(0,emotion_styled_base_browser_esm.Z)("fieldset",{target:"e8tqeku4"})({name:"1t1ytme",styles:"border:0;margin:0;padding:0"}),HeaderLabel=(0,emotion_styled_base_browser_esm.Z)(base_control.ZP.VisualLabel,{target:"e8tqeku3"})("display:flex;gap:",(0,space.D)(1),";justify-content:flex-start;margin-bottom:0;"),HeaderHint=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e8tqeku2"})("color:",colors_values.D.gray[700],";"),Controls=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e8tqeku1"})((props=>!props.__nextHasNoMarginBottom&&`margin-bottom: ${(0,space.D)(6)};`),";"),ResetButton=(0,emotion_styled_base_browser_esm.Z)(src_button.ZP,{target:"e8tqeku0"})("&&&{height:",(props=>"__unstable-large"===props.size?"40px":"30px"),";}");var spacer_component=__webpack_require__("./packages/components/src/spacer/component.tsx"),custom_select_control=__webpack_require__("./packages/components/src/custom-select-control/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_OPTION={key:"default",name:(0,i18n_build_module.__)("Default"),value:void 0},CUSTOM_OPTION={key:"custom",name:(0,i18n_build_module.__)("Custom")},FontSizePickerSelect=props=>{var _options$find;const{fontSizes,value,disableCustomFontSizes,size,onChange,onSelectCustom}=props,areAllSizesSameUnit=!!getCommonSizeUnit(fontSizes),options=[DEFAULT_OPTION,...fontSizes.map((fontSize=>{let hint;if(areAllSizesSameUnit){const[quantity]=(0,utils.YX)(fontSize.size);void 0!==quantity&&(hint=String(quantity))}else(function isSimpleCssValue(value){return/^[\d\.]+(px|em|rem|vw|vh|%)?$/i.test(String(value))})(fontSize.size)&&(hint=String(fontSize.size));return{key:fontSize.slug,name:fontSize.name||fontSize.slug,value:fontSize.size,__experimentalHint:hint}})),...disableCustomFontSizes?[]:[CUSTOM_OPTION]],selectedOption=value?null!==(_options$find=options.find((option=>option.value===value)))&&void 0!==_options$find?_options$find:CUSTOM_OPTION:DEFAULT_OPTION;return(0,jsx_runtime.jsx)(custom_select_control.Z,{__nextUnconstrainedWidth:!0,className:"components-font-size-picker__select",label:(0,i18n_build_module.__)("Font size"),hideLabelFromVision:!0,describedBy:(0,i18n_build_module.gB)((0,i18n_build_module.__)("Currently selected font size: %s"),selectedOption.name),options,value:selectedOption,__experimentalShowSelectedHint:!0,onChange:_ref=>{let{selectedItem}=_ref;selectedItem===CUSTOM_OPTION?onSelectCustom():onChange(selectedItem.value)},size})};FontSizePickerSelect.displayName="FontSizePickerSelect";const font_size_picker_select=FontSizePickerSelect;try{fontsizepickerselect.displayName="fontsizepickerselect",fontsizepickerselect.__docgenInfo={description:"",displayName:"fontsizepickerselect",props:{size:{defaultValue:{value:"'default'"},description:"Size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"The current font size value.",name:"value",required:!1,type:{name:"string | number"}},fontSizes:{defaultValue:null,description:"",name:"fontSizes",required:!0,type:{name:"FontSize[]"}},disableCustomFontSizes:{defaultValue:null,description:"",name:"disableCustomFontSizes",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | number, selectedItem?: FontSize) => void"}},onSelectCustom:{defaultValue:null,description:"",name:"onSelectCustom",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/font-size-picker-select.tsx#fontsizepickerselect"]={docgenInfo:fontsizepickerselect.__docgenInfo,name:"fontsizepickerselect",path:"packages/components/src/font-size-picker/font-size-picker-select.tsx#fontsizepickerselect"})}catch(__react_docgen_typescript_loader_error){}var toggle_group_control_component=__webpack_require__("./packages/components/src/toggle-group-control/toggle-group-control/component.tsx"),toggle_group_control_option_component=__webpack_require__("./packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx");const T_SHIRT_ABBREVIATIONS=[(0,i18n_build_module.__)("S"),(0,i18n_build_module.__)("M"),(0,i18n_build_module.__)("L"),(0,i18n_build_module.__)("XL"),(0,i18n_build_module.__)("XXL")],T_SHIRT_NAMES=[(0,i18n_build_module.__)("Small"),(0,i18n_build_module.__)("Medium"),(0,i18n_build_module.__)("Large"),(0,i18n_build_module.__)("Extra Large"),(0,i18n_build_module.__)("Extra Extra Large")],FontSizePickerToggleGroup=props=>{const{fontSizes,value,__nextHasNoMarginBottom,size,onChange}=props;return(0,jsx_runtime.jsx)(toggle_group_control_component.Z,{__nextHasNoMarginBottom,label:(0,i18n_build_module.__)("Font size"),hideLabelFromVision:!0,value,onChange,isBlock:!0,size,children:fontSizes.map(((fontSize,index)=>(0,jsx_runtime.jsx)(toggle_group_control_option_component.Z,{value:fontSize.size,label:T_SHIRT_ABBREVIATIONS[index],"aria-label":fontSize.name||T_SHIRT_NAMES[index],showTooltip:!0},fontSize.slug)))})};FontSizePickerToggleGroup.displayName="FontSizePickerToggleGroup";const font_size_picker_toggle_group=FontSizePickerToggleGroup;try{fontsizepickertogglegroup.displayName="fontsizepickertogglegroup",fontsizepickertogglegroup.__docgenInfo={description:"",displayName:"fontsizepickertogglegroup",props:{size:{defaultValue:{value:"'default'"},description:"Size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"The current font size value.",name:"value",required:!1,type:{name:"string | number"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},fontSizes:{defaultValue:null,description:"",name:"fontSizes",required:!0,type:{name:"FontSize[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | number, selectedItem?: FontSize) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/font-size-picker-toggle-group.tsx#fontsizepickertogglegroup"]={docgenInfo:fontsizepickertogglegroup.__docgenInfo,name:"fontsizepickertogglegroup",path:"packages/components/src/font-size-picker/font-size-picker-toggle-group.tsx#fontsizepickertogglegroup"})}catch(__react_docgen_typescript_loader_error){}const UnforwardedFontSizePicker=(props,ref)=>{var _fontSizes$;const{__nextHasNoMarginBottom=!1,fallbackFontSize,fontSizes=[],disableCustomFontSizes=!1,onChange,size="default",units:unitsProp,value,withSlider=!1,withReset=!0}=props;__nextHasNoMarginBottom||(0,build_module.Z)("Bottom margin styles for wp.components.FontSizePicker",{since:"6.1",version:"6.4",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version."});const units=(0,utils.nj)({availableUnits:unitsProp||["px","em","rem"]}),shouldUseSelectControl=fontSizes.length>5,selectedFontSize=fontSizes.find((fontSize=>fontSize.size===value)),isCustomValue=!!value&&!selectedFontSize,[showCustomValueControl,setShowCustomValueControl]=(0,react.useState)(!disableCustomFontSizes&&isCustomValue),headerHint=(0,react.useMemo)((()=>{if(showCustomValueControl)return(0,i18n_build_module.__)("Custom");if(!shouldUseSelectControl)return selectedFontSize?selectedFontSize.name||T_SHIRT_NAMES[fontSizes.indexOf(selectedFontSize)]:"";const commonUnit=getCommonSizeUnit(fontSizes);return commonUnit?`(${commonUnit})`:""}),[showCustomValueControl,shouldUseSelectControl,selectedFontSize,fontSizes]);if(0===fontSizes.length&&disableCustomFontSizes)return null;const hasUnits="string"==typeof value||"string"==typeof(null===(_fontSizes$=fontSizes[0])||void 0===_fontSizes$?void 0:_fontSizes$.size),[valueQuantity,valueUnit]=(0,utils.YX)(value,units),isValueUnitRelative=!!valueUnit&&["em","rem"].includes(valueUnit);return(0,jsx_runtime.jsxs)(Container,{ref,className:"components-font-size-picker",children:[(0,jsx_runtime.jsx)(visually_hidden_component.Z,{as:"legend",children:(0,i18n_build_module.__)("Font size")}),(0,jsx_runtime.jsx)(spacer_component.Z,{children:(0,jsx_runtime.jsxs)(h_stack_component.Z,{className:"components-font-size-picker__header",children:[(0,jsx_runtime.jsxs)(HeaderLabel,{"aria-label":`${(0,i18n_build_module.__)("Size")} ${headerHint||""}`,children:[(0,i18n_build_module.__)("Size"),headerHint&&(0,jsx_runtime.jsx)(HeaderHint,{className:"components-font-size-picker__header__hint",children:headerHint})]}),!disableCustomFontSizes&&(0,jsx_runtime.jsx)(src_button.ZP,{label:showCustomValueControl?(0,i18n_build_module.__)("Use size preset"):(0,i18n_build_module.__)("Set custom size"),icon:settings.Z,onClick:()=>{setShowCustomValueControl(!showCustomValueControl)},isPressed:showCustomValueControl,isSmall:!0})]})}),(0,jsx_runtime.jsxs)(Controls,{className:"components-font-size-picker__controls",__nextHasNoMarginBottom,children:[!!fontSizes.length&&shouldUseSelectControl&&!showCustomValueControl&&(0,jsx_runtime.jsx)(font_size_picker_select,{fontSizes,value,disableCustomFontSizes,size,onChange:newValue=>{void 0===newValue?null==onChange||onChange(void 0):null==onChange||onChange(hasUnits?newValue:Number(newValue),fontSizes.find((fontSize=>fontSize.size===newValue)))},onSelectCustom:()=>setShowCustomValueControl(!0)}),!shouldUseSelectControl&&!showCustomValueControl&&(0,jsx_runtime.jsx)(font_size_picker_toggle_group,{fontSizes,value,__nextHasNoMarginBottom,size,onChange:newValue=>{void 0===newValue?null==onChange||onChange(void 0):null==onChange||onChange(hasUnits?newValue:Number(newValue),fontSizes.find((fontSize=>fontSize.size===newValue)))}}),!disableCustomFontSizes&&showCustomValueControl&&(0,jsx_runtime.jsxs)(component.Z,{className:"components-font-size-picker__custom-size-control",children:[(0,jsx_runtime.jsx)(flex_item_component.Z,{isBlock:!0,children:(0,jsx_runtime.jsx)(unit_control.ZP,{label:(0,i18n_build_module.__)("Custom"),labelPosition:"top",hideLabelFromVision:!0,value,onChange:newValue=>{void 0===newValue?null==onChange||onChange(void 0):null==onChange||onChange(hasUnits?newValue:parseInt(newValue,10))},size,units:hasUnits?units:[],min:0})}),withSlider&&(0,jsx_runtime.jsx)(flex_item_component.Z,{isBlock:!0,children:(0,jsx_runtime.jsx)(spacer_component.Z,{marginX:2,marginBottom:0,children:(0,jsx_runtime.jsx)(range_control.Z,{__nextHasNoMarginBottom,className:"components-font-size-picker__custom-input",label:(0,i18n_build_module.__)("Custom Size"),hideLabelFromVision:!0,value:valueQuantity,initialPosition:fallbackFontSize,withInputField:!1,onChange:newValue=>{void 0===newValue?null==onChange||onChange(void 0):hasUnits?null==onChange||onChange(newValue+(null!=valueUnit?valueUnit:"px")):null==onChange||onChange(newValue)},min:0,max:isValueUnitRelative?10:100,step:isValueUnitRelative?.1:1})})}),withReset&&(0,jsx_runtime.jsx)(flex_item_component.Z,{children:(0,jsx_runtime.jsx)(ResetButton,{disabled:void 0===value,onClick:()=>{null==onChange||onChange(void 0)},isSmall:!0,variant:"secondary",size,children:(0,i18n_build_module.__)("Reset")})})]})]})]})};UnforwardedFontSizePicker.displayName="UnforwardedFontSizePicker";const FontSizePicker=(0,react.forwardRef)(UnforwardedFontSizePicker),font_size_picker=FontSizePicker;try{FontSizePicker.displayName="FontSizePicker",FontSizePicker.__docgenInfo={description:"",displayName:"FontSizePicker",props:{disableCustomFontSizes:{defaultValue:{value:"false"},description:"If `true`, it will not be possible to choose a custom fontSize. The user\nwill be forced to pick one of the pre-defined sizes passed in fontSizes.",name:"disableCustomFontSizes",required:!1,type:{name:"boolean"}},fallbackFontSize:{defaultValue:null,description:"If no value exists, this prop defines the starting position for the font\nsize picker slider. Only relevant if `withSlider` is `true`.",name:"fallbackFontSize",required:!1,type:{name:"number"}},fontSizes:{defaultValue:null,description:"An array of font size objects. The object should contain properties size,\nname, and slug.",name:"fontSizes",required:!1,type:{name:"FontSize[]"}},onChange:{defaultValue:null,description:"A function that receives the new font size value.\nIf onChange is called without any parameter, it should reset the value,\nattending to what reset means in that context, e.g., set the font size to\nundefined or set the font size a starting value.",name:"onChange",required:!1,type:{name:"(value: string | number, selectedItem?: FontSize) => void"}},units:{defaultValue:null,description:"Available units for custom font size selection.",name:"units",required:!1,type:{name:"string[]"}},value:{defaultValue:null,description:"The current font size value.",name:"value",required:!1,type:{name:"string | number"}},withSlider:{defaultValue:{value:"false"},description:"If `true`, the UI will contain a slider, instead of a numeric text input\nfield. If `false`, no slider will be present.",name:"withSlider",required:!1,type:{name:"boolean"}},withReset:{defaultValue:{value:"true"},description:"If `true`, a reset button will be displayed alongside the input field\nwhen a custom font size is active. Has no effect when\n`disableCustomFontSizes` or `withSlider` is `true`.",name:"withReset",required:!1,type:{name:"boolean"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'default'"},description:"Size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/index.tsx#FontSizePicker"]={docgenInfo:FontSizePicker.__docgenInfo,name:"FontSizePicker",path:"packages/components/src/font-size-picker/index.tsx#FontSizePicker"})}catch(__react_docgen_typescript_loader_error){}try{fontsizepicker.displayName="fontsizepicker",fontsizepicker.__docgenInfo={description:"",displayName:"fontsizepicker",props:{disableCustomFontSizes:{defaultValue:{value:"false"},description:"If `true`, it will not be possible to choose a custom fontSize. The user\nwill be forced to pick one of the pre-defined sizes passed in fontSizes.",name:"disableCustomFontSizes",required:!1,type:{name:"boolean"}},fallbackFontSize:{defaultValue:null,description:"If no value exists, this prop defines the starting position for the font\nsize picker slider. Only relevant if `withSlider` is `true`.",name:"fallbackFontSize",required:!1,type:{name:"number"}},fontSizes:{defaultValue:null,description:"An array of font size objects. The object should contain properties size,\nname, and slug.",name:"fontSizes",required:!1,type:{name:"FontSize[]"}},onChange:{defaultValue:null,description:"A function that receives the new font size value.\nIf onChange is called without any parameter, it should reset the value,\nattending to what reset means in that context, e.g., set the font size to\nundefined or set the font size a starting value.",name:"onChange",required:!1,type:{name:"(value: string | number, selectedItem?: FontSize) => void"}},units:{defaultValue:null,description:"Available units for custom font size selection.",name:"units",required:!1,type:{name:"string[]"}},value:{defaultValue:null,description:"The current font size value.",name:"value",required:!1,type:{name:"string | number"}},withSlider:{defaultValue:{value:"false"},description:"If `true`, the UI will contain a slider, instead of a numeric text input\nfield. If `false`, no slider will be present.",name:"withSlider",required:!1,type:{name:"boolean"}},withReset:{defaultValue:{value:"true"},description:"If `true`, a reset button will be displayed alongside the input field\nwhen a custom font size is active. Has no effect when\n`disableCustomFontSizes` or `withSlider` is `true`.",name:"withReset",required:!1,type:{name:"boolean"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default\nin a future version, currently scheduled to be WordPress 6.4. (The prop\ncan be safely removed once this happens.)",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'default'"},description:"Size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/index.tsx#fontsizepicker"]={docgenInfo:fontsizepicker.__docgenInfo,name:"fontsizepicker",path:"packages/components/src/font-size-picker/index.tsx#fontsizepicker"})}catch(__react_docgen_typescript_loader_error){}var _WithMoreFontSizes$ar;const stories={title:"Components/FontSizePicker",component:font_size_picker,argTypes:{value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/font-size-picker",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{source:{state:"open"}}}},FontSizePickerWithState=_ref=>{let{value,onChange,...props}=_ref;const[fontSize,setFontSize]=(0,react.useState)(value);return(0,jsx_runtime.jsx)(font_size_picker,{...props,value:fontSize,onChange:nextValue=>{setFontSize(nextValue),null==onChange||onChange(nextValue)}})};FontSizePickerWithState.displayName="FontSizePickerWithState";const TwoFontSizePickersWithState=_ref2=>{let{fontSizes,...props}=_ref2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{children:"Fewer font sizes"}),(0,jsx_runtime.jsx)(FontSizePickerWithState,{...props,fontSizes:null==fontSizes?void 0:fontSizes.slice(0,4)}),(0,jsx_runtime.jsx)("h2",{children:"More font sizes"}),(0,jsx_runtime.jsx)(FontSizePickerWithState,{...props,fontSizes})]})},Default=FontSizePickerWithState.bind({});Default.args={__nextHasNoMarginBottom:!0,disableCustomFontSizes:!1,fontSizes:[{name:"Small",slug:"small",size:12},{name:"Normal",slug:"normal",size:16},{name:"Big",slug:"big",size:26}],units:["px","em","rem"],value:16,withSlider:!1};const WithSlider=FontSizePickerWithState.bind({});WithSlider.args={...Default.args,fallbackFontSize:16,value:void 0,withSlider:!0};const WithCustomSizesDisabled=FontSizePickerWithState.bind({});WithCustomSizesDisabled.args={...Default.args,disableCustomFontSizes:!0};const WithMoreFontSizes=FontSizePickerWithState.bind({});WithMoreFontSizes.args={...Default.args,fontSizes:[{name:"Tiny",slug:"tiny",size:8},{name:"Small",slug:"small",size:12},{name:"Normal",slug:"normal",size:16},{name:"Big",slug:"big",size:26},{name:"Bigger",slug:"bigger",size:30},{name:"Huge",slug:"huge",size:36}],value:8};const WithUnits=TwoFontSizePickersWithState.bind({});WithUnits.args={...WithMoreFontSizes.args,fontSizes:null===(_WithMoreFontSizes$ar=WithMoreFontSizes.args.fontSizes)||void 0===_WithMoreFontSizes$ar?void 0:_WithMoreFontSizes$ar.map((option=>({...option,size:`${option.size}px`}))),value:"8px"};const WithComplexCSSValues=TwoFontSizePickersWithState.bind({});WithComplexCSSValues.args={...Default.args,fontSizes:[{name:"Small",slug:"small",size:"clamp(1.75rem, 3vw, 2.25rem)"},{name:"Medium",slug:"medium",size:"1.125rem"},{name:"Large",slug:"large",size:"1.7rem"},{name:"Extra Large",slug:"extra-large",size:"1.95rem"},{name:"Extra Extra Large",slug:"extra-extra-large",size:"2.5rem"},{name:"Huge",slug:"huge",size:"2.8rem"}],value:"1.125rem"},WithCustomSizesDisabled.parameters??={},WithCustomSizesDisabled.parameters.docs??={},WithCustomSizesDisabled.parameters.docs.description??={},WithCustomSizesDisabled.parameters.docs.description.story??="With custom font sizes disabled via the `disableCustomFontSizes` prop, the user will\nonly be able to pick one of the predefined sizes passed in `fontSizes`.",WithMoreFontSizes.parameters??={},WithMoreFontSizes.parameters.docs??={},WithMoreFontSizes.parameters.docs.description??={},WithMoreFontSizes.parameters.docs.description.story??="When there are more than 5 font size options, the UI is no longer a toggle group.",WithUnits.parameters??={},WithUnits.parameters.docs??={},WithUnits.parameters.docs.description??={},WithUnits.parameters.docs.description.story??="When units like `px` are specified explicitly, it will be shown as a label hint.",WithComplexCSSValues.parameters??={},WithComplexCSSValues.parameters.docs??={},WithComplexCSSValues.parameters.docs.description??={},WithComplexCSSValues.parameters.docs.description.story??="The label hint will not be shown if it is a complex CSS value. Some examples of complex CSS values\nin this context are CSS functions like `calc()`, `clamp()`, and `var()`.";try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/font-size-picker/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{WithCustomSizesDisabled.displayName="WithCustomSizesDisabled",WithCustomSizesDisabled.__docgenInfo={description:"With custom font sizes disabled via the `disableCustomFontSizes` prop, the user will\nonly be able to pick one of the predefined sizes passed in `fontSizes`.",displayName:"WithCustomSizesDisabled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/stories/index.tsx#WithCustomSizesDisabled"]={docgenInfo:WithCustomSizesDisabled.__docgenInfo,name:"WithCustomSizesDisabled",path:"packages/components/src/font-size-picker/stories/index.tsx#WithCustomSizesDisabled"})}catch(__react_docgen_typescript_loader_error){}try{WithMoreFontSizes.displayName="WithMoreFontSizes",WithMoreFontSizes.__docgenInfo={description:"When there are more than 5 font size options, the UI is no longer a toggle group.",displayName:"WithMoreFontSizes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/stories/index.tsx#WithMoreFontSizes"]={docgenInfo:WithMoreFontSizes.__docgenInfo,name:"WithMoreFontSizes",path:"packages/components/src/font-size-picker/stories/index.tsx#WithMoreFontSizes"})}catch(__react_docgen_typescript_loader_error){}try{WithUnits.displayName="WithUnits",WithUnits.__docgenInfo={description:"When units like `px` are specified explicitly, it will be shown as a label hint.",displayName:"WithUnits",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/stories/index.tsx#WithUnits"]={docgenInfo:WithUnits.__docgenInfo,name:"WithUnits",path:"packages/components/src/font-size-picker/stories/index.tsx#WithUnits"})}catch(__react_docgen_typescript_loader_error){}try{WithComplexCSSValues.displayName="WithComplexCSSValues",WithComplexCSSValues.__docgenInfo={description:"The label hint will not be shown if it is a complex CSS value. Some examples of complex CSS values\nin this context are CSS functions like `calc()`, `clamp()`, and `var()`.",displayName:"WithComplexCSSValues",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/font-size-picker/stories/index.tsx#WithComplexCSSValues"]={docgenInfo:WithComplexCSSValues.__docgenInfo,name:"WithComplexCSSValues",path:"packages/components/src/font-size-picker/stories/index.tsx#WithComplexCSSValues"})}catch(__react_docgen_typescript_loader_error){}}}]);