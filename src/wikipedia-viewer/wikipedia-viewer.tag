wikipedia-viewer

  search-box
    

  articles-list
    article





search-box
  input(onchange="{search}")
  button(onclick="{test}") test

  script.

    a = 'test'
    console.log a
    @search = () =>
      console.log 'test'


    @test = () =>
      console.log 'clicked'