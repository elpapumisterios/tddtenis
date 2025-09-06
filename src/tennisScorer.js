 
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
    if(this.judadorA===2 && this.judadorB===0){
      return "30 - love";
    } 
    if(this.judadorA===3 && this.judadorB===1){
      return "30 - 15";
    }
    if(this.judadorA===1 && this.judadorB===1){
      return "15 - 15";
    } 
    if(this.judadorA===1 && this.judadorB===2){
      return "15 - 30";
    } 
    if(this.judadorA===3 && this.judadorB===2){
      return "40 - 30";
    }   
    if(this.judadorA===3 && this.judadorB===3){
      return "deuce";
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

