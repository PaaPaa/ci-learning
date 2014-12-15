angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    //$scope.test = "working!";
    //$scope.message = "This should be displayed";
    $scope.jobs = [{
        title: "Sales Person",
        description: 'you will fight dragons'
    }, {
        title: 'Accountant',
        description: 'you will fudge the books'
    }];

});