import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateMood from './pages/CreateMood';
import ShowMood from './pages/ShowMood';
import EditMood from './pages/EditMood';
import DeleteMood from './pages/DeleteMood';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/moods/create' element={<CreateMood />} />
      <Route path='/moods/details/:id' element={<ShowMood />} />
      <Route path='/moods/edit/:id' element={<EditMood />} />
      <Route path='/moods/delete/:id' element={<DeleteMood />} />
    </Routes>
  )
}

export default App
