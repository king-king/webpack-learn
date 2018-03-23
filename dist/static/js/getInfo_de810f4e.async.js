webpackJsonp([0],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.num = exports.alert = undefined;

var _possibleConstructorReturn2 = __webpack_require__(73);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(74);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alert = function alert() {
    console.log('ok');
};

var People = function () {
    function People(name) {
        (0, _classCallCheck3.default)(this, People);

        this.name = name;
    }

    (0, _createClass3.default)(People, [{
        key: 'name',
        value: function name() {
            return this.name;
        }
    }]);
    return People;
}();

var Student = function (_People) {
    (0, _inherits3.default)(Student, _People);

    function Student() {
        (0, _classCallCheck3.default)(this, Student);
        return (0, _possibleConstructorReturn3.default)(this, (Student.__proto__ || Object.getPrototypeOf(Student)).apply(this, arguments));
    }

    (0, _createClass3.default)(Student, [{
        key: 'num',
        value: function num() {
            return 200;
        }
    }]);
    return Student;
}(People);

var num = function num() {
    var s = new Student();
    console.log(s.num());
};
exports.alert = alert;
exports.num = num;

/***/ })

});
//# sourceMappingURL=getInfo_de810f4e.async.js.map