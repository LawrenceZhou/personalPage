'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial', 'ngResource']);

cs142App.config(['$routeProvider', '$mdThemingProvider', '$anchorScrollProvider', 
    function ($routeProvider, $mdThemingProvider, $anchorScrollProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('amber')
        .dark();

        

        $routeProvider.
            when('/About', {
                templateUrl: 'components/about/aboutTemplate.html',
                controller: 'aboutController'
            }).
            when('/Bio', {
                templateUrl: 'components/bio/bioTemplate.html',
                controller: 'bioController'
            }).
            when('/Portfolio', {
                templateUrl: 'components/portfolio/portfolioTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/Hovering-Kanariya', {
                templateUrl: 'components/portfolio/HoveringKanariyaTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/Resonance-of-The-Heart', {
                templateUrl: 'components/portfolio/ResonanceofTheHeartTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/GNODC', {
                templateUrl: 'components/portfolio/GNODCTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/MentTruIns', {
                templateUrl: 'components/portfolio/MentTruInsTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/PiARno', {
                templateUrl: 'components/portfolio/PiARnoTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/ARGH!-PPAP', {
                templateUrl: 'components/portfolio/ARGH!PPAPTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/CSS-Fantasy', {
                templateUrl: 'components/portfolio/CSSFantasyTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/The-Design-And-Development-of-An-Online-Education-System', {
                templateUrl: 'components/portfolio/TheDesignAndDevelopmentofAnOnlineEducationSystemTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/Calmmuter', {
                templateUrl: 'components/portfolio/CalmmuterTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/PalazzoTour', {
                templateUrl: 'components/portfolio/PalazzoTourTemplate.html',
                controller: 'portfolioController'
            }).
            when('/Portfolio/HiFive', {
                templateUrl: 'components/portfolio/HiFiveTemplate.html',
                controller: 'portfolioController'
            }).
            when('/ECG-Jukebeat', {
                templateUrl: 'components/portfolio/ECGJukebeatTemplate.html',
                controller: 'portfolioController'
            }).
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            when('/login-register', {
                templateUrl: 'components/login-register/login-registerTemplate.html',
                controller: 'LoginRegisterController'
            }).
            otherwise({
                redirectTo: '/About'
            });
    }]);

cs142App.controller('MainController', ['$scope', '$resource', '$window', '$location', '$rootScope', '$http', '$document',
    function ($scope, $resource, $window, $location, $rootScope, $http, $document) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.toolBar = '';
        //console.log("changed", $scope.isLoggedIn);
        $scope.isLoggedIn = true;
    
    }]);

cs142App.run(function($rootScope, $route, $location,  $anchorScroll, $routeParams, $window){
   //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
   //bind in induvidual controllers.

   $rootScope.$on('$locationChangeSuccess', function() {
        $rootScope.actualLocation = $location.path();
        $window.scrollTo(0,0)
    });      
});

