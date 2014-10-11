var todoApp = angular.module('todoApp', ['classy']);

todoApp.service('Todo', ['$http', '$q', function($http, $q){
  var todo = {};
  todo.get = function(){
    var defer = $q.defer();
    $http.get('/tasks').success(function(data){
      defer.resolve(JSON.parse(JSON.parse(data)));
    });
    return defer.promise;
  };

  todo.update = function(todos){
    var defer = $q.defer();
    $http.post('/tasks', todos).success(function(data){
      defer.resolve(data);
    });
    return defer.promise;
  };
  return todo;
}]);