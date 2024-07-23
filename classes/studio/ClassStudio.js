//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
    
    }
    avgScore = function(scores){
        this.scores = 0
        for(let i = 0; i<scores.length;i++){
            this.scores+= scores[i]
        }
        return this.score = Math.round(this.scores/scores.length)
    }
    

    status(){
        if(avgScore >= 90){
            return "Accepted"
        }else if( avgScore >80){
            return 'Reserve'
        }else if( avgScore >70){
            return 'Probationary'
        }else{
            return 'rejection'
        }
    }
}
let bear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);
/* console.log(bear); */


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
CrewCandidate.prototype.addScore = function(newScore){
    return this.scores.push(newScore)
};



/* CrewCandidate.prototype.avgScore = function(scores){
    this.scores = 0
    for(let i = 0; i<scores.length;i++){
        this.scores+= scores[i]
    }
    return this.score = Math.round(this.scores/scores.length)
} */

bear.avgScore(bear.scores)
console.log(bear)
merry.avgScore(merry.scores)
console.log(merry)
gator.avgScore(bear.scores)

CrewCandidate.prototype.status() = function(){

}
bear.status()
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.