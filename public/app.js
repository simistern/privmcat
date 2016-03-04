var tutorApp = angular.module('tutorApp', ['ngRoute']);

// ROUTING ===============================================
tutorApp.config(function($routeProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })
        .when('/check', {
            templateUrl: 'page-checkin.html',
            controller: 'checkinController'
        })
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
        })
});

tutorApp.directive("scroll", function ($window) {
  console.log("chesapeke");
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
          if (this.pageYOffset >= 250) {
             scope.boolChangeClass = true;
             //console.log('Scrolled below header.');
           } else {
             scope.boolChangeClass = false;
          //   console.log('Header is in view.');
           }
          scope.$apply();
        });
    };
});

// CONTROLLERS ============================================
// home page controller
tutorApp.controller('mainController', function($scope) {
    $scope.pageClass = 'homewrapper';
    $scope.quotesList = [
   {
      "dateCreated":1455652894363,
      "clientType":"CTO at MARS Building",
      "id": 0,
      "username":"chris",
      "message": "Thanks to Kaneys workout plan i'm the envy of all my fran"
   },
   {
      "dateCreated":1455652902318,
      "clientType":"VP Sales at SalesForce",
      "id": 1,
      "username":"simon",
      "message": "I used to support donald trump, but after this private tutoring session, I'm a changed man!"
   },
   {
     "dateCreated":1455652902318,
      "clientType":"CEO of Oracle Corp",
      "id":2,
      "username":"red",
      "message": "Spending money on this was probably the only smart thing I've ever done in my miserable life"
   }
 ];

});

// about page controller
tutorApp.controller('checkinController', function($scope) {
    $scope.pageClass = 'checkinwrapper';
});


/*app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 250) {
               $scope.boolChangeClass = true;
               console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
}); */
