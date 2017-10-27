var mongoose = require('mongoose');
var pokeApi = require('./PokeApi');
var Schema = mongoose.Schema;

var mongoDB = 'mongodb://127.0.0.1:27017/my_database';
mongoose.connect(mongoDB, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

PokemonSchema = new Schema({
    name: String,
    id: Number,
    height: Number,
    weight: Number,
    spriteFront: String,
    abilities: [{name: String, id: Number}]
});

exports.PokemonSchema = PokemonSchema;



exports.getPokemonByIdDB = function(id){
    console.log("getPokemonByIdDB");
    var Pokemon = mongoose.model('Pokemon',PokemonSchema);
    var query = Pokemon.findOne({id: id});
    return query.exec();
};

exports.addPokemonFromPokeApi = function(json) {
    var Pokemon = mongoose.model('Pokemon' , PokemonSchema);
    var pokemon = new Pokemon({
        name: json.name,
        id: json.id,
        weight: json.weight,
        height: json.height,
        spriteFront: json.sprites.front_default,

    });

    pokemon.save()
        .then(function(data)
        {
            console.log('sucess', data)
        })
        .catch(function(err)
        {
            console.log('error', err);
        });
    return pokemon;
};
