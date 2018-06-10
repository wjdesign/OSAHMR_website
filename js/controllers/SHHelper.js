/**
 * create by Wayne 2018/05
 */

'use strict';
var app = angular.module('myApp', []);

app.controller('SHHelperCtrl', function ($scope, $http) {

    $scope.authcheck = false;

    // 取得用戶IP
    $http.get("https://ipinfo.io/").then(function (response) {
        $scope.showIP = response.data.ip;
    });

    // 假資料區
    $scope.MsgMarquee = "本站目前正在維護中，造成您的不便請見諒。";

    $scope.submitForgetPWD = function () {
        alert("已寄出驗證信至您的信箱");
        $("#forgetPWD").modal('hide');
    };

    $scope.checkDownload = function () {
        if (confirm("版權係勞動部職業安全衛生署所有，僅供家族成員內部教育訓練使用，未經許可，不得外流或做其他使用。")) {
            window.open("#");
        }
    };

});