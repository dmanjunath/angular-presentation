todoApp.classy.controller({
  name: "TodoController",

  inject: ['$scope', '$http', 'Todo'],

  init: function(){
    var that = this;
    that.$.todos = [];
    that.Todo.get().then(function(todos){
      that.$.todos = todos;
    });

    that.$.$watch('todos', function(newVal, oldVal){
      if(newVal !== oldVal){
        that.Todo.update(that.$.todos);
      }
    }, true);
  },

  addTodo: function(){
    this.$.todos.push({text:this.$.todoText, done:false});
    console.log(this.$.todos);
    this.$.todoText = '';
    this.Todo.update(this.$.todos);
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
    var that = this;
    var oldTodos = this.$.todos;
    this.$.todos = [];
    angular.forEach(oldTodos, function(todo){
      if(!todo.done) that.$.todos.push(todo);
    });
  }
});