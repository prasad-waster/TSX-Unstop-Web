import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      alert(res.data.message);
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Prasad Waster</h1>
        <p>Full-Stack Developer | Tech Enthusiast</p>
      </header>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Plant Growth Analyzer</h3>
          <p>AI-based plant monitoring tool using image processing.</p>
          <p><strong>Your Role:</strong> AI Developer, Frontend Designer</p>
          <a href="https://github.com/prasad-waster" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <a href="/resume.pdf" download>Download Resume</a>

        <form onSubmit={handleUpload}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} accept=".pdf" />
          <button type="submit">Upload Resume</button>
        </form>
      </section>
    </div>
  );
}

export default App;
