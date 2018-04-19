export { Enemy };
class Enemy {
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
