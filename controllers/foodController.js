


// index
const index = (req, res) => {    
    res.json(recipesList);
};

// show
const show = (req, res) => {
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
    res.json('eliminiamo post ' + recipeId);
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};