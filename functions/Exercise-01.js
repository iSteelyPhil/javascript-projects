function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++){
    line += "#";
    }
    return line;
  }
  
  console.log(makeLine(5));
  /////
  console.log("EXERCISE BREAK");
  /////
  function makeSquare(size) {
    let square = "";
    for (let i = 0; i < size; i++){
    square += makeLine(size) + "\n";
    }
    return square.slice(0,-1);
  }
  console.log(makeSquare(5));
  /////
  console.log("EXERCISE BREAK");
  /////
  function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++){
    rectangle += (makeLine(width)) + "\n";
    }
    return rectangle.slice(0,-1);
  }
  console.log(makeRectangle(5, 3));
  /////
  console.log("EXERCISE BREAK");
  /////
  function makeDownwardStairs(height) {
    let downStairs = "";
    for (let i = 0; i < height; i++){
    downStairs += makeLine(i+1) + "\n";
    }
    return downStairs.slice(0,-1);
  }
  console.log(makeDownwardStairs(5));
  /////
  console.log("EXERCISE BREAK");
  /////
  function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    let charLine = makeLine(numChars);
    let comboLine ="";
    for (let i = 0; i < numSpaces; i++){
    spaceLine += " ";
    }
   
    comboLine = spaceLine + charLine+ spaceLine;
    return comboLine;
  }
  console.log(makeSpaceLine(3, 5));
  /////
  console.log("EXERCISE BREAK");
  /////
  function makeIsoscelesTriangle(height){
    let isoTriangle= "";
    for (let i = 0; i < height; i++){
    isoTriangle += (makeSpaceLine(height - i - 1, 2 * i + 1)) + "\n";
    }
    return isoTriangle.slice(0,-1);
  }
  console.log(makeIsoscelesTriangle(5));
  /////
  console.log("EXERCISE BREAK");
  /////
  function makeDiamond(height) {
  let diamond = "";
    diamond += makeIsoscelesTriangle(height);
    for (let i = height - 2; i >= 0; i--) {
        diamond += "\n" + makeSpaceLine(height - i - 1, 2 * i + 1);
    }
    
    return diamond;
  }
  console.log(makeDiamond(5));
  