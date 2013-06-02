"use strict";
buster.testCase("loads external js code", {
    setUp: function () {
      var scriptTag = document.createElement('script');
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    },
    "has the load function": function () {
       var jst = new JSTemplate(); 
       assert.equals(typeof jst.load, "function");
    },
    /*
    "can use the load function": function(done) {
      var jst = new JSTemplate();
      jst.load(function(){
        assert(typeof google === 'object');
        done();
      });
    }
*/
});
