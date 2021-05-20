const Pokemon = require('../models/Pokemon');

module.exports = {
    async store(pokemons) {

        const pokemon = await Pokemon.create({
            name: pokemons.Pokemon, 
            type1: pokemons.type1,
            type2: pokemons.type2,
            hp: pokemons.hp, 
            atk: pokemons.atk,
            def: pokemons.def,
            spa: pokemons.spa, 
            spd: pokemons.spd,
            spe: pokemons.spe,
            total_status: pokemons.totalStatus
        })
        return pokemon
    }
}