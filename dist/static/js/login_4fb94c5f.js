webpackJsonp([5],{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(9);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.querySelector('.login').onclick = function () {
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 16)).then(function (getInfo) {
        getInfo.alert();
        getInfo.num();
    });
};

var People = function () {
    function People(name) {
        _classCallCheck(this, People);

        this.name = name;
    }

    _createClass(People, [{
        key: 'name',
        value: function name() {
            return this.name;
        }
    }]);

    return People;
}();

var Student = function (_People) {
    _inherits(Student, _People);

    function Student() {
        _classCallCheck(this, Student);

        return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).apply(this, arguments));
    }

    _createClass(Student, [{
        key: 'num',
        value: function num() {
            return 100;
        }
    }]);

    return Student;
}(People);

var stu = new Student();
console.log(stu.num());

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[8]);
//# sourceMappingURL=login_4fb94c5f.js.map