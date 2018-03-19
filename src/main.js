import { Tamagotchi } from './../src/js/tamagotchi.js';
import { Environs } from './../src/js/environs.js';
import { gestate } from './../src/js/rules.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var tama = gestate(name);
    $('#preview').append("<h1>" + tama.name + "</h1>"
    + "<h3>" + "Awake : " + tama.awake + " Health : " + tama.health + " Hunger : " + tama.hunger + " Happiness : " + tama.happiness + " Training : " + tama.train + " Egg development : " + tama.egg + " Rest Lvl : " + tama.rest + " Creature Level : " + tama.level +  "</h3>");
  });
});
