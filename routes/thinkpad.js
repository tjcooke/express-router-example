const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/thinkpad');
// Create the router
const thinkpadRoutes = Router();

thinkpadRoutes.get('/', retrieveAll);

thinkpadRoutes.post('/', create);

thinkpadRoutes.put('/', update);

thinkpadRoutes.delete('/', deleteOne);

// Export the router
module.exports = thinkpadRoutes;