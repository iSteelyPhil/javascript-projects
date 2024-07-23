//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
    
    }
    addScore = function(newScore){
        return this.scores.push(newScore)
    };

    avgScore = function(){
       let avgSum = 0
        for(let i = 0; i<this.scores.length;i++){
            avgSum += this.scores[i]
        }
        return avgSum= Math.round(avgSum/this.scores.length)
    }
    
    status(){
        let avg = this.avgScore();
        if(avg >= 90){
            return "Accepted"
        }else if( avg >80){
            return 'Reserve'
        }else if( avg >70){
            return 'Probationary'
        }else if(avg <70 ){
            return 'rejection'
        }
    }
}
let bear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);


/* //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
CrewCandidate.prototype.addScore = function(newScore){
    return this.scores.push(newScore)
};
 */


/* CrewCandidate.prototype.avgScore = function(scores){
    this.scores = 0
    for(let i = 0; i<scores.length;i++){
        this.scores+= scores[i]
    }
    return this.score = Math.round(this.scores/scores.length)
} */

/* console.log(bear.avgScore()) */
console.log(merry.status())


console.log(`${bear.name} earned an average test score of ${bear.avgScore()}% and has a status of ${bear.status()}.`);
console.log(`${merry.name} earned an average test score of ${merry.avgScore()}% and has a status of ${merry.status()}.`);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
/* gator.addScore(100);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`);
gator.addScore(100);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`);
gator.addScore(100);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`);
gator.addScore(100);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`);
gator.addScore(100);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`);
gator.addScore(100);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`); */
let gatorLoop = function(){
   while(gator.avgScore() <= 90){
        gator.addScore(100)
    }
     return gator.scores.length
}
    

console.log(gatorLoop());
console.log(`It took ${gator.name} ${gatorLoop()} tests to finally reach ${gator.status()}!`);
console.log(`${gator.name} earned an average test score of ${gator.avgScore()}% and has a status of ${gator.status()}.`);