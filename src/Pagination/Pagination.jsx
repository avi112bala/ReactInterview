import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import "../style.css"

const Pagination = () => {
    const [items, setItems] = useState([])
    const [currentpage, setCurrentPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const itemperpage = 10
    const API_URL = "https://jsonplaceholder.typicode.com/posts"

    const fetchdata = async (page) => {
        try {
            const response = await fetch(`${API_URL}?_page=${page + 1}&_limit=${itemperpage}`)
            const data = await response.json()
            const totalitems = response.headers.get("x-total-count")
            setItems(data)
            setTotalPage(Math.ceil(totalitems / itemperpage))
        } catch (error) {
            console.log(error);
        }
    }

    const handleclick = ({selected} ) => {
        setCurrentPage(selected)
        fetchdata(selected)
    }
    useEffect(() => {
        fetchdata(currentpage)
    }, [currentpage])
    return (
        <div>
            <h1>Paginated Data</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <ReactPaginate
                pageCount={totalPage}
                onPageChange={handleclick}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </div>
    )
}

export default Pagination