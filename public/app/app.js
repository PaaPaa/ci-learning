app = angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, $resource, jobs) {
    //$scope.test = "working!";
    //$scope.message = "This should be displayed";
    // $scope.jobs = [{
    //     title: "Sales Person",
    //     description: 'you will fight dragons'
    // }, {
    //     title: 'Accountant',
    //     description: 'you will fudge the books'
    // }];

    $scope.jobs = $resource('/api/jobs').query();
   
    
    $scope.submit = function(){
         var job = {title: $scope.title, description: $scope.description};
         jobs.save(job);
         $scope.jobs.push(job);
    }
});
