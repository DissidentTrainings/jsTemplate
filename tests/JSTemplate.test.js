"use strict";
buster.testCase("My thing", {
    "has the foo and bar": function () {
       var jst = new JSTemplate(); 
       assert.equals(jst.foo(), "bar");
    },

    "states the obvious": function () {
        assert(true);
    }
});
