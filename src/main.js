import { Player } from './player.js';
import { Enemy } from './enemy.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let player1 = new Player();
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

  });
});
