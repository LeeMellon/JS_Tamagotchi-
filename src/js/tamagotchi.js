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
  hungerCheck(environ){
    if(this.hunger > 50 && environ.food > 0){
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
      happinessMod = this.genome[1]
    }else {
      happinessMod = -1
    }
    return happinessMod
  }

  eggCheck(environ) {
     if (this.egg >= 100) {
       this.egg = 0
       environ.eggs += 1
     }
  }

  starvationCheck(){
    let starvation  = false
    if (this.hunger > 90){
      starvation = true
    }
    return starvation
  }

  lifeCheck(){
    let life = true
    if(this.health <= 0){
      life = false
    }
    return life
  }


  metabolismCheck(environ) {
    let that = this
    setInterval(function() {
      let toEat = that.hungerCheck(environ)
      let happy = that.happinessCheck()
      let health = that.healthCheck()
      let rest = that.restCheck()
      let egg = that.eggCheck(environ)
      let starvation = that.starvationCheck()
      let life = that.lifeCheck()

      if (toEat == true){
        that.eat(environ)
        console.log("eat")
      }else if (life == false){
        that.death()
      }else if (rest == false){
        that.sleep()
        console.log("sleep")
      }else if (starvation == true){
        that.starvation()
        console.log("starvation")
      } else {
        that.metabolism(environ, happy, health)
        console.log("met")
      }
  }, 1000);
}

 metabolism(environ,happy,health){
    this.happiness -= (happy * this.genome[1])
    this.egg += parseFloat((5 * this.genome[4]) + (happy + health).toFixed(2))
    this.rest -= parseFloat((this.genome[5] * 7).toFixed(2))
    this.hunger +=parseFloat((3 * this.genome[2]).toFixed(2))
    this.health -= parseFloat(1.1 * this.genome[0].toFixed(2))
    // this.level += parseFloat((this.genome[3]/1000).toFixed(4))
    // console.log((this.genome[3]/1000).toFixed(4))
  }


//eating process
 eat(environ){
    let foodNeed = this.level * 5
    let foodAvail = environ.food
    let mealSize = 0
    if (foodNeed > foodAvail){
      mealSize = foodAvail
    } else {
      mealSize = foodNeed
    }
    let eats = parseFloat((Math.random() * mealSize).toFixed(2))
    environ.food -= mealSize
    environ.waste += eats * this.genome[0]
    this.hunger -= parseFloat(((5 + this.genome[5])*eats).toFixed(2))
    }


//sleep metabolism
 sleep(){
    this.hunger += this.genome[2]
    this.rest += parseFloat((25 * this.genome[5]).toFixed(2))
    if (this.health >= 100){
      this.health += 0;
    }else{
      this.health += parseFloat(((this.health / 25) * this.genome[0]).toFixed(2))
    }
  }

  starvation(){
    this.hunger += this.genome[2] * 3
    this.rest -= parseFloat((25 * this.genome[5]).toFixed(2))
    this.happy -= parseFloat( 2 * (this.happy * this.genome[1]).toFixed(2))
    this.health -= parseFloat((this.hunger * this.genome[0]).toFixed(2))
    this.egg += 0
    this.level += 0
  }

playWith(){
  this.hunger += parseFloat(((100 * this.genome[2]) * this.level).toFixed(2))
    this.rest -= parseFloat((100 * this.genome[5]).toFixed(2))
    this.happy += parseFloat( 2 * (this.happiness * this.genome[1]).toFixed(2))
    this.health += parseFloat((this.hunger * this.genome[0]).toFixed(2))
    this.level += parseFloat(((this.level/2) * this.genome[3]).toFixed(2))
}

  death(){
    let name = this.name
    let condolence = " ${name} has died. You're really not good at being a Tamagotchi owner."
    //add some continuation method
    return condolence
  }

  hex() {
    let hex = (this.genome[0]).toString().charAt(2) + "f" + (this.genome[2]).toString().charAt(2) + "f" + (this.genome[4]).toString().charAt(2) + "f"
    return hex
  }

}
