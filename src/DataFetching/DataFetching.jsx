import React, { useEffect, useState } from "react";
const URL="https://reqres.in/api/users"

export const DataFetching=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch(URL)
        .then((res)=>res.json())
        .then((data)=>{
            const retrivedata=data.data.sort((a,b)=>a.first_name.localeCompare(b.first_name))
            setData(retrivedata)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>(
                        <tr key={index}>
                            <td><img src={item.avatar}/></td>
                            <td>{item.first_name} {item.last_name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}