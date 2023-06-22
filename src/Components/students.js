import React, { useState } from 'react';

function StudentForm() {
  const [studentName, setStudentName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [gender, setGender] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [course, setCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="studentName">Student Name:</label>
      <input type="text" id="studentName" name="studentName" value={studentName} onChange={(event) => setStudentName(event.target.value)} required />
      <br />
      <label htmlFor="schoolName">School Name:</label>
      <textarea id="schoolName" name="schoolName" value={schoolName} onChange={(event) => setSchoolName(event.target.value)} required />
      <br />
      <label>Gender:</label>
      <label htmlFor="male">Male</label>
      <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(event) => setGender(event.target.value)} required />
      <label htmlFor="female">Female</label>
      <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(event) => setGender(event.target.value)} required />
      <br />
      <label>Subjects:</label>
      <label htmlFor="math">Math</label>
      <input type="checkbox" id="math" name="subjects" value="math" checked={subjects.includes('math')} onChange={(event) => {
        const isChecked = event.target.checked;
        setSubjects((prevSubjects) => {
          if (isChecked) {
            return [...prevSubjects, 'math'];
          } else {
            return prevSubjects.filter((subject) => subject !== 'math');
          }
        });
      }} required /><br />
      <label htmlFor="science">Science</label>
      <input type="checkbox" id="science" name="subjects" value="science" checked={subjects.includes('science')} onChange={(event) => {
        const isChecked = event.target.checked;
        setSubjects((prevSubjects) => {
          if (isChecked) {
            return [...prevSubjects, 'science'];
          } else {
            return prevSubjects.filter((subject) => subject !== 'science');
          }
        });
      }} required />

      <br />
      <label htmlFor="history">History</label>
      <input type="checkbox" id="history" name="subjects" value="history" checked={subjects.includes('history')} onChange={(event) => {
        const isChecked = event.target.checked;
        setSubjects((prevSubjects) => {
          if (isChecked) {
            return [...prevSubjects, 'history'];
          } else {
            return prevSubjects.filter((subject) => subject !== 'history');
          }
        });
      }} required />
<br />
      <label htmlFor="course">Course:</label>
      <select id="course" name="course" value={course} onChange={(event) => setCourse(event.target.value)} required>
        <option value="">--Please select a course--</option>
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="history">History</option>
      </select>
<br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;