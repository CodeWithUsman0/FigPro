"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/browser-process-hrtime";
exports.ids = ["vendor-chunks/browser-process-hrtime"];
exports.modules = {

/***/ "(ssr)/./node_modules/browser-process-hrtime/index.js":
/*!******************************************************!*\
  !*** ./node_modules/browser-process-hrtime/index.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nmodule.exports = process.hrtime || hrtime;\n// polyfil for window.performance.now\nvar performance = global.performance || {};\nvar performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {\n    return new Date().getTime();\n};\n// generate timestamp or delta\n// see http://nodejs.org/api/process.html#process_process_hrtime\nfunction hrtime(previousTimestamp) {\n    var clocktime = performanceNow.call(performance) * 1e-3;\n    var seconds = Math.floor(clocktime);\n    var nanoseconds = Math.floor(clocktime % 1 * 1e9);\n    if (previousTimestamp) {\n        seconds = seconds - previousTimestamp[0];\n        nanoseconds = nanoseconds - previousTimestamp[1];\n        if (nanoseconds < 0) {\n            seconds--;\n            nanoseconds += 1e9;\n        }\n    }\n    return [\n        seconds,\n        nanoseconds\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wcm9jZXNzLWhydGltZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQUFBLE9BQU9DLE9BQU8sR0FBR0MsUUFBUUMsTUFBTSxJQUFJQTtBQUVuQyxxQ0FBcUM7QUFDckMsSUFBSUMsY0FBY0MsT0FBT0QsV0FBVyxJQUFJLENBQUM7QUFDekMsSUFBSUUsaUJBQ0ZGLFlBQVlHLEdBQUcsSUFDZkgsWUFBWUksTUFBTSxJQUNsQkosWUFBWUssS0FBSyxJQUNqQkwsWUFBWU0sSUFBSSxJQUNoQk4sWUFBWU8sU0FBUyxJQUNyQjtJQUFZLE9BQU8sSUFBS0MsT0FBUUMsT0FBTztBQUFHO0FBRTVDLDhCQUE4QjtBQUM5QixnRUFBZ0U7QUFDaEUsU0FBU1YsT0FBT1csaUJBQWlCO0lBQy9CLElBQUlDLFlBQVlULGVBQWVVLElBQUksQ0FBQ1osZUFBYTtJQUNqRCxJQUFJYSxVQUFVQyxLQUFLQyxLQUFLLENBQUNKO0lBQ3pCLElBQUlLLGNBQWNGLEtBQUtDLEtBQUssQ0FBQyxZQUFXLElBQUc7SUFDM0MsSUFBSUwsbUJBQW1CO1FBQ3JCRyxVQUFVQSxVQUFVSCxpQkFBaUIsQ0FBQyxFQUFFO1FBQ3hDTSxjQUFjQSxjQUFjTixpQkFBaUIsQ0FBQyxFQUFFO1FBQ2hELElBQUlNLGNBQVksR0FBRztZQUNqQkg7WUFDQUcsZUFBZTtRQUNqQjtJQUNGO0lBQ0EsT0FBTztRQUFDSDtRQUFRRztLQUFZO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlnbWEvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wcm9jZXNzLWhydGltZS9pbmRleC5qcz8wZDg3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzcy5ocnRpbWUgfHwgaHJ0aW1lXG5cbi8vIHBvbHlmaWwgZm9yIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbnZhciBwZXJmb3JtYW5jZSA9IGdsb2JhbC5wZXJmb3JtYW5jZSB8fCB7fVxudmFyIHBlcmZvcm1hbmNlTm93ID1cbiAgcGVyZm9ybWFuY2Uubm93ICAgICAgICB8fFxuICBwZXJmb3JtYW5jZS5tb3pOb3cgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1zTm93ICAgICAgfHxcbiAgcGVyZm9ybWFuY2Uub05vdyAgICAgICB8fFxuICBwZXJmb3JtYW5jZS53ZWJraXROb3cgIHx8XG4gIGZ1bmN0aW9uKCl7IHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIH1cblxuLy8gZ2VuZXJhdGUgdGltZXN0YW1wIG9yIGRlbHRhXG4vLyBzZWUgaHR0cDovL25vZGVqcy5vcmcvYXBpL3Byb2Nlc3MuaHRtbCNwcm9jZXNzX3Byb2Nlc3NfaHJ0aW1lXG5mdW5jdGlvbiBocnRpbWUocHJldmlvdXNUaW1lc3RhbXApe1xuICB2YXIgY2xvY2t0aW1lID0gcGVyZm9ybWFuY2VOb3cuY2FsbChwZXJmb3JtYW5jZSkqMWUtM1xuICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoY2xvY2t0aW1lKVxuICB2YXIgbmFub3NlY29uZHMgPSBNYXRoLmZsb29yKChjbG9ja3RpbWUlMSkqMWU5KVxuICBpZiAocHJldmlvdXNUaW1lc3RhbXApIHtcbiAgICBzZWNvbmRzID0gc2Vjb25kcyAtIHByZXZpb3VzVGltZXN0YW1wWzBdXG4gICAgbmFub3NlY29uZHMgPSBuYW5vc2Vjb25kcyAtIHByZXZpb3VzVGltZXN0YW1wWzFdXG4gICAgaWYgKG5hbm9zZWNvbmRzPDApIHtcbiAgICAgIHNlY29uZHMtLVxuICAgICAgbmFub3NlY29uZHMgKz0gMWU5XG4gICAgfVxuICB9XG4gIHJldHVybiBbc2Vjb25kcyxuYW5vc2Vjb25kc11cbn0iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInByb2Nlc3MiLCJocnRpbWUiLCJwZXJmb3JtYW5jZSIsImdsb2JhbCIsInBlcmZvcm1hbmNlTm93Iiwibm93IiwibW96Tm93IiwibXNOb3ciLCJvTm93Iiwid2Via2l0Tm93IiwiRGF0ZSIsImdldFRpbWUiLCJwcmV2aW91c1RpbWVzdGFtcCIsImNsb2NrdGltZSIsImNhbGwiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibmFub3NlY29uZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/browser-process-hrtime/index.js\n");

/***/ })

};
;