////--EXPRESS IMPORT--////
const express = require('express');

const router = express.Router();

////--IMPORT BURGER MODEL TO USE DATABASE FUNCTIONS--////
const burger = require('../models/burger.js');

////--ROUTES--////
router.get('/', (req, res) => {

});

router.post('/api/burgers', (req, res) => {

});

router.put('/api/burgers/:id', (req, res) => {

});

////--EXPORT ROUTES FOR SERVER--////
module.exports = router;