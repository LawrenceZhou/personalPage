'use strict';

cs142App.controller('portfolioController', ['$scope', '$routeParams', '$resource', '$location', '$rootScope', '$http', '$mdDialog', '$anchorScroll',
  function($scope, $routeParams, $resource, $location, $rootScope, $http, $mdDialog, $anchorScroll) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
     $scope.goBack = function() {
            $location.path("/Portfolio");
        };
     $scope.viewProjectHK = function() {
            $location.path("/Portfolio/Hovering-Kanariya");
        };
     $scope.viewProjectRoTH = function() {
            $location.path("/Portfolio/Resonance-of-The-Heart");
        };
     $scope.viewProjectGNODC = function() {
            $location.path("/Portfolio/GNODC");
        };
      $scope.viewProjectM = function() {
            $location.path("/Portfolio/MentTruIns");
        };
        $scope.viewProjectP = function() {
            $location.path("/Portfolio/PiARno");
        };
        $scope.viewProjectPPAP = function() {
            $location.path("/Portfolio/ARGH!-PPAP");
        };
        $scope.viewProjectCSS = function() {
            $location.path("/Portfolio/CSS-Fantasy");
        };
        $scope.viewProjectTDDOES = function() {
            $location.path("/Portfolio/The-Design-And-Development-of-An-Online-Education-System");
        };
        $scope.viewProjectC = function() {
            $location.path("/Portfolio/Calmmuter");
        };
        $scope.viewProjectPT = function() {
            $location.path("/Portfolio/PalazzoTour");
        };
        $scope.viewProjectHF = function() {
            $location.path("/Portfolio/HiFive");
        };
        $scope.viewProjectEJ = function() {
            $location.path("/ECG-Jukebeat");
        };

         var init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty
        //alert(location.path());
        $location.hash('top');
        $anchorScroll();
};
// and fire it after definition
init();


    
  }]);
