todoApp.classy.controller({
  name: "TodoController",

  inject: ['$scope'],

  init: function(){
    this.$.todos = [];
  },

  addTodo: function(){
    this.$.todos.push({text:this.$.todoText, done:false});
    this.$.todoText = '';
  },

  remaining: function(){
    return this._countRemaining();
  },
  
  _countRemaining: function(){
    var count = 0;
    angular.forEach(this.$.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  },
  
  archive: function(){
    var oldTodos = this.$.todos;
    this.$.todos = [];
    angular.forEach(oldTodos, function(todo){
      if(!todo.done) this.$.todos.push(todo);
    });
  }
});