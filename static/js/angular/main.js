import angular from 'angular';

import echart from './echarts.min.js';

console.log(echart)

let main = angular.module('main', []);
main.controller('ctrl', function ($scope) {
    $scope.slogan = '你好';
});



// var app = angular.module('main', [])
//     .controller('ctrl', function ($scope) {
//         $scope.slogan = 'Welcome!';
//     });
// angular.bootstrap(document, ['main']);