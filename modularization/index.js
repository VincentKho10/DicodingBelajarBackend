const Wolf = require('./Wolf')
const Tiger = require('./Tiger')

const fighting = (tiger, wolf)=>{
    console.log(`tiger strength: ${tiger.strength}`)
    console.log(`wolf strength: ${wolf.strength}`)
    if(tiger.strength > wolf.strength){
        tiger.growl()
        return
    }
    if(tiger.strength < wolf.strength){
        wolf.howl()
        return
    }
    console.log('they have the same strength')
}

const tig = new Tiger()
const wlf = new Wolf()

fighting(tig, wlf)