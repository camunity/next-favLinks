"use client";
import { useState } from "react"
import Form from "./components/Form"
import Table from "./components/Table"




function HomePage(){


   const [favLinks, setnewFavLinks] = useState([])


   function handleNewFavLink(favlink){
       //favlink contains name and url
       console.log(favlink, 'in Homepage')
      
       let newfavLinks = [...favLinks, favlink]   
      
       setnewFavLinks(newfavLinks)
   }
   return (
       <div>
          <h1> FavLinks </h1>


          <Form submitFavLink={handleNewFavLink}/>


          <Table data={favLinks}/>


       </div>  
   )
}
export default HomePage