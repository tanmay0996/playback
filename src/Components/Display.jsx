import React from 'react'
import { Routes, Route,  } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';

const Display = () => {

  
  return (
    <>
      <div   className='w-[100%] h-[94%] my-[1%] rounded bg-black text-white overflow-auto'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
      </div>
      </>
  )
}

export default Display