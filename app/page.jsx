"use client";

import { useState } from "react" 
import Form from "./components/Form"
import Table from "./components/Table"

function HomePage(){   

    const [favLinks, setFavLinks] = useState([])
    
    function handleNewFavLink(favLink){
       
        console.log(favLink, "in HomePage")

        let newFavLink = [...favLinks, favLink]

        setFavLinks(newFavLink)

    }
    return (
        <div>
            <h1> FavLinks </h1>
       
       {/* The Form is responsible for gathering the data
        and alerting the HomePage when it needs to pass it to the table  */}
           
            <Form submitFavLink={handleNewFavLink} /> 
            <Table data={favLinks}/>
            
        </div>
    )
}
export default HomePage