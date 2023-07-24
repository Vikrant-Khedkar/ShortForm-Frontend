import {React,useState,useEffect} from "react";
import axios from 'axios';
import VideoCard from "./videocard/videocard";
import './videoview.css';

const VideoView =() =>{
    const [video,setVideo] = useState([]);
    useEffect(() =>{
        fetchVideo();
    },[]);
    const fetchVideo = () =>{
        axios
        .get('http://127.0.0.1:8000/api/videos/')
        .then((res)=>{
            console.log(res);
            setVideo(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    return(
        <div className="container">
        <div className="videoview">
         {video.map((video)=>(
            <VideoCard title={video.title} source={video.video_file} desc={video.description}></VideoCard>

         ))}

            
        </div>
        </div>
    )
}

export default VideoView;