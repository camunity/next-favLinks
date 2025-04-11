// Components are functions that return some JSX

// JSX is a javascript syntax in React to create our HTML elements

"use client";

import { useState, useEffect } from "react" // we use this to add state to our components
// state lets us keep track of changing data and show it in the component

import Form from "./components/Form"
import Table from "./components/Table"

function HomePage(){   

    // To do: connect to our database to get the saved favlinks

    async function getData(){
        let url = "http://localhost:8000/favlinks"

        //use the fetch api to call this URL and get the data.

        let response = await fetch(url)

        let data = await response.json()

        //console.log(data)

        setFavLinks(data)
    }

    useEffect(() =>{
        // if you want to trgger a function when a compenent fully loads
        // create a useEffect and call whatever you need

        getData()

    }, [])

//    // async function createFavLink(){
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const raw = JSON.stringify({
//             "name": name,
//             "URL": URL
//         });

//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: raw,
//             redirect: "follow"

//         };

//         let response = await fetch("localhost:8000/favlink", requestOptions)
//     //}

    getData()

    const [favLinks, setFavLinks] = useState([])
    
    function handleNewFavLink(favLink){
        // favlink is an object containing a {name, URL}

        console.log(favLink, "in HomePage")

        let newFavLinks = [...favLinks, favLink]
        

        setFavLinks(newFavLinks)
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