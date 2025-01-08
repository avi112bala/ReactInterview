import React, { useRef } from 'react'

const Unctrl=()=>{
    const myref=useRef();
    const handleclick=(event)=>{
        event.preventDefault();
        alert(myref.current.value)
    }
    return (
        <>
        <form onSubmit={handleclick}>
            <lable>Name</lable>
            <input type='text' ref={myref}/>
            <button type='submit'>Ref Data</button>
        </form>
        </>
    )
}

export default Unctrl