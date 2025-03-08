
"use client";

import { useState } from "react" 
import Form from "./Components/Form"
import Table from "./Components/Table"
import "./styles/home.css"

function HomePage(){

    
    const [favLinks, setFavLinks] = useState([])

    const handleNewLink = (link) => {
        setFavLinks([...favLinks, link])
        console.log(favLinks)
    }   

    return (
        <div className="container">
  
            <h1> Here you can see your Links</h1>

            <Form submitFavLink = {handleNewLink}/>
            <Table links = {favLinks}/>
       
            
        </div>
    )
}
export default HomePage