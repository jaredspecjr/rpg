export class Player{
  constructor(name, playerClass){
    this.name = name;
    this.playerClass = playerClass;
    this.health = 100;
    this.str = 10;
    this.dex = 10;
    this.int = 10;
    this.tal = 10;

  }
  classCheck(){
    if (this.playerClass === "warrior"){
      this.str += 10;
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
    }
  }
  endGameCheck(){
    if(this.health > 0){
      return false;
    } else if(this.health <= 0){
      return true;
    }
  }
}

export class Enemy {
  constructor(enemyClass){
    this.enemyClass = enemyClass;
    this.health = 100;
  }
  enemyDamage(player){
    if (this.enemyClass === "weak"){
      player.health -= 5;
    } else if (this.enemyClass === "strong"){
      player.health -=10;
    }
  }
}

// export class Endgame {
//   constructor()
// }
