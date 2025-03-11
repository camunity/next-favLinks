function Table(props){

    return(
        <table>
            {/* Table Header */}
            <thead>
            
            </thead>
            <tbody>
                {
                props.data.map((favLink, index)=>{
                return(<tr key={index}>
                <td>{favLink.name}</td>
                <td>{favLink.URL}</td>
                </tr>)})
                }
                
            </tbody>

        </table>
    )
}
export default Table