'use strict';

cs142App.controller('aboutController', ['$scope', '$routeParams', '$resource', '$location', '$anchorScroll',
  function ($scope, $routeParams, $resource, $location, $anchorScroll) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    

    $scope.getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };


    $scope.viewPhoto = function(user_id) {
        $location.path("/photos/" + user_id);
        console.log("/photos/" + user_id);
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