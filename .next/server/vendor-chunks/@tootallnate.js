"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tootallnate";
exports.ids = ["vendor-chunks/@tootallnate"];
exports.modules = {

/***/ "(ssr)/./node_modules/@tootallnate/once/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@tootallnate/once/dist/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nfunction once(emitter, name, { signal } = {}) {\n    return new Promise((resolve, reject)=>{\n        function cleanup() {\n            signal === null || signal === void 0 ? void 0 : signal.removeEventListener(\"abort\", cleanup);\n            emitter.removeListener(name, onEvent);\n            emitter.removeListener(\"error\", onError);\n        }\n        function onEvent(...args) {\n            cleanup();\n            resolve(args);\n        }\n        function onError(err) {\n            cleanup();\n            reject(err);\n        }\n        signal === null || signal === void 0 ? void 0 : signal.addEventListener(\"abort\", cleanup);\n        emitter.on(name, onEvent);\n        emitter.on(\"error\", onError);\n    });\n}\nexports[\"default\"] = once; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHRvb3RhbGxuYXRlL29uY2UvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFBRUcsT0FBTztBQUFLLENBQUMsRUFBQztBQUM3RCxTQUFTQyxLQUFLQyxPQUFPLEVBQUVDLElBQUksRUFBRSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQ3pCLFNBQVNDO1lBQ0xKLFdBQVcsUUFBUUEsV0FBVyxLQUFLLElBQUksS0FBSyxJQUFJQSxPQUFPSyxtQkFBbUIsQ0FBQyxTQUFTRDtZQUNwRk4sUUFBUVEsY0FBYyxDQUFDUCxNQUFNUTtZQUM3QlQsUUFBUVEsY0FBYyxDQUFDLFNBQVNFO1FBQ3BDO1FBQ0EsU0FBU0QsUUFBUSxHQUFHRSxJQUFJO1lBQ3BCTDtZQUNBRixRQUFRTztRQUNaO1FBQ0EsU0FBU0QsUUFBUUUsR0FBRztZQUNoQk47WUFDQUQsT0FBT087UUFDWDtRQUNBVixXQUFXLFFBQVFBLFdBQVcsS0FBSyxJQUFJLEtBQUssSUFBSUEsT0FBT1csZ0JBQWdCLENBQUMsU0FBU1A7UUFDakZOLFFBQVFjLEVBQUUsQ0FBQ2IsTUFBTVE7UUFDakJULFFBQVFjLEVBQUUsQ0FBQyxTQUFTSjtJQUN4QjtBQUNKO0FBQ0FiLGtCQUFlLEdBQUdFLE1BQ2xCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpZ21hLy4vbm9kZV9tb2R1bGVzL0B0b290YWxsbmF0ZS9vbmNlL2Rpc3QvaW5kZXguanM/NTIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSwgeyBzaWduYWwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIHNpZ25hbCA9PT0gbnVsbCB8fCBzaWduYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGNsZWFudXApO1xuICAgICAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCBvbkV2ZW50KTtcbiAgICAgICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25FdmVudCguLi5hcmdzKSB7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyKSB7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBzaWduYWwgPT09IG51bGwgfHwgc2lnbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBjbGVhbnVwKTtcbiAgICAgICAgZW1pdHRlci5vbihuYW1lLCBvbkV2ZW50KTtcbiAgICAgICAgZW1pdHRlci5vbignZXJyb3InLCBvbkVycm9yKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG9uY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJvbmNlIiwiZW1pdHRlciIsIm5hbWUiLCJzaWduYWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNsZWFudXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJvbkV2ZW50Iiwib25FcnJvciIsImFyZ3MiLCJlcnIiLCJhZGRFdmVudExpc3RlbmVyIiwib24iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@tootallnate/once/dist/index.js\n");

/***/ })

};
;