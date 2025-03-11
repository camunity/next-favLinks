
"use client";

import { useState } from "react" 


import Form from "./components/Form"
import Table from "./components/Table"

function HomePage(){
    
    const [favLinks, setFavLinks] = useState([])

    function handleNewFavLink(favLink){
    console.log(favLink, "in HomePage")
    let newFavLinks = [...favLinks, favLink]
    setFavLinks(newFavLinks)
   } 

    return (
        <div>
            <h1> FavLinks </h1>
            <Form submitFavLink={handleNewFavLink}/>
            
            {/*a table the user can use to see their submission */}
            <Table data={favLinks}/>
        </div>
    )
}
export default HomePage