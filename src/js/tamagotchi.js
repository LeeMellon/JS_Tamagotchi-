export class Tamagotchi {
  constructor(name, true, true, 100, 0, 100, 0, 0, 100, 1){
    this.name = name
    this.alive = alive
    this.awake = awake
    this.health = health
    this.hunger = hunger
    this.happiness = happiness
    this.train = train
    this.egg = egg
    this.rest = rest
    this.level = level
  }


  //returns bool if needs to eat
  hungerCheck(){
    if(this.hunger < 50){
      return true
    } else {
      return false
    }
  }

  healthCheck() {
    let health = this.health
    let healthMod = 0
    if (health > 85){
      healthMod = 2
    }else if (health < 85 && health > 70){
      healthMod = 1.5
    }else if (health < 70 && health > 60){
      healthMod = 1
    }else if (health < 60 && health > 50){
      healthMod = 0
    }else if (health < 50 && health > 35){
      healthMod = -1
    }else {
      healthMod = -1.5
    }
    return healthMod
  }

  restCheck() {
    let rest = this.rest
    if (rest > 35){
      this.awake = true
    } else{
      this.awake = false
    }
    return this.awake
  }

  level() {
    }

  //returns happiness modifier to metabolism
  happinessCheck() {
    let happy = this.happiness;
    let happinessMod = 1;
    if (happy > 75){
      happinessMod = (happy/20) * this.genome[1]
    } else if (happy < 75 && happy > 50){
      happinessMod = (happy/10) * this.genome[1]
    } else if (happy < 50 && happy > 35){
      happinessMod = ((happy/7) * this.genome[1]) + 1
    }else {
      happinessMod = (happy) * this.genome[1] +1
    }
    return happinessMod
  }

  eggCheck(environ) {
     if (this.egg >= 100) {
       this.egg = 0
       environ.egg += 1
     }
  }

  metabolismCheck(environ) {
    let toEat = this.hungerCheck()
    let happy = this.happinessCheck()
    let health = this.healthCheck()
    let rest = this.restCheck()
    let egg = this.eggCheck()

    if (toEat == true){
      this.eat(environ)
    }else if {
      if (rest == false)
      this.sleep()
    } else {
      this.metabolism(environ, toEat, happy, health){
      }
    }
  }

  metabolism(environ,happy,health){
    this.happiness -= happy
    this.egg += (5 * this.genome[4]) + (happy + health)
    environ.waste += (20 * this.genome[0])
    this.rest -= this.genome[5] * 35
  }


  eat(environ){
    let foodNeed = this.level * 5
    let foodAvail = environ.food
    let mealSize = 0
    if (foodNeed > foodAvail){
      mealSize = foodAvail
    } else {
      mealSize = foodNeed
    }
    let eats = Math.floor( Math.random() * (mealSize) + 1
    environ.food -= eats
    this.hunger -= eats * (100/mealSize)
  }


  sleep(){
    this.hunger -= this.genome[3]
    this.rest += 25 * this.genome[5]
  }

}
