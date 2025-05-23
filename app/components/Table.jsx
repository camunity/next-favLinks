function Table({ data, deleteLink, editLink }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((link, index) => (
          <tr key={index}>
            <td>{link.name}</td>
            <td>
              <a href={link.URL} target="_blank" rel="noreferrer">
                {link.URL}
              </a>
            </td>
            <td>
              <button onClick={() => editLink(index)}>Edit</button>
              <button onClick={() => deleteLink(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;