
// Components are functions that return some JSX

// JSX is a javascript syntax in react to create our HTML

"use client";

import { useState } from "react"  // Use this to add state to our components
// state lets us keep track of changing date and show it in the components

import Form from "./components/Form" //important
import Table from "./components/Table" //important

function HomePage(){

    const[favLinks, setFavLinks] = useState([])  //creating a new array[]  empty array for now

    function handleNewFavLink(favLink){
        //favLink is an object containing a {name, URL}
        console.log(favLink, "in HomePage")

        let newFavLinks = [...favLinks, favLink]

        setFavLinks(newFavLinks)
    }

    return (
        <div>
            <h1> FavLinks </h1>

            {/*the form is responsible for gathering data and alerting the HomePage when it need it to the table*/}
            <Form submitFavLink={handleNewFavLink}/>  {/*custom component*/}

            { /* a table the user can use to see their submission*/}

            <Table data={favLinks}/>

        </div>
    )
}
export default HomePage