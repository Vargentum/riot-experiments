
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