import express from 'express';
import { Mood } from '../models/moodModel.js';

const router = express.Router();

//route for save a new mood
router.post('/', async (request, response) => {
    try {
        
        if (
            !request.body.rating ||
            !request.body.emotion ||
            !request.body.description ||
            !request.body.change
        ) {
            return response.status(400).send({
                message: 'send all required fields: rating, author, description, change',
            });
        }

        const newMood = {
            rating: request.body.rating,
            emotion: request.body.emotion,
            description: request.body.description,
            change: request.body.change
        };

        const mood = await Mood.create(newMood);

        return response.status(201).send(mood);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for get all moods form database
router.get('/', async (request, response) => {
    try {
        const moods = await Mood.find({});

        return response.status(200).json({
            count: moods.length,
            data: moods
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for get one moods from database
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const mood = await Mood.findById(id);

        return response.status(200).json(mood);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for update a mood
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.rating ||
            !request.body.emotion ||
            !request.body.description ||
            !request.body.change
        ) {
            return response.status(400).send({
                message: 'send all required fields: rating, author, description, change',
            });
        }

        const { id } = request.params;

        const result = await Mood.findByIdAndUpdate(id, request.body);

        if (!result){
            return response.status(404).json({ message: 'mood not found' });
        }

        return response.status(200).send({ message: 'Mood updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//delete a mood
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Mood.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Mood not found' });
        }

        return response.status(200).send({ message: 'Mood deleted Successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;