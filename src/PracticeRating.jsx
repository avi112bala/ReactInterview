import React, { useState } from 'react'

const PracticeRating = (props) => {
    const [rating,setRating]=useState(props.Rating || 2)

    const handleclick=(i)=>{
        if(i===rating){
            setRating(i>props.Rating?i-1:i)
        }else{
            setRating(i)
        }
    }
  return (
    <div>
        {
            [...new Array(props.limit).keys()].map((i)=>(
                <>
                <span key={i} onClick={()=>handleclick(i+1)}>
                    {
                        i<rating?"⭐":<i className='far fa-star'/>
                    }
                </span>
                </>
            ))
        }
    </div>
  )
}

export default PracticeRating