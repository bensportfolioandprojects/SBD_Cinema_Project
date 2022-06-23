const express = require('express');
const Booking = require('../model/Booking');

const router = express.Router();

router.get('/getAll', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Booking.find()); 
});

router.get('/getAllByName/:username', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Booking.find({username: request.params.username})); 
    
});

router.post('/create', async (request, response, next) => {
    try {

        if (Object.keys(request.body).length == 0) return next({ 
            statusCode: 400, 
            message: 'Body cannot be empty' 
        });

        const message = new Booking(request.body);
        await message.save(); 

        response.status(201).json(message);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
