// alert("hello from client");

// if you use the name of a module it will just call that
// to create one instead of using one, you have to pass in the dependencies
// as a parameter (an array of other module names)

// If you have no dependencies you need to put in an empty []
// or you will get an error "myworld cannot be found"
var app = angular.module("myWorld", []);