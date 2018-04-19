import { Player } from './../src/player.js';
import { Enemy } from './../src/enemy.js';

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
  it('should check stats and then damage enemy', function(){
    let player1 = new Player("jared", "warrior");
    let enemyWeak = new Enemy("weak");
    player1.classCheck();
    player1.playerDamage(enemyWeak);
    expect(enemyWeak.health).toEqual(90)
  });
  it('should check if players health is 0 and return if it is endgame or not', function(){
    let player1 = new Player("dudeman", "wizard");
    player1.endGameCheck();
    expect(player1.endGameCheck()).toEqual(false);
  });
  it('should check if current player is player or not', function(){
    let player1 = new Player("jared", "wizard");
    player1.currentPlayer.push("player");
    player1.turnCheck();
    expect(player1.turnCheck()).toEqual(true);
  });
  it('should add health to player', function(){
    let player1 = new Player("thisguy", "warrior");
    player1.classCheck();
    player1.potion();
    expect(player1.health).toEqual(115);
    expect(player1.inv).toEqual([]);
  });
});
 describe('Enemy' , function(){
   it('should take health away from the player', function(){
     let player1 = new Player("dude", "warrior");
     let enemyWeak = new Enemy("weak");
     enemyWeak.enemyDamage(player1);
     expect(player1.health).toEqual(95);
   });
 });
