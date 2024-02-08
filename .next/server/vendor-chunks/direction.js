"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction";
exports.ids = ["vendor-chunks/direction"];
exports.modules = {

/***/ "(ssr)/./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nmodule.exports = direction;\nvar RTL = \"֑-߿יִ-﷽ﹰ-ﻼ\";\nvar LTR = \"A-Za-z\\xc0-\\xd6\\xd8-\\xf6\" + \"\\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜\" + \"︀-﹯﻽-￿\";\nvar rtl = new RegExp(\"^[^\" + LTR + \"]*[\" + RTL + \"]\");\nvar ltr = new RegExp(\"^[^\" + RTL + \"]*[\" + LTR + \"]\");\nfunction direction(value) {\n    value = String(value || \"\");\n    if (rtl.test(value)) {\n        return \"rtl\";\n    }\n    if (ltr.test(value)) {\n        return \"ltr\";\n    }\n    return \"neutral\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLE1BQ0YsNkJBQ0EscUJBQ0E7QUFFRixJQUFJQyxNQUFNLElBQUlDLE9BQU8sUUFBUUYsTUFBTSxRQUFRRCxNQUFNO0FBQ2pELElBQUlJLE1BQU0sSUFBSUQsT0FBTyxRQUFRSCxNQUFNLFFBQVFDLE1BQU07QUFFakQsU0FBU0YsVUFBVU0sS0FBSztJQUN0QkEsUUFBUUMsT0FBT0QsU0FBUztJQUV4QixJQUFJSCxJQUFJSyxJQUFJLENBQUNGLFFBQVE7UUFDbkIsT0FBTztJQUNUO0lBRUEsSUFBSUQsSUFBSUcsSUFBSSxDQUFDRixRQUFRO1FBQ25CLE9BQU87SUFDVDtJQUVBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3RpZ21hLy4vbm9kZV9tb2R1bGVzL2RpcmVjdGlvbi9pbmRleC5qcz9mNTJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpcmVjdGlvblxuXG52YXIgUlRMID0gJ1xcdTA1OTEtXFx1MDdGRlxcdUZCMUQtXFx1RkRGRFxcdUZFNzAtXFx1RkVGQydcbnZhciBMVFIgPVxuICAnQS1aYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2JyArXG4gICdcXHUwMEY4LVxcdTAyQjhcXHUwMzAwLVxcdTA1OTBcXHUwODAwLVxcdTFGRkZcXHUyMDBFXFx1MkMwMC1cXHVGQjFDJyArXG4gICdcXHVGRTAwLVxcdUZFNkZcXHVGRUZELVxcdUZGRkYnXG5cbnZhciBydGwgPSBuZXcgUmVnRXhwKCdeW14nICsgTFRSICsgJ10qWycgKyBSVEwgKyAnXScpXG52YXIgbHRyID0gbmV3IFJlZ0V4cCgnXlteJyArIFJUTCArICddKlsnICsgTFRSICsgJ10nKVxuXG5mdW5jdGlvbiBkaXJlY3Rpb24odmFsdWUpIHtcbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUgfHwgJycpXG5cbiAgaWYgKHJ0bC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAncnRsJ1xuICB9XG5cbiAgaWYgKGx0ci50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnbHRyJ1xuICB9XG5cbiAgcmV0dXJuICduZXV0cmFsJ1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkaXJlY3Rpb24iLCJSVEwiLCJMVFIiLCJydGwiLCJSZWdFeHAiLCJsdHIiLCJ2YWx1ZSIsIlN0cmluZyIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/direction/index.js\n");

/***/ })

};
;