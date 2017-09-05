// controller and injecting Angular's $scope
millyApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

millyApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

millyApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});