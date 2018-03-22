webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(4);

var _com = __webpack_require__(5);

var _com2 = _interopRequireDefault(_com);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = function () {
    function People(name) {
        _classCallCheck(this, People);

        this.name = name;
    }

    _createClass(People, [{
        key: 'say',
        value: function say() {
            console.log(this.name);
        }
    }]);

    return People;
}();

var a = {
    year: 432
};
var b = _extends({}, a, {
    name: 'wq'
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var div = document.createElement('div');
div.classList.add('com');
div.innerHTML = 'com';
document.querySelector('#root').appendChild(div);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

console.log('okok');

var aaa = {
    haha: 'yew'
};
var bbb = _extends({}, aaa, {
    name: 'jack'
});
var b = [1, 2, 3, 4];
b.map(function (x) {
    console.log(x);
});

/***/ })
],[3]);
//# sourceMappingURL=index_538950e2.js.map