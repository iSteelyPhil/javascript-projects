function whoWon(player1,player2){
  const choices = ['rock', 'paper', 'scissors'];
  const player1Lower = player1.toLowerCase();
  const player2Lower = player2.toLowerCase();
  if(!choices.includes(player1Lower)||!choices.includes(player2Lower)){
    return "INVALID MOVE!"
  }
   if (player1Lower === player2Lower){
     return 'TIE!';
   }
   
   if (player1Lower === 'rock' && player2Lower === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1Lower === 'paper' && player2Lower === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1Lower === 'scissors' && player2Lower === 'rock '){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
 };
 console.log(whoWon('rock', 'Paper'));
/* console.log(whoWon('rock','rock')); */
 module.exports = whoWon;