import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [message,setMesage]=useState('')
    const handlecleclick=(data)=>{
        setMesage(data)
    }
  return (
    <div>Parent
        <p>Sent data from child: {message}</p>
        <Child sentdatatoparent={handlecleclick}/>
    </div>
  )
}

export default Parent