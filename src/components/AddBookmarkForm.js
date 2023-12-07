import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddBookmarkForm.module.css';


const AddBookmarkForm = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBookmark = { title, url, description };
      const response = await axios.post('/bookmarks', newBookmark);
      console.log(response.data); // Handle the response as desired
      setTitle('');
      setUrl('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
};

export default AddBookmarkForm;