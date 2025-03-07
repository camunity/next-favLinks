
function Table(props){

    function handleDelete(){
    }

    return(
        // Some code will go in here
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    {/* <th>Edit</th> */}
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Github</td>
                    <td>https://www.github.com</td>
                    <td><button onClick={handleDelete}> X </button></td>
                </tr>

                <tr>
                    <td>Google</td>
                    <td>https://www.google.com</td>
                    <td><button onClick={handleDelete}> X </button></td>
                </tr>

                <tr>
                    <td>Amazon</td>
                    <td>https://www.amazon.com</td>
                    <td><button onClick={handleDelete}> X </button></td>
                </tr>

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