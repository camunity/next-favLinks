// Components are functions that return some JSX

// JSX is a javascript syntax in React to create our HTML elements

"use client";

import { useState } from "react" // we use this to add state to our components
// state lets us keep track of changing data and show it in the component

import Form from "./components/Form"
import Table from "./components/Table"

function HomePage(){   

    const [favLinks, setFavLinks] = useState([])
    
    function handleNewFavLink(favLink){
        // favlink is an object containing a {name, URL}

        console.log(favLink, "in HomePage")

        let newFavLinks =[...favLinks, favLink]



        setFavLinks(newFavLinks)
    }

    function handleDelete(arrysIndex){
        // favlink is an object containing a {name, URL}
        favLinks.splice(arrysIndex, 1)

        setFavLinks(favLinks)
    }
    

    return (
        <div>
            <h1> FavLinks </h1>
       
       {/* The Form is responsible for gathering the data
        and alerting the HomePage when it needs to pass it to the table  */}
           
            <Form submitFavLink={handleNewFavLink} /> 

            
            
            <Table data={favLinks} deleteFavLink={handleDelete} />
            


        </div>
    )
}
export default HomePage