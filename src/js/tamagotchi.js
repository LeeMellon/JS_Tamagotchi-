export class Tamagotchi {
  constructor(name, true, 100, 0, 100, 0, 0, 100, 1){
    this.name = name;
    this.alive = alive;
    this.health = health;
    this.hunger = hunger;
    this.happiness = happiness;
    this.train = train;
    this.egg = egg;
    this.rest = rest;
    this.level = level;
  }

  eat(environ){
    let mealSize = this.level * 5;
    let eats = Math.floor( Math.random() * (mealSize) + 1;
    environ.food -= eats;
    this.hunger -= eats * (100/mealSize);
  }

  hunger(){
    if(this.hunger < 50){
      return true;
    } else {
      return false;
    }
  }

  health() {
    this.health = 100 ;
  }

  happiness() {
    let happinessMod = 1;
    if (this.happiness < 75){
      happinessMod = 
    }
  }

  train() {

  }

  egg() {

  }

  rest() {

  }

  level() {

  }

  metabolism(environ){
      let poop = (20 * this.genome[0]);
      this.hunger -= poop;
      this.happiness -= (10 * this.genome[1]);
      this.egg += (5 * this.genome[2]);
      environ.waste += poop;
      this.rest -=
    }
  }

  metabolismCheck(environ) {
    setInterval(function(), 30000) {
      let toEat = this.hunger()





      this.metabolism(hunger, ){
        if (hunger == true){
          this.eat(environ)
        }
        if
      }
  }

}









}
