'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import Courses from './componets/Courses';
import CourseSearch from './componets/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome Jottax WDS</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} setQuery={setQuery}/>
      <Courses courses={courses} query={query}/>
    </>
  );
};
export default HomePage;
