const whoWon = require('../RPS.js');

describe('RPS', function(){

    test('returns "TIE" when both players choose the same', function(){
        let result = whoWon('rock','rock');
        expect(result).toBe('TIE!');
    });
    test('returns "Player 2 wins!"', function(){
        let result = whoWon('rock','paper') || whoWon('paper','scissors') || whoWon('scissors','rock');
        expect(result).toBe('Player 2 wins!');
    });
    test('returns "Player 1 wins!" ', function(){
        let result = whoWon('Paper','rock') || whoWon('scissors','paper') || whoWon('rock','scissors');
        expect(result).toBe('Player 1 wins!');
    });
    test('invalid move" ', function(){
        let result = whoWon('hand','fist')
        expect(result).toBe('INVALID MOVE!');
    });
});