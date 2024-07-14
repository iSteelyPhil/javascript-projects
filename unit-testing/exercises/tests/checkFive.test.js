const checfkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("returns 'num is less than 5' when num < 5.", function(){
        let input = 3
        let result = checfkFive(input);
        expect(result).toBe(`${input} is less than 5.`);
    });
    test("returns 'num is greater than 5' when num > 5.", function(){
        let input = 6
        let result = checfkFive(input);
        expect(result).toBe(`${input} is greater than 5.`);
    });
    test("returns 'num is equeal to 5' when num = 5.", function(){
        let input = 5
        let result = checfkFive(input);
        expect(result).toBe(`${input} is equal to 5.`);
    });

});