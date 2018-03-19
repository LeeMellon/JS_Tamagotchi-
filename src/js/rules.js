import {Tamagotchi} from './tamagotchi.js';
import {Environs} from './environs.js';


export function gestate(name){
  let gene1 =  Math.random()  + 1;//health gene
  let gene2 =  Math.random()  + 1;//happiness gene
  let gene3 =  Math.random()  + 1;//hunger gene
  let gene4 =  Math.random()  + 1;//training gene
  let gene5 =  Math.random()  + 1;//egg gene
  let gene6 =  Math.random()  + 1;//rest gene6
  let genome = [];
  genome.push(gene1, gene2, gene3, gene4, gene5, gene6);
  let newTama = new Tamagotchi(name);
  let newEnvirons = new Environs();
  newTama.genome = genome;
  return newTama;
}

//   function metabolismCheck(environ){
//     setInterval(function() 30000) {
//
//   }
// }
