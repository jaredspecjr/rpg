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
}
