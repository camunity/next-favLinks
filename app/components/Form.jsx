import { useEffect, useState } from 'react';

function Form({ submitFavLink, selectedLink, updateLink }) {
  const [name, setName] = useState('');
  const [URL, setURL] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedLink) {
      setName(selectedLink.name);
      setURL(selectedLink.URL);
      setIsEditing(true);
    }
  }, [selectedLink]);

  function handleClick(e) {
    e.preventDefault();
    const linkData = { name, URL };
    if (isEditing) {
      updateLink(linkData);
      setIsEditing(false);
    } else {
      submitFavLink(linkData);
    }
    setName('');
    setURL('');
  }

  return (
    <form onSubmit={handleClick}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>URL</label>
      <input
        type="text"
        value={URL}
        onChange={(e) => setURL(e.target.value)}
        required
      />
      <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
    </form>
  );
}

export default Form;
