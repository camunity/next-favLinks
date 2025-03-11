import {useState} from 'react'
function Form(props){

    const [name, setName] = useState("")
    const [URL, setURL] = useState("")

    function handleClick(){
          //  console.log(name, URL);
            props.submitFavLink({ name, URL });

    }

    function handleNameInputChange(event){
        console.log(event.target.value) 
        setName(event.target.value)  
    }

    function handleURLnputChange(event){
        console.log(event.target.value) 
        setURL(event.target.value)  
    }

    return(

        <div>
            <form>
                <label>Name </label>
                <input type="next" onChange={handleNameInputChange}/>

                <label> URL </label>
                <input type="next" onChange={handleURLnputChange}/>
            </form>

            <button onClick={handleClick}>Submit</button>
        </div>
    )

}
export default Form