import {Tamagotchi} from './tamagotchi.js';


function gestate(name){
  let gene1 =  Math.random()  + 1;
  let gene2 =  Math.random()  + 1;
  let gene3 =  Math.random()  + 1;
  let gene4 =  Math.random()  + 1;
  let gene5 =  Math.random()  + 1;
  let gene6 =  Math.random()  + 1;
  let genome = [];
  genome.push(gene1, gene2, gene3, gene4, gene5, gene6);
  let newTama = new Tamagotchi(name);
  newTama.genome = genome;
  return newTama;
}
