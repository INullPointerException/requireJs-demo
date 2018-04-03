require.config({

  baseUrl: "static",

  paths: {
    "jquery": "common/gallery/jquery/jquery.min",
    "module1": "app/module1"
  },

  shim: {
    'jquery': {
      exports: '$'
    }
  }

});

require(['module1'], function(module1) {
  module1.hello();
})
