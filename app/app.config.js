'use strict';

angular.module('encuestas')
      .config(['$locationProvider', '$routeProvider', 
          function config($locationProvider, $routeProvider) {
      
            $locationProvider.hashPrefix('!');
            $routeProvider
              .when('/inicio/', {
                templateUrl: 'app/views/home.xhtml'
              })

              /*.when('/pagoEnLinea', {
                  templateUrl: 'app/core/views/pagoEnLinea.xhtml',
                  secure: false
              })*/

              .otherwise('/inicio');
          }
      ]).run(['$rootScope','$location','$window',
          function($rootScope, Idle,$location ,$window) {
              $rootScope.$on("$routeChangeStart", function (event, next, current) {
              });

              $rootScope.$on('$locationChangeStart', function(event, next, current){
                  //we assume if a location change but thet next and the current are equals
                  // is because the user press f5 button.
                  /*if(next === current){
                    var index = next.indexOf("inicio");
                    if(index == -1){
                      var ccam = "";
                      var urlParam = "";
                      if(ccam != null && ccam != ""){
                        urlParam = "/" + ccam;
                      }
                      $location.path("/inicio");
                    }
                  }*/
              });
          }
      ]);
