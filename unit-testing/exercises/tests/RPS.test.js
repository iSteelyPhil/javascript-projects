const whoWon = require('../RPS.js');

describe('RPS', function(){

    test('returns "TIE" when both players choose the same', function(){
        let result = whoWon('rock','rock');
        expect(result).toBe('TIE!');
    });
    test('returns "Player 2 wins!" when player to use', function(){
        let result = whoWon('rock','paper') || whoWon('paper','scissors') || whoWon('scissors','rock');
        expect(result).toBe('Player 2 wins!');
    });
});

