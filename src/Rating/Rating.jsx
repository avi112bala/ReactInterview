import React, { useState } from "react";

const Rating=(Props)=>{
    const [rating,setRating]=useState(Props.rating || 2)
    const handleClick =(i)=>{
        if(i === rating){
            setRating(i>Props.rating?i-1:i)
        }else{
            setRating(i);
        }
        
    }
    return (
        <>
        <div>
            {
                [...new Array(Props.limit).keys()].map((i)=>(
                    <span key={i} onClick={()=>handleClick(i+1)}> 
                    {
                       
                        i<rating ?"⭐":<i class="far fa-star"></i>
                    }
                    
                    </span>
                ))
            }
       
        </div>
        </>
    )
}



















export default Rating