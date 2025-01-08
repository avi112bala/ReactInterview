import React, { useState } from 'react'

const Ctrl = () => {
    const [data,setData]=useState('')
    const handlechange=(e)=>{
        setData(e.target.value)
   
    }
    const handleclick=()=>{
        alert(data)
    }
  return (
    <div>Ctrl
        <form onSubmit={handleclick}>
    <input
    type='text'
    value={data}
    onChange={handlechange}
    />
    <button type='submit'>Click me</button>
        </form>
    </div>
  )
}

export default Ctrl