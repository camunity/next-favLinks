
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
               props.data.map((favLink, index) => {

                //map over the data and return a table row for each item
              
                     return (
                          <tr key={index}>
                            <td>{favLink.name}</td>
                            <td>{favLink.URL}</td>
                          </tr>
                     )
              
                })
            }

            </tbody>

        </table>
    )

}

export default Table