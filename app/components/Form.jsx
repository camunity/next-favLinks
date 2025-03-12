import {useState} from 'react'

function Form(props){

    // state - a way for us to set and reference data that changes in our component
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")
    
    function handleClick(){
        props.submitFavLink({name, URL})

    }


    function handleNameInputChange(event){
        // we can use the event object to look at our input
        console.log(event.target.value)
        // save this data for later
        setName(event.target.value) // update the state with our data 
    }

    function handleURLInputChange(event){
        // we can use the event object to look at our input
        console.log(event.target.value)
        // save this data for later
        setURL(event.target.value) // update the state with our data
    }

    
    return(
        <div>
            {/* Form for the user to input data */}
            <form>
                <label> Name </label>
                <input type="text" onChange={handleNameInputChange}/>

                <label> URL </label>
                <input type="text" onChange={handleURLInputChange}/>
            </form>

            <button onClick={handleClick}> Submit </button>

        </div>
    )
}

export default Form


