var express = require('express');
var pokeApi = require('./PokeApi');
var mongo = require('./Mongo');

exports.getPokemonById = function (id)
{
    console.log("getPokemonById");
    return mongo.getPokemonByIdDB(id);
};

