const divide = require("../divide.js")

describe("the divide function", function(){

    test('should divide numerator by denominator with a zero', function(){
        expect(divide(10,0)).toEqual(2);
    });

    test('should divide numerator by denominator', function(){
        expect(divide(10,5)).toEqual(2);
    });
});
