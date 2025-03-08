import React from 'react'
import "../styles/home.css"
const Form = (props) => {

    const [name, setName] = React.useState('')
    const [url, setUrl] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitFavLink({name, url})
        console.log({name,url})
    }

    const handleInputChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else {
            setUrl(e.target.value)
        }
    }

  return (
    <div >
        <form className='form-container'>
            <label>Link Name:</label>
            <input type="text" name="name" onChange={handleInputChange}/>
            <label>Link URL:</label>
            <input type="text" name="url" onChange={handleInputChange}/>
            <button onClick ={handleSubmit} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form