const express = require('express');
const Movie = require('../model/Movie');

const router = express.Router();

router.get('/getAll', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Movie.find()); 
});

router.get('/getAllByKeyword/:keywords', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Movie.find({keywords: request.params.keywords})); 
    
});

router.post('/create', async (request, response, next) => {
    try {

        if (Object.keys(request.body).length == 0) return next({ 
            statusCode: 400, 
            message: 'Body cannot be empty' 
        });

        const message = new Movie(request.body);
        await message.save(); 

        response.status(201).json(message);
    } catch (err) {
        next(err);
    }
});

module.exports = router;