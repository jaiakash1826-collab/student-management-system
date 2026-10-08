import { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <h1 className="header">
      Student Management System
    </h1>
  );
}

function StudentProfile({ name, department, year, practiceCount }) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <div className="profile">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p>
        <strong>Practice Sessions Completed:</strong>{" "}
        {practiceCount}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      © 2026 Student Management System
    </footer>
  );
}

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  const completePractice = () => {
    setPracticeCount(practiceCount + 1);
  };

  const resetPractice = () => {
    setPracticeCount(0);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <Header />

      <div className="container">
        {showProfile && (
          <StudentProfile
            name={studentName}
            department={studentDepartment}
            year={studentYear}
            practiceCount={practiceCount}
          />
        )}

        <div className="buttons">
          <button onClick={completePractice}>
            Complete Practice
          </button>

          <button onClick={resetPractice}>
            Reset
          </button>

          <button onClick={toggleProfile}>
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
