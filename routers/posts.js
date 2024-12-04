const express = require("express");
const router = express.Router();
const recipesList = require("../data/foods");
const recipesController = require("../controllers/foodController")


// index
router.get('/', (req, res) => {    
    res.json(recipesList);
});

// show
router.get('/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);
    const specRecipe = recipesList.find(curRecipe => curRecipe.id === recipeId);
    if(specRecipe === undefined) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Ricetta non trovata",
        });
    } else {
        res.json(specRecipe);
    };
    
});

// create
router.post('/', (req, res) => {
    res.json('creiamo un nuovo post');
});

// Update
router.put('/:id', (req, res) => {
    const recipeId = req.params.id;
    res.json('modifichiamo i dati del post ' + recipeId);
});

// modify
router.patch('/:id', (req, res) => {
    const recipeId = req.params.id;
    res.json('modifichiamo gli specifici dati del post ' + recipeId);
});

// destroy
router.delete('/:id', (req, res) => {
    const recipeId = req.params.id;
    res.json('eliminiamo post ' + recipeId);
});

module.exports = router;