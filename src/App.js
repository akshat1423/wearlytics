import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TokenLogin from './components/TokenLogic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/token-login" element={<TokenLogin />} />
          {/* Pass setUserId as a prop to the Login component */}
          <Route path="/login" element={<Login setUserId={setUserId} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
