import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [objective, setObjective] = useState('');
      const [constraints, setConstraints] = useState('');
      const [results, setResults] = useState('');

      const handleObjectiveChange = (event) => {
        setObjective(event.target.value);
      };

      const handleConstraintsChange = (event) => {
        setConstraints(event.target.value);
      };

      const handleSubmit = () => {
        // Handle problem submission here
        // For now, just set a placeholder result
        setResults('Solution: ... (placeholder)');
      };

      return (
        <div className="app">
          <header className="header">
            <div className="icon">{/* Icon will go here */}</div>
            <h1>Optimization Tool</h1>
          </header>
          <main className="content">
            <div className="sidebar">
              <h2>Results</h2>
              <pre>{results}</pre>
              {/* Add save functionality here */}
            </div>
            <div className="main-section">
              <div className="problem-box">
                <div className="input-section">
                  <label htmlFor="objective">Objective Function:</label>
                  <textarea
                    id="objective"
                    value={objective}
                    onChange={handleObjectiveChange}
                  />

                  <label htmlFor="constraints">Constraints:</label>
                  <textarea
                    id="constraints"
                    value={constraints}
                    onChange={handleConstraintsChange}
                  />
                </div>
                <button onClick={handleSubmit} className="solve-button">
                  Solve
                </button>
              </div>
            </div>
          </main>
        </div>
      );
    }

    export default App;
