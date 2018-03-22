import '../../style/style.scss';

import com from '../component/com.js';

import './test.js';


class People {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name)
    }
}

var a = {
    year: 432
};
var b = {
    ...a,
    name: 'wq'
}