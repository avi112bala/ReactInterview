import React, { useState } from "react"

const Search=()=>{
    const [data,setData]=useState(["IronMan","Hockie","wanda","Captain America","Thor","Lokye","Vision"])
    const [search,setSearch]=useState('')
    let searchData=data.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
        <input placeholder="Type to search..." onChange={(e)=>setSearch(e.target.value)} />
        <ul>
        {
            searchData.map((data)=>(
                <li key={data}>{data}</li>
            ))
        }
        </ul>
        </>
    )
}

export default Search