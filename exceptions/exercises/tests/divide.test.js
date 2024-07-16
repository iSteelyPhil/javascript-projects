const divide = require("../divide.js")

describe("the divide function", function(){

    test('should divide num by den', function(){
        expect(divide(5,5)).toEqual(1);
    });

});