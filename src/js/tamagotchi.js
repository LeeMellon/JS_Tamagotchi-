export class Tamagotchi {
  constructor(name, alive = true, awake = true,health = 100,hunger = 0, happiness =100,train = 0, egg = 0, rest = 100, level  = 1){
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


  // returns bool if needs to eat
  hungerCheck(){
    if(this.hunger > 50){
      return true
    } else {
      return false
    }
  }

   healthCheck() {
    let health = this.health
    let healthMod = 0
    if (health >= 100) {
      this.health = 100
    } else if (health > 85){
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
    if (this.awake == true && rest >25){
      this.awake = true
    }else if (this.awake == false && rest < 85){
      this.awake = false
    } else if (rest < 25){
      this.awake = false
    } else {
      this.awake = true
    }
    return this.awake
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
       environ.eggs += 1
     }
  }

  metabolismCheck(environ) {
    let that = this
    setInterval(function() {
      let toEat = that.hungerCheck()
      let happy = that.happinessCheck()
      let health = that.healthCheck()
      let rest = that.restCheck()
      // let egg = that.eggCheck(environ)

      if (toEat == true){
        that.eat(environ)
        console.log("eat")
      }else if (rest == false){
        that.sleep()
        console.log("sleep")
      } else {
        that.metabolism(environ, happy, health)
        console.log("met")
      }
  }, 1000);
}

 metabolism(environ,happy,health){
    // this.happiness -= parseFloat(happy.toFixed(0))
    // this.egg += parseFloat((5 * this.genome[4]) + (happy + health).toFixed(0))
    // environ.waste += parseFloat((20 * this.genome[0]).toFixed(0))
    this.rest -= parseFloat((this.genome[5] * 7).toFixed(2))
    this.hunger += parseFloat((3 * this.genome[2]).toFixed(2))
    this.health -= parseFloat(1.1 * this.genome[0].toFixed(2))
    console.log("this.health: " + parseFloat(this.genome[0].toFixed(2)))
  }


 eat(environ){
    let foodNeed = this.level * 5
    let foodAvail = environ.food
    let mealSize = 0
    if (foodNeed > foodAvail){
      mealSize = foodAvail
    } else {
    mealSize = foodNeed
    let eats = parseFloat((Math.random() * mealSize).toFixed(2))
    environ.food -= eats
    environ.waste += eats * this.genome[0]
    console.log("poop : " + eats * this.genome[0])
    this.hunger -= parseFloat(((5 + this.genome[5])*eats).toFixed(2))
    }
  }

 sleep(){
    this.hunger += this.genome[2]
    this.rest += parseFloat((25 * this.genome[5]).toFixed(2))
    if (this.health >= 100){
      this.health += 0;
    }else{
      this.health += parseFloat(((this.health / 25) * this.genome[0]).toFixed(2))
    }
    console.log(parseFloat(((this.health / 20) * this.genome[0]).toFixed(2)))
  }

}
