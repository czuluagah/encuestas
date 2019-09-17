
angular.
module('encuestas').
config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
      when('/inicio', {
        templateUrl: '/inicio/inicio.html'
      }).
      otherwise('/inicio');
  }
]);
