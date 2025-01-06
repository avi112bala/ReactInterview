import React, { useState } from 'react'

export default  function Folder({explorer}){
    const [expended,setExpended]=useState(false)
    if(explorer.folderitems){
        return (
            <>
            <div onClick={()=>setExpended(!expended)}>
                {expended?"📂":"📂"}
                {explorer.name}
            </div>
            <div style={{display:expended?"block":"none",paddingLeft:"15px"}}>
                {
                    explorer.folderitems.map((data)=>(
                        <Folder explorer={data}></Folder>
                    ))
                }
            </div>
            </>
          )
    }else{
        return(
            <div>🗄️{explorer.name}</div>
        )
    }
 
}

