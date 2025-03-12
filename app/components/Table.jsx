
function Table(props){

    return(
        // Some code will go in here
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>

            <tbody>
                
                {
                    props.data.map((favLink,i)=>{
                       
                       return (<tr key={i}>
                            <td>{favLink.name}</td>
                            <td>{favLink.URL}</td>
                
                        </tr> )
                
                     })
                }

            </tbody>

        </table>
    )

}

export default Table