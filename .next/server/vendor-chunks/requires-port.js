"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/requires-port";
exports.ids = ["vendor-chunks/requires-port"];
exports.modules = {

/***/ "(ssr)/./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n/**\n * Check if we're required to add a port number.\n *\n * @see https://url.spec.whatwg.org/#default-port\n * @param {Number|String} port Port number we need to check\n * @param {String} protocol Protocol we need to check against.\n * @returns {Boolean} Is it a default port for the given protocol\n * @api private\n */ module.exports = function required(port, protocol) {\n    protocol = protocol.split(\":\")[0];\n    port = +port;\n    if (!port) return false;\n    switch(protocol){\n        case \"http\":\n        case \"ws\":\n            return port !== 80;\n        case \"https\":\n        case \"wss\":\n            return port !== 443;\n        case \"ftp\":\n            return port !== 21;\n        case \"gopher\":\n            return port !== 70;\n        case \"file\":\n            return false;\n    }\n    return port !== 0;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVxdWlyZXMtcG9ydC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7OztDQVFDLEdBQ0RBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxTQUFTQyxJQUFJLEVBQUVDLFFBQVE7SUFDL0NBLFdBQVdBLFNBQVNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNqQ0YsT0FBTyxDQUFDQTtJQUVSLElBQUksQ0FBQ0EsTUFBTSxPQUFPO0lBRWxCLE9BQVFDO1FBQ04sS0FBSztRQUNMLEtBQUs7WUFDTCxPQUFPRCxTQUFTO1FBRWhCLEtBQUs7UUFDTCxLQUFLO1lBQ0wsT0FBT0EsU0FBUztRQUVoQixLQUFLO1lBQ0wsT0FBT0EsU0FBUztRQUVoQixLQUFLO1lBQ0wsT0FBT0EsU0FBUztRQUVoQixLQUFLO1lBQ0wsT0FBTztJQUNUO0lBRUEsT0FBT0EsU0FBUztBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RpZ21hLy4vbm9kZV9tb2R1bGVzL3JlcXVpcmVzLXBvcnQvaW5kZXguanM/MzgzNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UncmUgcmVxdWlyZWQgdG8gYWRkIGEgcG9ydCBudW1iZXIuXG4gKlxuICogQHNlZSBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RlZmF1bHQtcG9ydFxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBwb3J0IFBvcnQgbnVtYmVyIHdlIG5lZWQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCB3ZSBuZWVkIHRvIGNoZWNrIGFnYWluc3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSXMgaXQgYSBkZWZhdWx0IHBvcnQgZm9yIHRoZSBnaXZlbiBwcm90b2NvbFxuICogQGFwaSBwcml2YXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVxdWlyZWQocG9ydCwgcHJvdG9jb2wpIHtcbiAgcHJvdG9jb2wgPSBwcm90b2NvbC5zcGxpdCgnOicpWzBdO1xuICBwb3J0ID0gK3BvcnQ7XG5cbiAgaWYgKCFwb3J0KSByZXR1cm4gZmFsc2U7XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgJ2h0dHAnOlxuICAgIGNhc2UgJ3dzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gODA7XG5cbiAgICBjYXNlICdodHRwcyc6XG4gICAgY2FzZSAnd3NzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNDQzO1xuXG4gICAgY2FzZSAnZnRwJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gMjE7XG5cbiAgICBjYXNlICdnb3BoZXInOlxuICAgIHJldHVybiBwb3J0ICE9PSA3MDtcblxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBwb3J0ICE9PSAwO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZWQiLCJwb3J0IiwicHJvdG9jb2wiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/requires-port/index.js\n");

/***/ })

};
;