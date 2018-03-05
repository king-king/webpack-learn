import '../../style/login.scss';

document.querySelector('.login').onclick = function () {
    import ( /* webpackChunkName: "getInfo" */ '../async/getInfo').then(function (getInfo) {
        getInfo.alert();
        getInfo.num();
    });
};


class People {
    constructor(name) {
        this.name = name;
    }
    name() {
        return this.name;
    }
}

class Student extends People {
    num() {
        return 100;
    }
}

var stu = new Student();
console.log(stu.num());