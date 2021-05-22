const Pokemon = require('../models/Pokemon');

module.exports = {
    async store(pokemons) {
        console.log(pokemons.length)
        for(let i = 0; i <= pokemons.length - 1; i++){
            console.log(i)
            let pokemon = await Pokemon.create({
                name: pokemons[i]["Pokemon"], 
                type1: pokemons[i]["Type I"],
                type2: pokemons[i]["Type II"],
                hp: pokemons[i]["HP"], 
                atk: pokemons[i]["Atk"],
                def: pokemons[i]["Def"],
                spa: pokemons[i]["SpA"], 
                spd: pokemons[i]["SpD"],
                spe: pokemons[i]["Spe"],
                totalStatus: pokemons[i]["Total Status"]
            })
        }
        
    }
}