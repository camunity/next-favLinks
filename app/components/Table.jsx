function Table(props){


    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
            {
                props.data.map((favlink, index)=>{
                   
              
                return(<tr key={index}>
                    <td>{favlink.name}</td>
                    <td>{favlink.url}</td>
                </tr>
                )
 
 
            })
        }
            </tbody>
 
 
        </table>
    )
 
 
 
 
 
 
 
 
 }
 export default Table