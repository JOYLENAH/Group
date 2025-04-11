import React, { useState } from 'react';
import axios from 'axios';

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/books/search?query=${searchTerm}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div>
      <h2>Book Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by title, author, or genre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {books.map((book) => (
          <div key={book._id}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;
