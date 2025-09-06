 
 class TennisScorer {
 constructor(){
  this.judadorA=0;
  this.judadorB=0;
 }

  obtenerPuntuacion(){
    if(this.judadorA===0 && this.judadorB===0){
      return "love - love";
    } 
}     
  playerA(){
    this.judadorA++;
  }
  playerB(){
    this.judadorB++;
  } 

} 
module.exports = TennisScorer;

