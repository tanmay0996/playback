import { createContext, useEffect, useRef,useState } from "react";
import { songsData } from "../assets/assets";

 export const PlayerContext=createContext();

const PlayerContextProvider=(props) => {


    const audioRef = useRef();
    const seekBg=useRef();
    const seekBar=useRef();

    const [track, settrack] = useState(songsData[0])
    const [playStatus, setplayStatus] = useState(false)
   const [time, setTime] = useState({
    currentTime:{
        second:0,
        minute:0
    },
    totalTime:{
        second:0,
        minute:0
    }
   })

   const play=() => {
    audioRef.current.play();
    setplayStatus(true)
     
   }
   const pause=() => {
    audioRef.current.pause();
    setplayStatus(false)
     
   }


   const playWithId=async (id) => {
     await settrack(songsData[id]);
     await audioRef.current.play();
     setplayStatus(true)

     
   }
   
   const previous=async () => {
    if(track.id>0){
        await settrack(songsData[track.id-1])
        await audioRef.current.play();
        setplayStatus(true);
    }
     
   }
   const next=async () => {
    if(track.id<songsData.length-1){
        await settrack(songsData[track.id+1])
        await audioRef.current.play();
        setplayStatus(true);
    }
     
   }
   
   
   useEffect(() => {
    setTimeout(() => {
        
        audioRef.current.ontimeupdate=() => {
            seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
          setTime({
            currentTime:{
                second:Math.floor(audioRef.current.currentTime%60),
                minute:Math.floor(audioRef.current.currentTime/60)
            },
            totalTime:{
                second:Math.floor(audioRef.current.duration%60),
                minute:Math.floor(audioRef.current.duration/60)
            }
           }

          )
        }
        
    }, 1000);    
     
   }, [audioRef])
   
   

const contextValue={   //yaha joh bhhi fun , state banege voh kisi bhi file may access kar sakege

        audioRef,
        seekBar,
        seekBg,
        track,settrack,
        playStatus,setplayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,next

    }


    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
        
    
  
}
export default PlayerContextProvider;
