import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookmarksList = () => {
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
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id}>
          <h3>{bookmark.title}</h3>
          <p>{bookmark.description}</p>
          <a href={bookmark.url}>Visit Website</a>
          {}
        </div>
      ))}
    </div>
  );
};

export default BookmarksList;