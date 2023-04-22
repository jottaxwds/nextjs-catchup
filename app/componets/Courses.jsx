import { Highlighting } from '@jottaxwds/react-highlighting';
import Link from 'next/link';

const Courses = ({ courses, query }) => {
  return (
    <div className='courses'>
      {courses.map((course) => (
        <div key={course.id} className='card'>
          <h2><Highlighting termsToHighlight={query}>{course.title}</Highlighting></h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target='_blank' className='btn'>
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Courses;
