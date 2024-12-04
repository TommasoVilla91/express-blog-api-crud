const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/foodController");


// index
router.get('/', recipesController.index);

// show
router.get('/:id', recipesController.show);

// create
router.post('/', recipesController.create);

// Update
router.put('/:id', recipesController.update);

// modify
router.patch('/:id', recipesController.modify);

// destroy
router.delete('/:id', recipesController.destroy);

module.exports = router;