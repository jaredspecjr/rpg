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
  warStatCheck(){
    if (this.playerClass === "warrior"){
      this.str += 10;
    }
  }
}
