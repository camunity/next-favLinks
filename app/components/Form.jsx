
import {useState} from 'react'  //a hook


function Form(props){
    //state - a way for us to set and reference data that changes in our component
    const[name, setName] = useState("")
    const[URL, setURL] = useState("")

    function handleClick(){
        //alert("Clicked!")
        //reference thae data inside of the input
        //console.log(name, URL)

        //take the last value of the input and send it to the table
        props.submitFavLink({name, URL})
        
    }

    function handleNameInputChange(event){
        //we can use the event object to look at our input
        console.log(event.target.value)
        //alert("input was changed")


        //save this data for later
        setName(event.target.value) //update the state with our data
    }

    function handleURLInputChange(event){
        //we can use the event object to look at our input
        console.log(event.target.value)
        //alert("input was changed")


        //save this data for later
        setURL(event.target.value) //update the state with our data
    }


    return(
        <div> 
            { /* form for the user to input data*/}
            <form>
                <label> Name </label>
                <input type="text" onChange={handleNameInputChange}/> {/*onChange, onSubmit, onClick are event listeners*/}

                <label> URL </label>
                <input type="text" onChange={handleURLInputChange}/>

                    
            </form>
                
                <button onClick={handleClick}> Submit </button> {/*run this function*/}
            </div>
    )
}

export default Form