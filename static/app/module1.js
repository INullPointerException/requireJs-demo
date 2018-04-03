define(['jquery'],function($) {
  function sayHello() {
    var childDom = $("<h1>hello require.js!!!</h1>");
    $("body").append(childDom);
  }

  return {hello: sayHello};

});
