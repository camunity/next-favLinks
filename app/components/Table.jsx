
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
                    props.data.map((favLink ) => {

                        return(<tr key={favLink.name}>
                            <td>{favLink.name}</td>
                            <td>{favLink.URL}</td>
                            <td><button id={favLink.name} onClick={e => props.dataMutate(props.data.filter((favL) => favL.name != e.target.getAttribute("id")))}>remove</button></td>
                        </tr>)

                    })

                }

            </tbody>

        </table>
    )

}

export default Table