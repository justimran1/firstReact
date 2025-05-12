import React from "react";

function App() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Imran's Portfolio</h1>
      <img
        src="nav.jpg"
        alt="Profile"
        className="rounded-circle mb-3"
      />
      <p className="lead">Aspiring Full-Stack Developer | React & Bootstrap Enthusiast</p>
      
      <hr />

      <div className="text-start mt-4">
        <h3>About Me</h3>
        <p>
          Hello! I'm Imran, passionate about building web apps. I'm exploring React.js and learning full-stack development.
        </p>

        <h3>Contact</h3>
        <ul>
          <li>Email: imran@example.com</li>
          <li>GitHub: github.com/yourusername</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
