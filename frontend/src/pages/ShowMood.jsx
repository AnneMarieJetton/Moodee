import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner';

const ShowMood = () => {
    const [mood, setMood] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/moods/${id}`)
            .then((response) => {
                setMood(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    return (
        <div className = 'p-4'>
            <BackButton />
            <h1 className = 'text-3xl my-4'>Show Mood</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className = 'flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className = 'my-4'>
                        <span className = 'text-xl mr-4 text-gray-500'>Id</span>
                        <span>{mood._id}</span>
                    </div>
                    <div className = 'my-4'>
                        <span className = 'text-xl mr-4 text-gray-500'>Rating</span>
                        <span>{mood.rating}</span>
                    </div>
                    <div className = 'my-4'>
                        <span className = 'text-xl mr-4 text-gray-500'>emotion</span>
                        <span>{mood.emotion}</span>
                    </div>
                    <div className = 'my-4'>
                        <span className = 'text-xl mr-4 text-gray-500'>Description</span>
                        <span>{mood.description}</span>
                    </div>
                    <div className = 'my-4'>
                        <span className = 'text-xl mr-4 text-gray-500'>Change</span>
                        <span>{mood.change}</span>
                    </div>
                    <div className = 'my-4'>
                        <span className = 'text-xl mr-4 text-gray-500'>Create Time</span>
                        <span>{new Date(mood.createdAt).toString()}</span>
                    </div>
                    <div className = 'my-4'>
                        <span className = 'text-xl mr-4 text-gray-500'>Last Update Time</span>
                        <span>{new Date(mood.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowMood