import {Tamagotchi} from './tamagotchi.js';
import {Environs} from './environs.js';

export function gestate(name){
  let gene1 =  parseFloat(Math.random().toFixed(2));//health gene
  let gene2 =  parseFloat(Math.random().toFixed(2));//happiness gene
  let gene3 =  parseFloat(Math.random().toFixed(2));//hunger gene
  let gene4 =  parseFloat(Math.random().toFixed(2));//training gene
  let gene5 =  parseFloat(Math.random().toFixed(2));//egg gene
  let gene6 =  parseFloat(Math.random().toFixed(2));//rest gene6
  let genome = [];
  genome.push(gene1, gene2, gene3, gene4, gene5, gene6);
  let newTama = new Tamagotchi(name);
  newTama.genome = genome;
  return newTama;
}
//
//   function masterCheck(tamagotchi, environs){
//     setInterval(function() {
//       tamagotchi.metabolismCheck(environs)
//   }, 30000);
// }
