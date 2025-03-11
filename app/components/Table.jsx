import { useState } from "react"

function Table(props){
    const [tempFavLinks, setTempFavLinks] = useState([])


    function handleDelete(e){
        let arryIndex = e.target.id
        // setTempFavLinks(props.data.splice(arryIndex, 1))


        
        props.deleteFavLink(arryIndex)
    }

    return(
        // Some code will go in here
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>

                {
                    props.data.map((favLink, index)=>{
                        // console.log("Index => ", index)
                        return(
                            <tr key={index}>
                                <td>{favLink.name}</td>
                                <td>{favLink.URL}</td>
                                <td><button onClick={handleDelete} id={index}> X </button></td>
                            </tr>
                        )
                    })
                }

            </tbody>

        </table>
    )

}

export default Table