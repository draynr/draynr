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

/***/ "./components/animated-background.js":
/*!*******************************************!*\
  !*** ./components/animated-background.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles-slim */ \"./node_modules/tsparticles-slim/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n // loads tsparticles-slim\n // loads tsparticles\n\n// tsParticles Repository: https://github.com/matteobruni/tsparticles\n// tsParticles Website: https://particles.js.org/\nvar ParticlesComponent = function(props) {\n    _s();\n    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static\n    var options = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function() {\n        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color\n        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html\n        return {\n            background: {\n                color: \"whiteAlpha.500\"\n            },\n            fullScreen: {\n                enable: true,\n                zIndex: -1\n            },\n            interactivity: {\n                events: {\n                    onClick: {\n                        enable: true,\n                        mode: \"push\"\n                    },\n                    onHover: {\n                        enable: true,\n                        mode: \"repulse\"\n                    }\n                },\n                modes: {\n                    push: {\n                        quantity: 1\n                    },\n                    repulse: {\n                        distance: 200\n                    }\n                }\n            },\n            collsions: {\n                enable: true\n            },\n            particles: {\n                color: {\n                    value: \"yellow\"\n                },\n                links: {\n                    enable: true,\n                    distance: 200\n                },\n                move: {\n                    enable: true,\n                    speed: {\n                        min: 1,\n                        max: 6\n                    }\n                },\n                opacity: {\n                    value: {\n                        min: 0.1,\n                        max: 0.25\n                    }\n                },\n                number: {\n                    density: {\n                        enable: true\n                    },\n                    value: 10\n                },\n                size: {\n                    value: {\n                        min: 1,\n                        max: 2\n                    }\n                }\n            },\n            detectRetina: true\n        };\n    }, []);\n    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static\n    var particlesInit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n            return C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(main);\n                        _ctx.next = 3;\n                        return (0,tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__.loadSlim)(main);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: props.id,\n        init: particlesInit,\n        options: options\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dangj\\\\website\\\\components\\\\animated-background.js\",\n        lineNumber: 84,\n        columnNumber: 10\n    }, _this);\n};\n_s(ParticlesComponent, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n_c = ParticlesComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParticlesComponent);\nvar _c;\n$RefreshReg$(_c, \"ParticlesComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGVkLWJhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBMEM7QUFDRSxDQUFDLHlCQUF5QjtBQUMvQixDQUFDLG9CQUFvQjtBQUNmO0FBRTdDLHFFQUFxRTtBQUNyRSxpREFBaUQ7QUFDakQsSUFBTUssa0JBQWtCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUNwQyxrR0FBa0c7SUFFbEcsSUFBTUMsT0FBTyxHQUFHSCw4Q0FBTyxDQUFDLFdBQU07UUFDNUIsdUpBQXVKO1FBQ3ZKLG9IQUFvSDtRQUNwSCxPQUFPO1lBQ0xJLFVBQVUsRUFBRTtnQkFDVkMsS0FBSyxFQUFFLGdCQUFnQjthQUN4QjtZQUNEQyxVQUFVLEVBQUU7Z0JBQ1ZDLE1BQU0sRUFBRSxJQUFJO2dCQUNaQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ1g7WUFDREMsYUFBYSxFQUFFO2dCQUNiQyxNQUFNLEVBQUU7b0JBQ05DLE9BQU8sRUFBRTt3QkFDUEosTUFBTSxFQUFFLElBQUk7d0JBQ1pLLElBQUksRUFBRSxNQUFNO3FCQUNiO29CQUNEQyxPQUFPLEVBQUU7d0JBQ1BOLE1BQU0sRUFBRSxJQUFJO3dCQUNaSyxJQUFJLEVBQUUsU0FBUztxQkFDaEI7aUJBQ0Y7Z0JBQ0RFLEtBQUssRUFBRTtvQkFDTEMsSUFBSSxFQUFFO3dCQUNKQyxRQUFRLEVBQUUsQ0FBQztxQkFDWjtvQkFDREMsT0FBTyxFQUFFO3dCQUNQQyxRQUFRLEVBQUUsR0FBRztxQkFDZDtpQkFDRjthQUNGO1lBQ0RDLFNBQVMsRUFBRTtnQkFDVFosTUFBTSxFQUFFLElBQUk7YUFDYjtZQUVEYSxTQUFTLEVBQUU7Z0JBQ1RmLEtBQUssRUFBRTtvQkFBRWdCLEtBQUssRUFBRSxRQUFRO2lCQUFFO2dCQUMxQkMsS0FBSyxFQUFFO29CQUNMZixNQUFNLEVBQUUsSUFBSTtvQkFDWlcsUUFBUSxFQUFFLEdBQUc7aUJBQ2Q7Z0JBQ0RLLElBQUksRUFBRTtvQkFDSmhCLE1BQU0sRUFBRSxJQUFJO29CQUNaaUIsS0FBSyxFQUFFO3dCQUFFQyxHQUFHLEVBQUUsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7cUJBQUU7aUJBQzFCO2dCQUNEQyxPQUFPLEVBQUU7b0JBQ1BOLEtBQUssRUFBRTt3QkFBRUksR0FBRyxFQUFFLEdBQUc7d0JBQUVDLEdBQUcsRUFBRSxJQUFJO3FCQUFFO2lCQUMvQjtnQkFDREUsTUFBTSxFQUFFO29CQUNOQyxPQUFPLEVBQUU7d0JBQ1B0QixNQUFNLEVBQUUsSUFBSTtxQkFDYjtvQkFDRGMsS0FBSyxFQUFFLEVBQUU7aUJBQ1Y7Z0JBQ0RTLElBQUksRUFBRTtvQkFDSlQsS0FBSyxFQUFFO3dCQUFFSSxHQUFHLEVBQUUsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7cUJBQUU7aUJBQzFCO2FBQ0Y7WUFDREssWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDO0lBRU4sbUdBQW1HO0lBQ25HLElBQU1DLGFBQWE7bUJBQUcsc09BQU9DLElBQUksRUFBSzs7Ozt3QkFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQzs7K0JBS1pwQywwREFBUSxDQUFDb0MsSUFBSSxDQUFDOzs7Ozs7U0FDckI7d0JBUEtELGFBQWEsQ0FBVUMsSUFBSTs7O09BT2hDO0lBRUQsMElBQTBJO0lBQzFJLHFCQUFPLDhEQUFDckMseURBQVM7UUFBQ3dDLEVBQUUsRUFBRWxDLEtBQUssQ0FBQ2tDLEVBQUU7UUFBRUMsSUFBSSxFQUFFTCxhQUFhO1FBQUU3QixPQUFPLEVBQUVBLE9BQU87Ozs7O2FBQUksQ0FBQztDQUMzRTtHQTdFS0Ysa0JBQWtCO0FBQWxCQSxLQUFBQSxrQkFBa0I7QUErRXhCLCtEQUFlQSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGVkLWJhY2tncm91bmQuanM/MTY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC10c3BhcnRpY2xlc1wiO1xyXG5pbXBvcnQgeyBsb2FkU2xpbSB9IGZyb20gXCJ0c3BhcnRpY2xlcy1zbGltXCI7IC8vIGxvYWRzIHRzcGFydGljbGVzLXNsaW1cclxuaW1wb3J0IHsgbG9hZEZ1bGwgfSBmcm9tIFwidHNwYXJ0aWNsZXNcIjsgLy8gbG9hZHMgdHNwYXJ0aWNsZXNcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIHRzUGFydGljbGVzIFJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZW9icnVuaS90c3BhcnRpY2xlc1xyXG4vLyB0c1BhcnRpY2xlcyBXZWJzaXRlOiBodHRwczovL3BhcnRpY2xlcy5qcy5vcmcvXHJcbmNvbnN0IFBhcnRpY2xlc0NvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHVzaW5nIHVzZU1lbW8gaXMgbm90IG1hbmRhdG9yeSwgYnV0IGl0J3MgcmVjb21tZW5kZWQgc2luY2UgdGhpcyB2YWx1ZSBjYW4gYmUgbWVtb2l6ZWQgaWYgc3RhdGljXHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIC8vIHVzaW5nIGFuIGVtcHR5IG9wdGlvbnMgb2JqZWN0IHdpbGwgbG9hZCB0aGUgZGVmYXVsdCBvcHRpb25zLCB3aGljaCBhcmUgc3RhdGljIHBhcnRpY2xlcyB3aXRoIG5vIGJhY2tncm91bmQgYW5kIDNweCByYWRpdXMsIG9wYWNpdHkgMTAwJSwgd2hpdGUgY29sb3JcclxuICAgIC8vIGFsbCBvcHRpb25zIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL3BhcnRpY2xlcy5qcy5vcmcvZG9jcy9pbnRlcmZhY2VzL09wdGlvbnNfSW50ZXJmYWNlc19JT3B0aW9ucy5JT3B0aW9ucy5odG1sXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVBbHBoYS41MDBcIiwgLy8gdGhpcyBzZXRzIGEgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGNhbnZhc1xyXG4gICAgICB9LFxyXG4gICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIHdpbGwgbWFrZSB0aGUgY2FudmFzIGZpbGwgdGhlIGVudGlyZSBzY3JlZW4sIGl0J3MgZW5hYmxlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgekluZGV4OiAtMSwgLy8gdGhpcyBpcyB0aGUgei1pbmRleCB2YWx1ZSB1c2VkIHdoZW4gdGhlIGZ1bGxTY3JlZW4gaXMgZW5hYmxlZCwgaXQncyAwIGJ5IGRlZmF1bHRcclxuICAgICAgfSxcclxuICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgb25DbGljazoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsIC8vIGVuYWJsZXMgdGhlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgICAgIG1vZGU6IFwicHVzaFwiLCAvLyBhZGRzIHRoZSBwYXJ0aWNsZXMgb24gY2xpY2tcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbkhvdmVyOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSwgLy8gZW5hYmxlcyB0aGUgaG92ZXIgZXZlbnRcclxuICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsIC8vIG1ha2UgdGhlIHBhcnRpY2xlcyBydW4gYXdheSBmcm9tIHRoZSBjdXJzb3JcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICBxdWFudGl0eTogMSwgLy8gbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBhZGQgb24gY2xpY2tcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsIC8vIGRpc3RhbmNlIG9mIHRoZSBwYXJ0aWNsZXMgZnJvbSB0aGUgY3Vyc29yXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbGxzaW9uczoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBcInllbGxvd1wiIH0sXHJcbiAgICAgICAgbGlua3M6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSwgLy8gZW5hYmxpbmcgdGhpcyB3aWxsIG1ha2UgcGFydGljbGVzIGxpbmtlZCB0b2dldGhlclxyXG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCwgLy8gbWF4aW11bSBkaXN0YW5jZSBmb3IgbGlua2luZyB0aGUgcGFydGljbGVzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsIC8vIGVuYWJsaW5nIHRoaXMgd2lsbCBtYWtlIHBhcnRpY2xlcyBtb3ZlIGluIHRoZSBjYW52YXNcclxuICAgICAgICAgIHNwZWVkOiB7IG1pbjogMSwgbWF4OiA2IH0sIC8vIHVzaW5nIGEgcmFuZ2UgaW4gc3BlZWQgdmFsdWUgd2lsbCBtYWtlIHBhcnRpY2xlcyBtb3ZlIGluIGEgcmFuZG9tIHNwZWVkIGJldHdlZW4gbWluL21heCB2YWx1ZXMsIGVhY2ggcGFydGljbGVzIGhhdmUgaXRzIG93biB2YWx1ZSwgaXQgd29uJ3QgY2hhbmdlIGluIHRpbWUgYnkgZGVmYXVsdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgdmFsdWU6IHsgbWluOiAwLjEsIG1heDogMC4yNSB9LCAvLyB1c2luZyBhIGRpZmZlcmVudCBvcGFjaXR5LCB0byBoYXZlIHNvbWUgc2VtaXRyYW5zcGFyZW50IGVmZmVjdHNcclxuICAgICAgICB9LFxyXG4gICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmFsdWU6IDEwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgdmFsdWU6IHsgbWluOiAxLCBtYXg6IDIgfSwgLy8gbGV0J3MgcmFuZG9taXplIHRoZSBwYXJ0aWNsZXMgc2l6ZSBhIGJpdFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGRldGVjdFJldGluYTogdHJ1ZSxcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyB1c2VDYWxsYmFjayBpcyBub3QgbWFuZGF0b3J5LCBidXQgaXQncyByZWNvbW1lbmRlZCBzaW5jZSB0aGlzIGNhbGxiYWNrIGNhbiBiZSBtZW1vaXplZCBpZiBzdGF0aWNcclxuICBjb25zdCBwYXJ0aWNsZXNJbml0ID0gYXN5bmMgKG1haW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1haW4pO1xyXG5cclxuICAgIC8vIHlvdSBjYW4gaW5pdGlhbGl6ZSB0aGUgdHNQYXJ0aWNsZXMgaW5zdGFuY2UgKG1haW4pIGhlcmUsIGFkZGluZyBjdXN0b20gc2hhcGVzIG9yIHByZXNldHNcclxuICAgIC8vIHRoaXMgbG9hZHMgdGhlIHRzcGFydGljbGVzIHBhY2thZ2UgYnVuZGxlLCBpdCdzIHRoZSBlYXNpZXN0IG1ldGhvZCBmb3IgZ2V0dGluZyBldmVyeXRoaW5nIHJlYWR5XHJcbiAgICAvLyBzdGFydGluZyBmcm9tIHYyIHlvdSBjYW4gYWRkIG9ubHkgdGhlIGZlYXR1cmVzIHlvdSBuZWVkIHJlZHVjaW5nIHRoZSBidW5kbGUgc2l6ZVxyXG4gICAgYXdhaXQgbG9hZFNsaW0obWFpbik7XHJcbiAgfTtcclxuXHJcbiAgLy8gc2V0dGluZyBhbiBpZCBjYW4gYmUgdXNlZnVsIGZvciBpZGVudGlmeWluZyB0aGUgcmlnaHQgcGFydGljbGVzIGNvbXBvbmVudCwgdGhpcyBpcyB1c2VmdWwgZm9yIG11bHRpcGxlIGluc3RhbmNlcyBvciByZXVzYWJsZSBjb21wb25lbnRzXHJcbiAgcmV0dXJuIDxQYXJ0aWNsZXMgaWQ9e3Byb3BzLmlkfSBpbml0PXtwYXJ0aWNsZXNJbml0fSBvcHRpb25zPXtvcHRpb25zfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlc0NvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlBhcnRpY2xlcyIsImxvYWRTbGltIiwibG9hZEZ1bGwiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJQYXJ0aWNsZXNDb21wb25lbnQiLCJwcm9wcyIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmdWxsU2NyZWVuIiwiZW5hYmxlIiwiekluZGV4IiwiaW50ZXJhY3Rpdml0eSIsImV2ZW50cyIsIm9uQ2xpY2siLCJtb2RlIiwib25Ib3ZlciIsIm1vZGVzIiwicHVzaCIsInF1YW50aXR5IiwicmVwdWxzZSIsImRpc3RhbmNlIiwiY29sbHNpb25zIiwicGFydGljbGVzIiwidmFsdWUiLCJsaW5rcyIsIm1vdmUiLCJzcGVlZCIsIm1pbiIsIm1heCIsIm9wYWNpdHkiLCJudW1iZXIiLCJkZW5zaXR5Iiwic2l6ZSIsImRldGVjdFJldGluYSIsInBhcnRpY2xlc0luaXQiLCJtYWluIiwiY29uc29sZSIsImxvZyIsImlkIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animated-background.js\n"));

/***/ })

});