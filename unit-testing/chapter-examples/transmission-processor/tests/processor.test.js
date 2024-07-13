const processor = require('../processor.js');

describe("transmission processor", function() {
//test
   //  TODO: put tests here
  /*  test("takes in transmission string and returns an obj", function() {
    let result = processor("1410::<932829840830053761>");
    expect(typeof result).toEqual("object");
   }); */

   test("returns '-1' if the transmission does not contain ::", function() {
    let result = processor("1410<932829840830053761>");
    expect(result).toEqual(-1);
   });
   test("returns '-1' if the transmission contains more than one ::", function() {
    let result = processor("1410::<932829840830053::761>");
    expect(result).toEqual(-1);
   });
   test("Returned object should contain an id property.", function(){
      let result = processor("1410::<932829840830053761>");
      console.log(result)
    expect(result.id).not.toBeUndefined();
   });
   test("converts id to a number", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
 });
 test("returns rawData in object", () => {
  let result = processor("9701::<487297403495720912>");
  expect(result.rawData).not.toBeUndefined();
});
test("returns '-1' if the rawData does not start  with < and end with >", () => {
  let result = processor("9701::487297403495720912");
  expect(result.rawData).toEqual(-1)
});
test("does not include <> symbols in the rawData", () => {
  let result = processor("9701::<487297403495720912>");
  console.log(result);
  expect(result.rawData).toEqual(487297403495720912)
});
test("returns '-1' if ID cannot be converted to number", function() {
  let result = processor(`${NaN}::<789454>`);
  expect(result.parts).toEqual(-1);
 });
 });