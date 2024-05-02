import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { Mood } from './models/moodModel.js';
import moodsRoute from './routes/moodsRoute.js';

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling CORS policy
//Option 1: Allow All Origins with Default of cors(*)

app.use(cors());

//Option 2: Allow custom Origins

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/moods', moodsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
    });