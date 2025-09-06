 
 class TennisScorer {
 constructor(){
  this.judadorA=0;
  this.judadorB=0;
 }

  obtenerPuntuacion(){
    if(this.judadorA===0 && this.judadorB===0){
      return "love - love";
    } 
    if(this.judadorA===1 && this.judadorB===0){
      return "15 - love";
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

