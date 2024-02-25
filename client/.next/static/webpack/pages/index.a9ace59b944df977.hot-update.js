"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/entities/block-list/queries.ts":
/*!********************************************!*\
  !*** ./src/entities/block-list/queries.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAddBlockItemMutation: function() { return /* binding */ useAddBlockItemMutation; },\n/* harmony export */   useListQuery: function() { return /* binding */ useListQuery; },\n/* harmony export */   useRemoveBlockItemMutation: function() { return /* binding */ useRemoveBlockItemMutation; }\n/* harmony export */ });\n/* harmony import */ var _shared_api_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/api/generated */ \"./src/shared/api/generated.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/query-core/build/modern/utils.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n\n\nconst blockListKey = [\n    \"block-list\"\n];\nfunction useListQuery(param) {\n    let { q } = param;\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: blockListKey.concat([\n            {\n                q\n            }\n        ]),\n        queryFn: ()=>(0,_shared_api_generated__WEBPACK_IMPORTED_MODULE_0__.blockListControllerGetList)({\n                q\n            }),\n        placeholderData: _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.keepPreviousData\n    });\n}\nfunction useAddBlockItemMutation() {\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: _shared_api_generated__WEBPACK_IMPORTED_MODULE_0__.blockListControllerAddBlockItem,\n        async onSettled () {}\n    });\n}\nfunction useRemoveBlockItemMutation() {\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: _shared_api_generated__WEBPACK_IMPORTED_MODULE_0__.blockListControllerRemoveBlockItem,\n        async onSettled () {\n            await queryClient.invalidateQueries(blockListKey);\n        }\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvYmxvY2stbGlzdC9xdWVyaWVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSWdDO0FBQ2dFO0FBRWhHLE1BQU1PLGVBQWU7SUFBQztDQUFhO0FBRTVCLFNBQVNDLGFBQWEsS0FBcUI7UUFBckIsRUFBRUMsQ0FBQyxFQUFrQixHQUFyQjtJQUMzQixPQUFPSiwrREFBUUEsQ0FBQztRQUNkSyxVQUFVSCxhQUFhSSxNQUFNLENBQUM7WUFBQztnQkFBRUY7WUFBRTtTQUFFO1FBQ3JDRyxTQUFTLElBQU1YLGlGQUEwQkEsQ0FBQztnQkFBRVE7WUFBRTtRQUM5Q0ksaUJBQWlCVixtRUFBZ0JBO0lBQ25DO0FBQ0Y7QUFFTyxTQUFTVztJQUNkLE1BQU1DLGNBQWNULHFFQUFjQTtJQUNsQyxPQUFPRixrRUFBV0EsQ0FBQztRQUNqQlksWUFBWWhCLGtGQUErQkE7UUFDM0MsTUFBTWlCLGNBRU47SUFDRjtBQUNGO0FBRU8sU0FBU0M7SUFDZCxNQUFNSCxjQUFjVCxxRUFBY0E7SUFDbEMsT0FBT0Ysa0VBQVdBLENBQUM7UUFDakJZLFlBQVlkLHFGQUFrQ0E7UUFDOUMsTUFBTWU7WUFDRixNQUFNRixZQUFZSSxpQkFBaUIsQ0FBQ1o7UUFDeEM7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9lbnRpdGllcy9ibG9jay1saXN0L3F1ZXJpZXMudHM/MGVkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGJsb2NrTGlzdENvbnRyb2xsZXJBZGRCbG9ja0l0ZW0sXHJcbiAgYmxvY2tMaXN0Q29udHJvbGxlckdldExpc3QsXHJcbiAgYmxvY2tMaXN0Q29udHJvbGxlclJlbW92ZUJsb2NrSXRlbSxcclxufSBmcm9tIFwiQC9zaGFyZWQvYXBpL2dlbmVyYXRlZFwiO1xyXG5pbXBvcnQgeyBrZWVwUHJldmlvdXNEYXRhLCB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5cclxuY29uc3QgYmxvY2tMaXN0S2V5ID0gW1wiYmxvY2stbGlzdFwiXSBhcyBhbnk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGlzdFF1ZXJ5KHsgcSB9OiB7IHE/OiBzdHJpbmcgfSkge1xyXG4gIHJldHVybiB1c2VRdWVyeSh7XHJcbiAgICBxdWVyeUtleTogYmxvY2tMaXN0S2V5LmNvbmNhdChbeyBxIH1dKSxcclxuICAgIHF1ZXJ5Rm46ICgpID0+IGJsb2NrTGlzdENvbnRyb2xsZXJHZXRMaXN0KHsgcSB9KSxcclxuICAgIHBsYWNlaG9sZGVyRGF0YToga2VlcFByZXZpb3VzRGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkQmxvY2tJdGVtTXV0YXRpb24oKSB7XHJcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gIHJldHVybiB1c2VNdXRhdGlvbih7XHJcbiAgICBtdXRhdGlvbkZuOiBibG9ja0xpc3RDb250cm9sbGVyQWRkQmxvY2tJdGVtLFxyXG4gICAgYXN5bmMgb25TZXR0bGVkKCkge1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlbW92ZUJsb2NrSXRlbU11dGF0aW9uKCkge1xyXG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICByZXR1cm4gdXNlTXV0YXRpb24oe1xyXG4gICAgbXV0YXRpb25GbjogYmxvY2tMaXN0Q29udHJvbGxlclJlbW92ZUJsb2NrSXRlbSxcclxuICAgIGFzeW5jIG9uU2V0dGxlZCgpe1xyXG4gICAgICAgIGF3YWl0IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKGJsb2NrTGlzdEtleSlcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiYmxvY2tMaXN0Q29udHJvbGxlckFkZEJsb2NrSXRlbSIsImJsb2NrTGlzdENvbnRyb2xsZXJHZXRMaXN0IiwiYmxvY2tMaXN0Q29udHJvbGxlclJlbW92ZUJsb2NrSXRlbSIsImtlZXBQcmV2aW91c0RhdGEiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJibG9ja0xpc3RLZXkiLCJ1c2VMaXN0UXVlcnkiLCJxIiwicXVlcnlLZXkiLCJjb25jYXQiLCJxdWVyeUZuIiwicGxhY2Vob2xkZXJEYXRhIiwidXNlQWRkQmxvY2tJdGVtTXV0YXRpb24iLCJxdWVyeUNsaWVudCIsIm11dGF0aW9uRm4iLCJvblNldHRsZWQiLCJ1c2VSZW1vdmVCbG9ja0l0ZW1NdXRhdGlvbiIsImludmFsaWRhdGVRdWVyaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entities/block-list/queries.ts\n"));

/***/ })

});