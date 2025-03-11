
function Table(props){


    return(
        // some code will go in here
        <table>
            {/* table header */}
            <thead>
                <tr>
                    <th> Name</th>
                    <th> URL</th>
                </tr>
            </thead>

            <tbody>
               
    

                {
                    props.data.map((favLink, index)=>{  //to create a function
                     return(<tr key={index}>  {/*key to run perfectly*/}
                        <td>{favLink.name}</td>
                        <td>{favLink.URL}</td>
                    </tr>)
                    })
                    
                }
                
            </tbody>

        </table>

        
    )


}

export default Table