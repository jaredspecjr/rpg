export class Player{
  constructor(name, playerClass){
    this.name = name;
    this.playerClass = playerClass;
    this.health = 100;
    this.str = 10;
    this.dex = 10;
    this.int = 10;
    this.tal = 10;
    this.currentPlayer = [];
    this.inv = [];

  }
  classCheck(){
    if (this.playerClass === "warrior"){
      this.str += 10;
      this.inv.push("potion");
    } else if (this.playerClass === "wizard"){
      this.int += 10;
    } else if (this.playerClass === "thief"){
      this.dex += 10;
    } else if (this.playerClass === "bard"){
      this.tal += 10;
    }
  }
  playerDamage(enemy){
    if(this.str > 19){
      enemy.health -= 10;
    } else {
      enemy.health -=5;
    } //add more logic for int dex and tal make sure they are random rolls not fixed numbers
  }

  endGameCheck(){
    if(this.health > 0){
      return false;
    } else if(this.health <= 0){
      return true;
    }
  }
  turnCheck(){
    if(this.currentPlayer.includes("player")){
      return true;
    } else {
      return false;
    }
  }
  potion(){
    if(this.inv.includes("potion")){
      this.health += 15;
      this.inv.splice("potion");
    }
  }
}
