import React, { useState } from "react"

const Crousel=()=>{
    const [currentitem,setCurrentitem]=useState(0)
   const items= [
        {
          id: 1,
          imageUrl:
            'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Item 1',
          description: 'Description of item 1',
        },
        {
          id: 2,
          imageUrl:
            'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Item 2',
          description: 'Description of item 2',
        },
        {
          id: 3,
          imageUrl:
            'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Item 3',
          description: 'Description of item 3',
        },
      ];

    function nextButton (){
        console.log(items.length);
        if(currentitem === items.length -1){
            setCurrentitem(0)
        }else{
            setCurrentitem((curr)=>curr +1)
        }
        console.log(currentitem);
    }
    function prevButton (){
        if(currentitem ===0){
            setCurrentitem(items.length -1)
        }else{
            setCurrentitem((curr)=>curr-1)
        }
    }
    return (
        <>
        <div>
            <button onClick={prevButton} >Prev</button>
            <div>
            <img src={items[currentitem].imageUrl}/>
            </div>
            <button onClick={nextButton}>Next</button>
        </div>
        
        </>
    )
}


export default Crousel