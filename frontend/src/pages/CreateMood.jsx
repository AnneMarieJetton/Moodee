import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateMood = () => {
    const [rating, setRating] = useState('');
    const [emotion, setEmotion] = useState('');
    const [description, setDescription] = useState('');
    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveMood = () => {
        const data = {
            rating,
            emotion,
            description,
            change
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/moods', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console.');
                console.log(error);
            })
    };

    return (
        <div className = 'p-4'>
            <BackButton />
            <h1 className = 'text-3xl my-4'>Create Mood</h1>
            {loading ? <Spinner /> : ''}
            <div className = 'flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className = 'my-4'>
                    <label className = 'text-xl mr-4 text-gray-500'>rating</label>
                    <input
                        type = 'number'
                        value = {rating}
                        onChange = {(e) => setRating(e.target.value)}
                        className = 'border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className = 'my-4'>
                    <label className = 'text-xl mr-4 text-gray-500'>emotion</label>
                    <input
                        type = 'text'
                        value = {emotion}
                        onChange = {(e) => setEmotion(e.target.value)}
                        className = 'border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className = 'my-4'>
                    <label className = 'text-xl mr-4 text-gray-500'>description</label>
                    <input
                        type = 'text'
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                        className = 'border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className = 'my-4'>
                    <label className = 'text-xl mr-4 text-gray-500'>change</label>
                    <input
                        type = 'text'
                        value = {change}
                        onChange = {(e) => setChange(e.target.value)}
                        className = 'border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className = 'p-2 bg-sky-300 m-8' onClick = {handleSaveMood}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateMood