"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contactus",{

/***/ "./src/common/Map.tsx":
/*!****************************!*\
  !*** ./src/common/Map.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"400px\"\n};\nconst center = {\n    lat: -3.745,\n    lng: -38.523\n};\nfunction Map() {\n    _s();\n    const { isLoaded } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({\n        id: \"google-map-script\",\n        googleMapsApiKey: \"YOUR_API_KEY\"\n    });\n    const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const onLoad = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        // This is just an example of getting and using the map instance!!! don't just blindly copy!\n        const bounds = new window.google.maps.LatLngBounds(center);\n        map.fitBounds(bounds);\n        setMap(map);\n    }, []);\n    const onUnmount = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        setMap(null);\n    }, []);\n    return isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n        mapContainerStyle: containerStyle,\n        center: center,\n        zoom: 10,\n        onLoad: onLoad,\n        onUnmount: onUnmount,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"D:\\\\Web projects\\\\project\\\\src\\\\common\\\\Map.tsx\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(Map, \"sc/DS85Udqb0HC94DVNruSImuio=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader\n    ];\n});\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUI7QUFDMEM7QUFFbkUsTUFBTUcsaUJBQWlCO0lBQ3JCQyxPQUFPO0lBQ1BDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLFNBQVM7SUFDYkMsS0FBSyxDQUFDO0lBQ05DLEtBQUssQ0FBQztBQUNSO0FBRUEsU0FBU0M7O0lBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1Isc0VBQWNBLENBQUM7UUFDbENTLElBQUk7UUFDSkMsa0JBQWtCO0lBQ3BCO0lBRUEsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdkLHFEQUFjLENBQUM7SUFFckMsTUFBTWdCLFNBQVNoQix3REFBaUIsQ0FBQyxTQUFTa0IsU0FBU0wsR0FBTztRQUN4RCw0RkFBNEY7UUFDNUYsTUFBTU0sU0FBUyxJQUFJQyxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsWUFBWSxDQUFDakI7UUFDbkRPLElBQUlXLFNBQVMsQ0FBQ0w7UUFFZEwsT0FBT0Q7SUFDVCxHQUFHLEVBQUU7SUFFTCxNQUFNWSxZQUFZekIsd0RBQWlCLENBQUMsU0FBU2tCLFNBQVNMLEdBQU87UUFDM0RDLE9BQU87SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPSix5QkFDSCw4REFBQ1QsNkRBQVNBO1FBQ1J5QixtQkFBbUJ2QjtRQUNuQkcsUUFBUUE7UUFDUnFCLE1BQU07UUFDTlgsUUFBUUE7UUFDUlMsV0FBV0E7a0JBR1g7Ozs7OzZCQUVGO0FBQ047R0FoQ1NoQjs7UUFDY1Asa0VBQWNBOzs7S0FENUJPO0FBa0NULCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21tb24vTWFwLnRzeD9jNzY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdvb2dsZU1hcCwgdXNlSnNBcGlMb2FkZXIgfSBmcm9tICdAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xyXG4gIHdpZHRoOiAnMTAwJScsXHJcbiAgaGVpZ2h0OiAnNDAwcHgnXHJcbn07XHJcblxyXG5jb25zdCBjZW50ZXIgPSB7XHJcbiAgbGF0OiAtMy43NDUsXHJcbiAgbG5nOiAtMzguNTIzXHJcbn07XHJcblxyXG5mdW5jdGlvbiBNYXAoKSB7XHJcbiAgY29uc3QgeyBpc0xvYWRlZCB9ID0gdXNlSnNBcGlMb2FkZXIoe1xyXG4gICAgaWQ6ICdnb29nbGUtbWFwLXNjcmlwdCcsXHJcbiAgICBnb29nbGVNYXBzQXBpS2V5OiBcIllPVVJfQVBJX0tFWVwiXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IG9uTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIGNhbGxiYWNrKG1hcDphbnkpIHtcclxuICAgIC8vIFRoaXMgaXMganVzdCBhbiBleGFtcGxlIG9mIGdldHRpbmcgYW5kIHVzaW5nIHRoZSBtYXAgaW5zdGFuY2UhISEgZG9uJ3QganVzdCBibGluZGx5IGNvcHkhXHJcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyhjZW50ZXIpO1xyXG4gICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpO1xyXG5cclxuICAgIHNldE1hcChtYXApXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IG9uVW5tb3VudCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIGNhbGxiYWNrKG1hcDphbnkpIHtcclxuICAgIHNldE1hcChudWxsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gaXNMb2FkZWQgPyAoXHJcbiAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XHJcbiAgICAgICAgY2VudGVyPXtjZW50ZXJ9XHJcbiAgICAgICAgem9vbT17MTB9XHJcbiAgICAgICAgb25Mb2FkPXtvbkxvYWR9XHJcbiAgICAgICAgb25Vbm1vdW50PXtvblVubW91bnR9XHJcbiAgICAgID5cclxuICAgICAgICB7IC8qIENoaWxkIGNvbXBvbmVudHMsIHN1Y2ggYXMgbWFya2VycywgaW5mbyB3aW5kb3dzLCBldGMuICovIH1cclxuICAgICAgICA8PjwvPlxyXG4gICAgICA8L0dvb2dsZU1hcD5cclxuICApIDogPD48Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwIl0sIm5hbWVzIjpbIlJlYWN0IiwiR29vZ2xlTWFwIiwidXNlSnNBcGlMb2FkZXIiLCJjb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2VudGVyIiwibGF0IiwibG5nIiwiTWFwIiwiaXNMb2FkZWQiLCJpZCIsImdvb2dsZU1hcHNBcGlLZXkiLCJtYXAiLCJzZXRNYXAiLCJ1c2VTdGF0ZSIsIm9uTG9hZCIsInVzZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJib3VuZHMiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiTGF0TG5nQm91bmRzIiwiZml0Qm91bmRzIiwib25Vbm1vdW50IiwibWFwQ29udGFpbmVyU3R5bGUiLCJ6b29tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/Map.tsx\n"));

/***/ })

});