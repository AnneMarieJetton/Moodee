import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const MoodsTable = ({ moods }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>
                        Author
                    </th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>
                        Publish Year
                    </th>
                    <th className='border border-slate-600 rounded-md'>Operations</th>
                </tr>
            </thead>

            <tbody>
                {moods.map((mood, index) => (
                    <tr key={mood._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {mood.rating}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {mood.description}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {mood.change}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/moods/details/${mood._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800' />
                                </Link>
                                <Link to={`/moods/edit/${mood._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-800' />
                                </Link>
                                <Link to={`/moods/delete/${mood._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-800' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MoodsTable