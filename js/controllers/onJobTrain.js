/**
 * create by Wayne 2018/05
 */

'use strict';
var app = angular.module('myApp', []);

app.controller('onJobTrainCtrl', function ($scope, $http) {

    $scope.authcheck = false;

    // 取得用戶IP
    $http.get("https://ipinfo.io/").then(function (response) {
        $scope.showIP = response.data.ip;
    });

    $scope.url = "./onJobTrainEdit.html";
    $scope.editShowName = "";

    // 假資料區
    $scope.MsgMarquee = "本站目前正在維護中，造成您的不便請見諒。";
    $scope.allTrain = [
        {
            'unit':'局本部',
            'name':'張芳綺',
            'profession':'急救人員',
            'trainDate':'2019/08/19',
            'trainTime':'3',
            'lessonTime':'0',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'林佳樺',
            'profession':'急救人員',
            'trainDate':'2019/08/19',
            'trainTime':'3',
            'lessonTime':'5',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'安婉禎-甲安',
            'profession':'勞工安全衛生管理人員',
            'trainDate':'2019/11/28',
            'trainTime':'6',
            'lessonTime':'0',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'安婉禎-防火管理人',
            'profession':'勞工健康服務護理人員',
            'trainDate':'2017/06/29',
            'trainTime':'6',
            'lessonTime':'0',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'安婉禎-乙員',
            'profession':'勞工安全衛生管理人員',
            'trainDate':'2017/12/01',
            'trainTime':'6',
            'lessonTime':'0',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'安婉禎-甲衛',
            'profession':'勞工安全衛生管理人員',
            'trainDate':'2019/08/09',
            'trainTime':'6',
            'lessonTime':'0',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'王廉棠',
            'profession':'急救人員',
            'trainDate':'2015/11/07',
            'trainTime':'3',
            'lessonTime':'0',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'王廉棠',
            'profession':'勞工安全衛生管理人員',
            'trainDate':'2016/12/02',
            'trainTime':'6',
            'lessonTime':'12',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'李秉諭(已調環衛科)',
            'profession':'急救人員',
            'trainDate':'2016/12/02',
            'trainTime':'3',
            'lessonTime':'0',
            'certificate':'#'
        },{
            'unit':'局本部',
            'name':'林佳樺',
            'profession':'勞工安全衛生管理人員',
            'trainDate':'2017/07/09',
            'trainTime':'6',
            'lessonTime':'12',
            'certificate':'#'
        }
    ];


    // 相關連結假資料
    var CountConnectImg = function () {
        var ConnectImgNum = 8;
        $scope.ConnectUrl = [];
        for (var i = 1; i <= ConnectImgNum; i++) {
            $scope.ConnectUrl.push({'img': 'images/connectImg/0' + i + '.png', 'url': 'https://www.osha.gov.tw/'})
        }
    }();

    $scope.submitForgetPWD = function () {
        alert("已寄出驗證信至您的信箱");
        $("#forgetPWD").modal('hide');
    }

    $scope.checkRegister = function () {
        if (confirm("確定送出申請嗎?")) {
            $scope.registerStep = 3;
        }
    }

});