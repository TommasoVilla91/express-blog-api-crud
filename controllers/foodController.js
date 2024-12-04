const recipesList = require("../data/foods");


// index
const index = (req, res) => {  
    const queryString = req.query;
    if(queryString.tag !== undefined) {
        recipesToSend = recipesList.filter((curRecipe) => curRecipe.tags.includes(queryString.tag));
        res.json(recipesToSend);
    };
};

// show
const show = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const specRecipe = recipesList.find(curRecipe => curRecipe.id === recipeId);
    if(specRecipe === undefined) {
        res.sendStatus(404);
        res.message("Elemento non trovato!")
    } else {
        res.json(specRecipe);
    };    
};

// create
const create = (req, res) => {
    res.json('creiamo un nuovo post');
};

// update
const update = (req, res) => {
    const recipeId = parseInt(req.params.id);
    res.json('modifichiamo i dati del post ' + recipeId);
};

// modify
const modify = (req, res) => {
    const recipeId = parseInt(req.params.id);
    res.json('modifichiamo gli specifici dati del post ' + recipeId);
};

// destroy
const destroy = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const indexRecipe = recipesList.findIndex((curRecipe) => curRecipe.id);
    if(recipeId === -1) {
        res.sendStatus(404);
        res.message("Elemento non trovato!")
    } else {
        recipesList.splice(indexRecipe, 1);
        res.sendStatus(204);
        console.log(recipesList);
    };
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};