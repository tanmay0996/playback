import React from 'react'
import { NavLink } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {
  return (
    <>
    <NavLink  to={`/album/${id}`} className="block">
    <div  className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className=' font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
      </div>
      </NavLink>  
      </>
  )
}

export default AlbumItem
