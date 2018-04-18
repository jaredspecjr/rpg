import { Player } from './../src/rpg.js';
import { Enemy } from './../src/rpg.js';

describe('Player' , function(){

  it('should make a player with stats and a class', function() {
    let player1 = new Player("bob", "warrior");

    expect(player1.name).toEqual("bob");
    expect(player1.playerClass).toEqual("warrior");
    expect(player1.health = 100);
    expect(player1.str).toEqual(10);
    expect(player1.dex).toEqual(10);
    expect(player1.int).toEqual(10);
    expect(player1.tal).toEqual(10);
    //console.log(player1);
  });
  it('should check if the players is a warrior and apply new stats', function() {
    let player2 = new Player("sally", "bard");
    player2.classCheck();
    expect(player2.tal).toEqual(20);
  });
});
 describe('Enemy' , function(){
   it('should take health away from the player', function(){
     let player1 = new Player("dude", "warrior");
     let enemyWeak = new Enemy("weak");
     enemyWeak.enemyDamage(player1);
     expect(player1.health).toEqual(95);
   });
 })
