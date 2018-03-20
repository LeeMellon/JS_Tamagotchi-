import { Tamagotchi } from './../src/js/tamagotchi.js';
import { Environs } from './../src/js/environs.js';
import { gestate } from './../src/js/rules.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var tama = gestate(name);
    let environs = new Environs()
    $("#entry-form").fadeOut(500, "swing")
    // let runFunc = masterCheck(tama, environs
    let regualr = tama.metabolismCheck(environs)
    setInterval(function () {
      $('#cell').html("<h1>" + tama.name + "</h1><div class='test' style='background:#" + tama.hex() + ";'><img src='https://i.imgur.com/vbvcW4u.gif'></div>"
      + "<h3>" + "Awake : " + tama.awake + "</h3><h3> Health : " + tama.health + "</h3><h3> Hunger : " + tama.hunger + "</h3><h3> Happiness : " + tama.happiness + "</h3><h3> Training : " + tama.train + "</h3><h3> Egg development : " + tama.egg + "</h3><h3> Rest Lvl : " + tama.rest + "</h3><h3> Creature Level : " + tama.level +  "</h3><h3> food : " + environs.food + "</h3><h3>Eggs: " + environs.eggs + "</h3>");
    }, 1000);
    $('#food-button').click(function(){
      environs.eggs -=1
      environs.food += 100
    })
    $("#play-button").click(function(){
      tama.playWith()
    })
  })
});
