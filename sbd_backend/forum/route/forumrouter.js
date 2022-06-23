const express = require('express');
const { builtinModules } = require('module');
const Forum = require('../model/Forumdb');

const router = express.Router();

router.get('/getAll', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Forum.find()); 
});

router.post('/create', async (request, response, next) => {
    try {

        if (Object.keys(request.body).length == 0) return next({ 
            statusCode: 400, 
            message: 'Body cannot be empty' 
        });

        const message = new Forum(request.body);
        await message.save(); 

        response.status(201).json(message);
    } catch (err) {
        next(err);
    }
});
module.exports = router;

// router.delete('/delete/:id', async (request, response, next) => {
//     const id = request.params.id;

//     const turtle = await Turtle.findByIdAndDelete(id);

//     if (turtle) {
//         response.status(200).json(turtle);
//     } else {
//         next({ statusCode: 404, message: `Turtle with id ${id} does not exist`});
//     }
// });
// 