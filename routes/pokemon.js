var express = require('express');
var router = express.Router();
var pokeApi = require('../Service/PokeApi');
var db = require('../Service/database');
var mongo = require('../Service/Mongo');



/* GET home page. */
router.get('/:id', function(req, res, next) {
    console.log("router");
    db.getPokemonById(req.params.id)
        .then(function(data) {
            if(data !== null)
            {
                res.send(data);
            }
            else
            {
                pokeApi.getPokemonByIdAPI(req.params.id)
                    .then(function(data)
                    {
                        var resultJson = (JSON.parse(data));
                        res.send(mongo.addPokemonFromPokeApi(resultJson));
                    })
                    .catch(function(err)
                    {
                        res.json(err.message)
                    })
            }
        })
        .catch( function(err) {

            console.log(err);

        });
});


module.exports = router;
