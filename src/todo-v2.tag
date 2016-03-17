span(riot-tag="plural")
  {opts.q > 1 ? opts.plural : opts.single}


todo-v2
  header
    input(autofocus, onkeyup="{handleInput}")
    button.toggle-all(onclick="{toggleAll}") toggle/untoggle

  ul.todo-list
    li(riot-tag="todo-task", 
       each="{item, i in opts.todos}",
       index="{i}"
       name="{item.name}"
       completed="{completed}")

  footer
    p
      plural(
        if="{opts.todos.length}",
        q="{opts.todos.length}"
        single="item",
        plural="items"
      )
      | left
    button(onclick="{clearCompleted}") Clear completed

  


todo-task.f-box.f-align--2-1
  input(
    type="checkbox", 
    value="{opts.completed}",
    onchange="{setStatus}"
  )
  p(if="{!isEdited}")
    | {opts.name}
  input(
    if="{isEdited}"
    type="text",
    value="{opts.name}",
    onkeyup="{edit}"
  )
  button.todo-remove(onclick="{remove}") Remove