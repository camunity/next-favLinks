
function Table(props) {
    return (
      // some code will go here 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.data.map((favLink, index) => (
                        <tr key={index}>
                            <td>{favLink.name}</td>
                            <td>{favLink.URL}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;
