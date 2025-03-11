import { useState } from "react";
function Form(props){


  


   //state - a way to store data in a component
   const [name, setName] = useState("")
   const [url, setUrl] = useState("")




   function handleClick(){
       //reference the data inside of the input
       props.submitFavLink({name, url})
   }


   function handleNameInputChange(event){
       console.log(event.target.value)
       setName(event.target.value)
   }
   function handleURLInputChange(event){
       console.log(event.target.value)
       setUrl(event.target.value)
   }




   return(
       <div>
           <form>
               <label> Name </label>
               <input type ="text" onChange={handleNameInputChange} />


               <label> URL </label>
               <input type="text" onChange={handleURLInputChange}/>


           </form>
        <button onClick={handleClick}> Submit </button>


       </div>    
   )


}
export default Form;