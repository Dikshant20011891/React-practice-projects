import React, { useState } from 'react'
import Title from '../components/Title';
import { FaFaceSmileBeam } from "react-icons/fa6";
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import Pokeimg from './img/HD-wallpaper-pikachu-cute-cartoon-pika-pikachu-thumbnail.jpg';
 
const LikePhotoApp = () => {

    const [like,setLike ] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike = () => {
        if(!like){
            setLike(true);
            setCount(count + 1);
        }else{
            setLike(false);
            setCount(count - 1);
        }
    }

  return (
    <div className='container text-center'>
      <Title text={"Like Photo App"}/>
      <Title classes={"subtitle "} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{width:300 , cursor: "pointer"}}
      >
        <div className="card-header fs-xl">
            <FaFaceSmileBeam className='mr-2'/>
            <small>Pokemon</small>
        </div>
        <img src={Pokeimg} alt="img" style={{height:"fit-content"}} onDoubleClick={toggleLike}/>
        <div className="card-footer fs-xl d-flex" style={{justifyContent:"space-between"}}>
            <AiOutlineComment />{" "}
            {like ? <AiFillHeart className="text-danger" onClick={toggleLike}/> : <AiOutlineHeart onClick={toggleLike}/>}
        </div> 
      </div>
    </div>
  )
}

export default LikePhotoApp
