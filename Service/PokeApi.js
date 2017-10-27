var mongo = require('./Mongo');

const request = require('request');
const rp = require('request-promise');



var urlPokeApi = 'https://pokeapi.co/api/v2/';




exports.getPokemonByIdAPI = function (id)
{

    console.log("getPokemonByIdAPI");
    var urlPokemon = urlPokeApi+"pokemon/"+id;

    return rp(urlPokemon)

};

