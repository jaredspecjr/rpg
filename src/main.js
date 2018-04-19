import { Player } from './../src/player.js';
import { Enemy } from './../src/enemy.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let player1 = new Player();
  $("#form1").submit(function(event){
    event.preventDefault();
    $('#whatever').append(player1.health);//change this
  });
});
