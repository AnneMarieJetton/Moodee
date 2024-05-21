import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import MoodsCard from '../components/home/MoodsCard';
import MoodsTable from '../components/home/MoodsTable';

import '../styles/Home.css';

const Home = () => {
    const [rating, setRating] = useState('');
    const [emotion, setEmotion] = useState('');
    const [description, setDescription] = useState('');
    const [change, setChange] = useState(false);

    const [moods, setMoods] = useState([]);
    const [loading, setLoading] = useState([]);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/moods')
            .then((response) => {
                setMoods(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        //skeleton code from setup

        // <div className='p-4'>
        //     <div className = 'flex justify-center items-center gap-x-4'>
        //         <button className = 'bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick = {() => setShowType('table')}>
        //             Table
        //         </button>
        //         <button className = 'bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick = {() => setShowType('card')}>
        //             Card
        //         </button>
        //     </div>

        //     <div className='flex justify-between items-center'>
        //         <h1 className='text-3xl my-8'>Moods List</h1>
        //         <Link to='/moods/create'>
        //             <MdOutlineAddBox className='text-sky-800 text-4xl' />
        //         </Link>
        //     </div>
        //     {loading ? <Spinner /> : showType === 'table' ? ( <MoodsTable moods = {moods} /> ) : ( <MoodsCard moods = {moods} /> )}
        // </div>

        <div className = 'Home'>
            <div className = 'HomeCard'>
                <span className='HomeCardText1'>MOODEE</span>
                <span className='HomeCardText2'>A Daily Mood Quiz</span>
            </div>
            <div className = 'HomeButtons'>
                <button className = 'HomeButton'>See The Stats</button>
                <button className = 'HomeButton'>Take The Quiz</button>
            </div>
        </div>
    );
};

export default Home