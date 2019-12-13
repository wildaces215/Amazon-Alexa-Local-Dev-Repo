const context = require("aws-lambda-mock-context");

var index = require("../src/index");

const ctx = context();

describe("Test the launching Intent", function () {
    var speechResponse = null;
    var speechError = null;
    before(function(done){
        index.handler({},ctx);
        ctx.Promise.then(response);
    })

});
