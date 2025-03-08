import React from 'react'

const Table = ({links}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Link Name</th>
                    <th>Link URL</th>
                </tr>
            </thead>
            <tbody>
                {links.map((link, index) => (
                    <tr key={index}>
                        <td>{link.name}</td>
                        <td>{link.url}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table