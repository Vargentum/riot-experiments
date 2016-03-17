riot.tag2('span', '{opts.q > 1 ? opts.plural : opts.single}', '', 'riot-tag="plural"', function(opts) {
});
riot.tag2('todo-v2', '<header> <input autofocus onkeyup="{handleInput}"> <button onclick="{toggleAll}" class="toggle-all">toggle/untoggle</button> </header> <ul class="todo-list"> <li riot-tag="todo-task" each="{item, i in opts.todos}" index="{i}" name="{item.name}" completed="{completed}"></li> </ul> <footer> <p> <plural if="{opts.todos.length}" q="{opts.todos.length}" single="item" plural="items"></plural>left </p> <button onclick="{clearCompleted}">Clear completed</button> </footer>', '', '', function(opts) {
});
riot.tag2('todo-task', '<input type="checkbox" value="{opts.completed}" onchange="{setStatus}"> <p if="{!isEdited}">{opts.name}</p> <input if="{isEdited}" type="text" value="{opts.name}" onkeyup="{edit}"> <button onclick="{remove}" class="todo-remove">Remove</button>', '', 'class="f-box f-align--2-1"', function(opts) {
});

riot.tag2('todo', '<h2>Observable todo app</h2> <todo-list todos="{this.todos}"></todo-list> <todo-create></todo-create>', '', '', function(opts) {
this.todos = [];

this.on('add', (function(_this) {
  return function(todo) {
    _this.todos.push(todo);
    return _this.update();
  };
})(this));

this.on('remove', (function(_this) {
  return function(idx) {
    _this.todos.splice(idx, 1);
    return _this.update();
  };
})(this));

this.on('clear', (function(_this) {
  return function() {
    _this.todos = [];
    return _this.update();
  };
})(this));
});
riot.tag2('todo-list', '<todo-item each="{opts.todos}" onclick="{parent.remove}" name="{name}"></todo-item>', '', '', function(opts) {
this.remove = (function(_this) {
  return function(e) {
    var idx;
    idx = _this.opts.todos.indexOf(e.item);
    return _this.parent.trigger('remove', idx);
  };
})(this);
});
riot.tag2('todo-item', '<p>{opts.name}</p>', '', '', function(opts) {
});
riot.tag2('todo-create', '<form onsubmit="{add}"> <input type="text" name="tname"> <input type="submit" value="Add Todo"> <button onclick="{clear}">Clear all</button> </form>', '', '', function(opts) {
this.clear = (function(_this) {
  return function(e) {
    return _this.parent.trigger('clear');
  };
})(this);

this.add = (function(_this) {
  return function(e) {
    _this.parent.trigger('add', {
      name: e.target.tname.value
    });
    return e.target.reset();
  };
})(this);
});

riot.tag2('wikipedia-viewer', '<search-box></search-box> <articles-list> <article></article> </articles-list>', '', '', function(opts) {
});
riot.tag2('search-box', '<input onchange="{search}"> <button onclick="{test}">test</button>', '', '', function(opts) {
var a;

a = 'test';

console.log(a);

this.search = (function(_this) {
  return function() {
    return console.log('test');
  };
})(this);

this.test = (function(_this) {
  return function() {
    return console.log('clicked');
  };
})(this);
});