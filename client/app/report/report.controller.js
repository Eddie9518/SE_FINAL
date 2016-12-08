'use strict';

angular.module('policeApp')
    .controller('ReportCtrl', [ '$scope', 'transfer', function ($scope, transfer) {

        $scope.tabSelected = 0;
        $scope.twoDisabled = true;
        $scope.threeDisabled = true;
        $scope.fourDisabled = true;

        $scope.id = "";
        $scope.recordNum = "";
        $scope.myPlate = "";
        $scope.otherPlate = "";
        $scope.place = "";
        $scope.date = new Date();
        $scope.time = "";
        $scope.otherBehavior = "";
        $scope.myBehavior = "";
        $scope.speed = "";
        $scope.road= "";
        $scope.sign = "";
        $scope.broken = "";
        $scope.otherCond = "";
        $scope.photo = "";
        $scope.notes = "";

        $scope.stepOne = function() {
            $scope.tabSelected = 0;
        };

        $scope.stepTwo = function() {
            $scope.tabSelected = 1;
            $scope.twoDisabled = false;
        };

        $scope.stepThree = function() {
            $scope.tabSelected = 2;
            $scope.threeDisabled = false;
        };

        $scope.stepFour = function() {
            $scope.tabSelected = 3;
            $scope.fourDisabled = false;
        };

        $scope.done = function() {
            var settings = {
                id: $scope.id,
                recordNum: $scope.recordNum,
                identity: {
                    myPlate: $scope.myPlate,
                    otherPlate: $scope.otherPlate
                },
                condition: {
                    date: $scope.date,
                    time: $scope.time,
                    place: $scope.place,
                    otherBehavior: $scope.otherBehavior,
                    myBehavior: $scope.myBehavior,
                    speed: $scope.speed
                },
                extFactor: {
                    road: $scope.road,
                    sign: $scope.sign
                },
                result: {
                    broken: $scope.broken,
                    otherCond: $scope.otherCond
                },
                otherData: {
                    photo: $scope.photo,
                    notes: $scope.notes
                }
            };

            console.log('done');
            console.log(settings);
            $scope.goApp('home');
        };

        $scope.goApp = function (targetPage) {
            transfer.go(targetPage);
        };

    }]);