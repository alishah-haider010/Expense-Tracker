//------Main entry file-------

// Import the main CSS file
import "./App.css";

// Import the Home component (main part of app)
import Home from "./components/Home.jsx";

// Main App component (starting point)
function App() {
  return (
    <div className="container">
      {/* Title of the app */}
      <h1 className="header">Expense Tracker</h1>

      {/* Home component contains all logic and UI */}
      <Home />
    </div>
  );
}

// Export App component to be used in index.jsx
export default App;
