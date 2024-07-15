// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('organization key returns value of "nonprofit', function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });
  test('percentageemployees key returns value of "nonprofit', function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  test('programsOffered key returns value of array', function(){
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  });
  test('programsOffered key returns value of array', function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
  });
  test('programsOffered key returns length of array', function(){
    expect(launchcode.programsOffered.length).toEqual(3);
  });
  describe('Should have a method called launchOutput, which', function(){
    
    test('should return "Launch!" for numbers evenly divisible by 2', function(){
      expect(launchcode.launchOutput(2)).toEqual('Launch!');
    });
    test('should return "Launch!" for numbers evenly divisible by 3', function(){
      expect(launchcode.launchOutput(3)).toEqual('Code!');
    });
    test('should return "Launch!" for numbers evenly divisible by 5', function(){
      expect(launchcode.launchOutput(5)).toEqual('Rocks!');
    });
    test('should return "LaunchCode!" for numbers evenly divisible by 2 and 3', function(){
      expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
    });
  });
});