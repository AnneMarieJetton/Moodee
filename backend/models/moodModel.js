import mongoose from "mongoose";

const moodSchema = mongoose.Schema(
    {
        //rate your day on a scale of 1-10
        rating: {
            type: Number,
            required: true,
        },
        //what were the top 3 emotions you felt today?
        emotion: {
            type: Array,
            required: true,
        },
        //Describe your day in 10 words
        description: {
            type: String,
            required: true,
        },
        //If you could change how today went, would you?
        change: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Mood = mongoose.model('Mood', moodSchema);