// alert("hello from client");

// if you use the name of a module it will just call that
// to create one instead of using one, you have to pass in the dependencies
// as a parameter (an array of other module names)

// If you have no dependencies you need to put in an empty []
// or you will get an error "myworld cannot be found"
var app = angular.module("myWorld", []);

// everytime you use a controller that function is instantiated
app.controller("MyCtrl", function($scope){
    console.log("I am a controller");
    $scope.name = "professor";
    console.log($scope);
});

// the way that data is passed to a controller is through scope
// there's ab object in angular to grab a window object, change the http request, etc

// when the angular callback function myCtrl is called, it will pass us a 
// scope object. We can pass data to the scope object and that data is 
// available via the view.

// two way data binding - you're changing something client and server side.