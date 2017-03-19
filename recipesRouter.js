const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { Recipes } = require('./models'); 

const router = express.Router();

Recipes.create('soup', ['tomatoes', 'basil', 'broth']);
Recipes.create('Roast Chicken', ['chicken thighs', 'seasonings', 'olives']);
Recipes.create('Pie', ['Butter', 'Cherries', 'Flour']);

router.get('/', (req, res) => {
    res.json(Recipes.get());
});

module.exports = router;