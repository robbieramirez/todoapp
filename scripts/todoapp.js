
var app = angular.module('todoApp', []);

app.controller('TodoListController', function($scope) {


// List Functions
  $scope.todoList = [
    {text:'learn angular', completed:false, date:new Date()},
    {text:'build an angular app', completed:false, date:new Date()}
  ];

    $scope.clearList = function() {
      $scope.todoList = [];
    }

// Item Functions
    $scope.addItem = function() {
      $scope.todoList.push({
        text:$scope.listItem, completed:false, date:new Date()
      });
      $scope.listItem = '';
    };



    $scope.clearItem = function(index) {
      $scope.todoList.splice(index, 1);
    }

  });
