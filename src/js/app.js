var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.list = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/data.json';

        $http.get(file)
            .then(function(response) {
                $scope.list = response.data;

                var chartData = getChartData(response.data);
                setupChart(chartData);

                var chartDataBand = getChartDataBand(response.data);
                setupChartBand(chartDataBand);
                chart
            });
    };

    $scope.init();
});

myApp.filter('toDate', function() {
    return function(items) {
      return new Date(items);
    };
});