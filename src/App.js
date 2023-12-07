import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddBookmarkForm from './AddBookmarkForm';
import BookmarksList from './BookmarksList';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await axios.get('/bookmarks');
        setBookmarks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <div>
      <h1>Bookmarks App</h1>
      <AddBookmarkForm />
      <BookmarksList bookmarks={bookmarks} />
    </div>
  );
};

export default App;