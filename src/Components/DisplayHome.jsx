import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItems from "./SongItems";

const DisplayHome = () => {
  return (
    <>
      <div className=" w-[100%] h-[15%] p-2 ">
        <Navbar />
      </div>

      <div className="mt-1">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-1">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
         {songsData.map((item,index) => {
          return(
            <SongItems key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>
          )
           
         }
         )}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
