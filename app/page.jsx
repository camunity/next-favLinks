"use client";

import { useEffect, useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [favLinks, setFavLinks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function submitFavLink(link) {
    setFavLinks([...favLinks, link]);
  }

  function deleteLink(index) {
    const updated = favLinks.filter((_, i) => i !== index);
    setFavLinks(updated);
  }

  function editLink(index) {
    setSelectedIndex(index);
  }

  function updateLink(updatedLink) {
    const updatedLinks = favLinks.map((link, i) =>
      i === selectedIndex ? updatedLink : link
    );
    setFavLinks(updatedLinks);
    setSelectedIndex(null);
  }

  if (!isClient) return null;

  return (
    <div>
      <h1>FavLinks</h1>
      <Form
        submitFavLink={submitFavLink}
        selectedLink={selectedIndex !== null ? favLinks[selectedIndex] : null}
        updateLink={updateLink}
      />
      <Table data={favLinks} deleteLink={deleteLink} editLink={editLink} />
    </div>
  );
}

export default HomePage;