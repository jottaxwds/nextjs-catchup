'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults, setQuery }) => {
   const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${searchQuery}`);
    const courses = await res.json();
    getSearchResults(courses);
    setQuery(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Search Courses...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};
export default CourseSearch;
