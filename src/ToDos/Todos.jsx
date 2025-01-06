import React, { useState } from 'react'

const Todos = () => {
    const [data, setData] = useState(["any", "ironman"])
    const [text, setText] = useState("")

    const addTask = () => {
        if (!data.includes(text) && text.length > 0) {
            setData([...data, text])
        }
    }
    const deleteTask = (j) => {
        setData(data.filter((i) => i !== j))
    }
    const editTask = (j) => {
        setText(j)
        setData(data.filter((i)=>i !== j))
    }
    return (
        <div>
            <input value={text} type='text' onChange={(e) => setText(e.target.value)} />
            <button onClick={addTask}>Add Task</button>

            <ul>
            {console.log(data)}
                {
                    data.map((data) => (
                        <> 
                            <li key={data}>{data}
                                <button onClick={() => deleteTask(data)}>Delete</button>
                                <button onClick={() => editTask(data)}>Edit</button>
                            </li>
                        </>

                    ))
                }
            </ul>
        </div>
    )
}

export default Todos