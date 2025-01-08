import React from 'react'

const Child = ({sentdatatoparent}) => {
    const handleclick=()=>{
        const data="Hi from Child Side"
        sentdatatoparent(data)
    }
  return (
    <div>
        <button onClick={handleclick}>Sent message to parent</button>
    </div>
  )
}

export default Child