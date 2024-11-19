import React from "react";
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import Display from "./Components/Display";
import { useContext } from "react";
import {PlayerContext} from "./Context/PlayerContext"
const App = () => {

  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className="h-[100vh] w-[100vw] ">
      <div className="flex w-[100%] h-[90%]">
        <div className="h-[100%] w-[25%]  bg-black">
          <Sidebar />
        </div>
        <div className=" w-[75%] h-[100%] bg-black">
          <Display />
        </div>
      </div>

      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto" ></audio>
    </div>
  );
};

export default App;
