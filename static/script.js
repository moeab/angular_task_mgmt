var app = angular.module('taskMgmt', []);

app.factory('taskFactory', function(){
	var tasks = [
		{name : 'Eat Lunch', priority : "HIGH", deadline :  new Date().toDateString(), created : new Date().toDateString()},
		{name : 'Get Black Belt', priority : "HIGH", deadline :  new Date().toDateString(), created : new Date().toDateString()},
		{name : 'Play video games', priority : "MEDUIM", deadline :  new Date().toDateString(), created : new Date().toDateString()}
	]
	var factory = {};

	factory.getTasks = function(callback){
		callback(tasks)
	}
	return factory;
})

app.controller('taskController', function($scope, taskFactory){
	$scope.tasks = [];
	taskFactory.getTasks(function(data){
		$scope.tasks = data;
	})
	$scope.newTask = []
	$scope.priorities = ['LOW', 'MEDIUM', 'HIGH'];
	$scope.priority = $scope.priorities[0];
	$scope.addTask = function(){
		if ($scope.deadline != null && $scope.name != null){
			$scope.newTask = {name : $scope.name, priority : $scope.priority, deadline : $scope.deadline.toDateString(), created : new Date().toDateString()}
			$scope.tasks.push($scope.newTask);
			$scope.error = '';
			$scope.name = '';
			$scope.deadline = '';
		} else {
			$scope.error = 'All fields are required';
		}
	}
	$scope.removeTask = function(task){
		$scope.tasks.splice($scope.tasks.indexOf(task), 1);
	}
})