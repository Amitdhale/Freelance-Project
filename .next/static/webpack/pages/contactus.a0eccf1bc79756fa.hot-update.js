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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Map() {\n    _s();\n    const containerStyle = {\n        width: \"400px\",\n        height: \"400px\"\n    };\n    const center = {\n        lat: -3.745,\n        lng: -38.523\n    };\n    const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const onLoad = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        // This is just an example of getting and using the map instance!!! don't just blindly copy!\n        const bounds = new window.google.maps.LatLngBounds(center);\n        map.fitBounds(bounds);\n        setMap(map);\n    }, []);\n    const onUnmount = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n        setMap(null);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n            mapContainerStyle: containerStyle,\n            center: center,\n            zoom: 10,\n            onLoad: onLoad,\n            onUnmount: onUnmount,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        }, void 0, false, {\n            fileName: \"D:\\\\Web projects\\\\project\\\\src\\\\common\\\\Map.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Web projects\\\\project\\\\src\\\\common\\\\Map.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Map, \"cOX+qz8P8Qlgqf5uFzYTRAoc4/c=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUI7QUFDMEM7QUFHbkUsU0FBU0U7O0lBQ0wsTUFBTUMsaUJBQWlCO1FBQ25CQyxPQUFPO1FBQ1BDLFFBQVE7SUFDVjtJQUVBLE1BQU1DLFNBQVM7UUFDYkMsS0FBSyxDQUFDO1FBQ05DLEtBQUssQ0FBQztJQUNSO0lBQ0EsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdWLHFEQUFjLENBQUM7SUFFekMsTUFBTVksU0FBU1osd0RBQWlCLENBQUMsU0FBU2MsU0FBU0wsR0FBRztRQUNwRCw0RkFBNEY7UUFDNUYsTUFBTU0sU0FBUyxJQUFJQyxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsWUFBWSxDQUFDYjtRQUNuREcsSUFBSVcsU0FBUyxDQUFDTDtRQUVkTCxPQUFPRDtJQUNULEdBQUcsRUFBRTtJQUVMLE1BQU1ZLFlBQVlyQix3REFBaUIsQ0FBQyxTQUFTYyxTQUFTTCxHQUFHO1FBQ3ZEQyxPQUFPO0lBQ1QsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNZO2tCQUNHLDRFQUFDckIsNkRBQVNBO1lBQ1ZzQixtQkFBbUJwQjtZQUNuQkcsUUFBUUE7WUFDUmtCLE1BQU07WUFDTlosUUFBUUE7WUFDUlMsV0FBV0E7c0JBR1g7Ozs7Ozs7Ozs7O0FBSVI7R0FyQ1NuQjtLQUFBQTtBQXVDVCwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tbW9uL01hcC50c3g/Yzc2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdvb2dsZU1hcCwgdXNlSnNBcGlMb2FkZXIgfSBmcm9tICdAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpJztcclxuXHJcblxyXG5mdW5jdGlvbiBNYXAoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogJzQwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc0MDBweCdcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGNlbnRlciA9IHtcclxuICAgICAgICBsYXQ6IC0zLjc0NSxcclxuICAgICAgICBsbmc6IC0zOC41MjNcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgW21hcCwgc2V0TWFwXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IG9uTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIGNhbGxiYWNrKG1hcCkge1xyXG4gICAgLy8gVGhpcyBpcyBqdXN0IGFuIGV4YW1wbGUgb2YgZ2V0dGluZyBhbmQgdXNpbmcgdGhlIG1hcCBpbnN0YW5jZSEhISBkb24ndCBqdXN0IGJsaW5kbHkgY29weSFcclxuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKGNlbnRlcik7XHJcbiAgICBtYXAuZml0Qm91bmRzKGJvdW5kcyk7XHJcblxyXG4gICAgc2V0TWFwKG1hcClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgb25Vbm1vdW50ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XHJcbiAgICBzZXRNYXAobnVsbClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e2NvbnRhaW5lclN0eWxlfVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIHpvb209ezEwfVxyXG4gICAgICAgIG9uTG9hZD17b25Mb2FkfVxyXG4gICAgICAgIG9uVW5tb3VudD17b25Vbm1vdW50fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyAvKiBDaGlsZCBjb21wb25lbnRzLCBzdWNoIGFzIG1hcmtlcnMsIGluZm8gd2luZG93cywgZXRjLiAqLyB9XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcCJdLCJuYW1lcyI6WyJSZWFjdCIsIkdvb2dsZU1hcCIsIk1hcCIsImNvbnRhaW5lclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJtYXAiLCJzZXRNYXAiLCJ1c2VTdGF0ZSIsIm9uTG9hZCIsInVzZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJib3VuZHMiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiTGF0TG5nQm91bmRzIiwiZml0Qm91bmRzIiwib25Vbm1vdW50IiwiZGl2IiwibWFwQ29udGFpbmVyU3R5bGUiLCJ6b29tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/Map.tsx\n"));

/***/ })

});