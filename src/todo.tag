todo
  h2 Observable todo app
  todo-list(todos="{this.todos}")

  todo-create

  script.
    @todos = []

    @.on('add', (todo) => 
      @todos.push(todo)
      @update()
    )

    @.on('remove', (idx) => 
      @todos.splice(idx, 1)
      @update()
    )

    @.on('clear', () =>
      @todos = []
      @update()
    )



todo-list
  todo-item(each="{opts.todos}", 
            onclick="{parent.remove}",
            name="{name}")

  script.
    @remove = (e) =>
      idx = @opts.todos.indexOf(e.item)
      @parent.trigger('remove', idx)




todo-item
  p
    | {opts.name}




todo-create
  form(onsubmit="{add}")
    input(type="text" name="tname")
    input(type="submit" value="Add Todo")
    button(onclick="{clear}") Clear all

  script.

    @clear = (e) =>
      @parent.trigger('clear')

    @add = (e) =>
      @parent.trigger(
        'add',
        name: e.target.tname.value
      )
      e.target.reset()
      
