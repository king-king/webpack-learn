var alert = function () {
    console.log('ok');
}

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
        return 200;
    }
}

var num = function () {
    var s = new Student();
    console.log(s.num());
};
export {
    alert,
    num
}