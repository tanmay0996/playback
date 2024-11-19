import React from "react";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[100%] h-[100%] p-2 flex-col gap-2 text-white hidden lg:flex ">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify around">
        <div className="flex gap-3 p-1  scale-75">
          <img className="w-8" src={assets.home_icon} alt="" />
          <p className="font-bold text-2xl">Home</p>
        </div>
        <div className="flex gap-3 p-1  scale-75">
          <img className="w-8" src={assets.search_icon} alt="" />
          <p className="font-bold text-2xl">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[80%] rounded p-2 flex flex-col gap-3">
        <div className=" w-[100%] h-[15%] justify-between flex items-center   ">
            <div className="flex  scale-75 gap-2 relative right-5">
            <img  className="w-8 "src={assets.stack_icon} alt="" />
            <p className="font-bold text-2xl">Your Library</p>
            </div>
            <div className="flex  scale-75 gap-2 ">
            <img className="w-8" src={assets.arrow_icon} alt="" />
            <img  className="w-8"src={assets.plus_icon} alt="" />
            </div>
        </div>
        <div className=" w-[100%] h-[30%] p-2 flex flex-col gap-2" >
            <div>
               <p className="font-bold ">Create your playlist</p> 
               <p className="text-sm">it's easy we will help you</p>
            </div>
            <div className="  "><button className="bg-slate-50 rounded-full text-black p-1.5 text-xs ">Create Playlist</button></div>
            
        </div>
        <div className=" w-[100%] h-[30%] p-2 flex flex-col gap-2" >
            <div>
               <p className="font-bold ">Let's find some podcasts to follow</p> 
               <p className="text-sm">We'll keep you updated on new episodes</p>
            </div>
            <div className="  "><button className="bg-slate-50 rounded-full text-black p-1.5 text-xs ">Browse podcasts</button></div>
            
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
