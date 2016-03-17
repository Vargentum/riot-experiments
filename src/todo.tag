todo
  h2 Simple todo app
  todo-list(todos="{this.todos}")

  todo-create

  script.
    @todos = []

    @add = (todo) =>
      @todos.push(todo)
      @update()

    @remove = (idx) =>
      @todos.splice(idx, 1)
      @update()

    @removeAll = () =>
      @todos = []
      @update()

  style.
    todo
      width 200px


todo-list
  todo-item(each="{opts.todos}", 
            onclick="{parent.remove}",
            name="{name}")

  script.
    @remove = (e) =>
      idx = @opts.todos.indexOf(e.item)
      @parent.remove(idx)

todo-item
  p
    | {opts.name}

  style.
    todo-item
      border 1px solid red
      padding 3px 10px
      display block


todo-create
  form(onsubmit="{add}")
    input(type="text" name="tname")
    input(type="submit" value="Add Todo")
    button(onclick="{this.parent.removeAll}") Clear all

  script.
    @add = (e) =>
      @parent.add 
        name: e.target.tname.value
      e.target.reset()
