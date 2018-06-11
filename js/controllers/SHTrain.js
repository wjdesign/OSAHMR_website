/**
 * create by Wayne 2018/05
 */

'use strict';
var app = angular.module('myApp', []);

app.controller('SHTrainCtrl', function ($scope, $http) {

    // 版本號
    $scope.version = "?20180601";

    // 登入判斷
    $scope.authcheck = false;

    // 取得用戶IP
    $http.get("https://ipinfo.io/").then(function (response) {
        $scope.showIP = response.data.ip;
    });

    // 假資料區
    $scope.MsgMarquee = "本站目前正在維護中，造成您的不便請見諒。";
    $scope.SHTrainNews = [
        {
            'title':'釘槍不是玩具 請勿嬉戲',
            'downloadURL':'#',
            'date':'2016/01/18',
            'author':'安衛中心'
        },{
            'title':'廚房油煙太靠近 肺腺癌易上身',
            'downloadURL':'#',
            'date':'2016/01/18',
            'author':'安衛中心'
        },{
            'title':'職安新紀元面面俱到海報',
            'downloadURL':'#',
            'date':'2016/01/15',
            'author':'安衛中心'
        },{
            'title':'縱橫-第三十四期 – 增強抗壓能力 締造和諧職場(香港職健局)',
            'downloadURL':'#',
            'date':'2015/12/31',
            'author':'安衛中心'
        },{
            'title':'文職及專業服務業--第四十五期 – 工作間伸展運動 舒緩身心壓力(香港職健局)',
            'downloadURL':'#',
            'date':'2015/11/30',
            'author':'安衛中心'
        },{
            'title':'補助中小企業改善安全衛生設施及器具作業要點',
            'downloadURL':'#',
            'date':'2009/04/10',
            'author':'安衛中心'
        },{
            'title':'中小型製造業推行勞安工作的利基與困境',
            'downloadURL':'#',
            'date':'2009/03/12',
            'author':'安衛中心'
        },{
            'title':'九十七年度輔助中小企業改善安全衛生設施及器具作業要點',
            'downloadURL':'#',
            'date':'2008/04/16',
            'author':'安衛中心'
        },{
            'title':'九十七年度輔助中小企業改善安全衛生設施及器具作業要點申請表格',
            'downloadURL':'#',
            'date':'2008/04/16',
            'author':'安衛中心'
        },{
            'title':'潤泰營建集團安衛管理實務',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局屋頂作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局建築作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局營建地盤開挖作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局氣焊作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局營建機械作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局營建升降機作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局物料抬舉安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局起重吊掛作業之鋼纜吊索安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局營建開挖作業防止崩塌海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局營建作業防台安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局印刷作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局船艙維修作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        },{
            'title':'香港職安局房舍裝修作業安全海報',
            'downloadURL':'#',
            'date':'2008/04/11',
            'author':'安衛中心'
        }
    ];

    $scope.SHTrainPropagandas = [
        {
            'title':'墜落飛落危害_屋頂墜落預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_屋頂墜落預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_營造業常見危害預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_營造業常見危害預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'火災爆炸危害_危險物品製造處置場所火災爆炸危害預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'火災爆炸危害_危險物品製造處置場所火災爆炸危害預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'火災爆炸危害_瓦斯行為害危害預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'火災爆炸危害_瓦斯行為害危害預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'缺氧中毒危害_局限空間缺氧、中毒預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'缺氧中毒危害_局限空間缺氧、中毒預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_物料搬運危害預防_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_物料搬運危害預防_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_粉塵、有機溶劑、特定化學物質危害',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'感電危害_感電災害預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'感電危害_感電災害預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_噪音振動災害預防圖說',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_噪音振動控制工程圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_噪音振動控制工程圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'切割夾捲危害_機械捲夾衝壓預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'切割夾捲危害_機械捲夾衝壓預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'人因過勞_職業性手臂振動危害預防圖說_1',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'人因過勞_職業性手臂振動危害預防圖說_2',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'人因過勞_人因性危害預防摺頁-2015',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_化學品危害預防-2015',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_吊掛作業危害預防-2015',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_屋頂作業危害預防-2015',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_倒塌崩塌危害預防摺頁-2015',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_高架作業危害預防',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_跌倒/滑倒危害預防-2015',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_105年木材製品製造業危害預防圖說',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        }
    ];

    $scope.SHTrainSlogans = [
        {
            'title':'感電危害_小心觸電注意感電',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_注意天車小心墜落物',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_高架作業請繫安全帶',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'切割夾捲危害_捲入注意',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_進入工地請戴安全帽',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'切割夾捲危害_禁用手套',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'火災爆炸危害_嚴禁煙火小心易燃品',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_工安標語-三款',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_2015安衛標語-四款-在地扎根計畫印製',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'缺氧中毒危害_局限空間危害預防',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_施工架作業安全',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'感電危害_電器接線作業安全',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'感電危害_鋼構電焊作業安全',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_106年標語- 職安沒有靠運氣，危害預防最實際。',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_106年標語- 風險評估最重要，持續改善有牢靠。',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_106年標語- 機械選用有標章，勞工操作有保障。',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'其他_106年標語- 時時刻刻做職安，分分秒秒保平安。',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'感電危害_感電預防',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_墜落災害預防',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_營造防災宣導海報(一)',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_營造防災宣導海報(二)',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'墜落飛落危害_營造防災宣導海報(三)',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'切割夾捲危害_機械災害預防',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'火災爆炸危害_火災爆炸預防',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'模板作業安全',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'機械作業安全',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'釘槍正確使用方式',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'電梯直井吊料作業安全',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'拋棄式口罩正確配戴方式',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        },{
            'title':'物料吊運作業安全',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'安衛中心'
        }
    ];

    $scope.SHTrainTextBooks = [
        {
            'title':'一般勞工安全衛生教育訓練教材',
            'downloadURL':'#',
            'date':'2018/05/03',
            'author':'安衛中心'
        },{
            'title':'TOSHMS驗證解說宣導會',
            'downloadURL':'#',
            'date':'2015/08/05',
            'author':'勞動部職業安全衛生署'
        },{
            'title':'營造工地危害預防及安全管理',
            'downloadURL':'#',
            'date':'2015/08/05',
            'author':'勞動部職業安全衛生署'
        },{
            'title':'安全衛生危害辨識及自主管理制度建立(起重機作業安全防災宣導)',
            'downloadURL':'#',
            'date':'2015/07/20',
            'author':'勞動部職業安全衛生署'
        },{
            'title':'化學品評估及分級管理總說明',
            'downloadURL':'#',
            'date':'2015/05/26',
            'author':'勞動部職業安全衛生署'
        },{
            'title':'風險評估參考例',
            'downloadURL':'#',
            'date':'2012/12/10',
            'author':'安衛中心'
        },{
            'title':'101年度在地扎根輔導員職前訓練教材-臨廠輔導實務與案例分享(講師:林明煇)',
            'downloadURL':'#',
            'date':'2012/05/07',
            'author':'安衛中心'
        },{
            'title':'101年度在地扎根輔導員職前訓練教材-安衛管理實務與輔導分享(講師:王敢明)',
            'downloadURL':'#',
            'date':'2012/05/07',
            'author':'安衛中心'
        },{
            'title':'101年度在地扎根輔導員職前訓練教材-計畫說明、輔導流程與行政配合注意事項、專業輔導表單說明',
            'downloadURL':'#',
            'date':'2012/05/07',
            'author':'安衛中心'
        },{
            'title':'101年度在地扎根輔導員職前訓練教材-工廠安全衛生危害預防實務(北區)(講師:劉銘池)',
            'downloadURL':'#',
            'date':'2012/05/07',
            'author':'安衛中心'
        },{
            'title':'101年度在地扎根輔導員職前訓練教材-臨廠輔導實務經驗分享(北區)(講師:劉清順)',
            'downloadURL':'#',
            'date':'2012/05/07',
            'author':'安衛中心'
        },{
            'title':'新安衛扎根種子訓練_營造業',
            'downloadURL':'#',
            'date':'2011/05/11',
            'author':'安衛中心'
        },{
            'title':'新安衛扎根種子訓練_製造業',
            'downloadURL':'#',
            'date':'2011/05/11',
            'author':'安衛中心'
        }
    ];

    $scope.SHTrainVideos = [
        {
            'title':'一般安全衛生教育訓練 e-learning 教材',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2018/04/16',
            'author':'財團法人安全衛生技術中心'
        },{
            'title':'缺氧中毒危害_局限空間作業',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'缺氧中毒危害_電鍍槽清理作業災害預防宣導',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'勞動部職業安全衛生署'
        },{
            'title':'墜落飛落危害_屋頂作業安全-案例篇',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'火災爆炸危害_防爆電器安全',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'人因過勞_職場過勞預防之推動策略與實務',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'人因過勞_人因性危害預防',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'其他_堆高機作業安全',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'其他_危險性機械安全檢查管理',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'墜落飛落危害_死神任務之救命一繫',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'墜落飛落危害_使用高危險性機械從事高空作業安全',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'感電危害_冷氣裝修安全作業宣導影片',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'墜落飛落危害_superbee工安宣導短片01-屋頂作業',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'墜落飛落危害_superbee工安宣導短片02-施工架',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'缺氧中毒危害_superbee工安宣導短片03-危險氣體',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'切割夾捲危害_職場常見危害-輸送帶',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'墜落飛落危害_職場常見危害-屋頂作業',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'墜落飛落危害_職場常見危害-合梯作業',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'墜落飛落危害_職場常見危害-平台作業',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'切割夾捲危害_職場常見危害-CNC車床',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        },{
            'title':'死神任務3 天降危機',
            'onlineURL':'#',
            'downloadURL':'#',
            'date':'2017/07/20',
            'author':'新北市政府勞工局勞動檢查處'
        }
    ];

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