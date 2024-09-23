import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TokenLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const username = params.get('username'); // Get the username from the URL
    const name = params.get('name'); // Get the name from the URL

    if (token) {
      localStorage.setItem('access_token', token); // Store token in local storage
      localStorage.setItem('username', username); // Store username in local storage
      localStorage.setItem('name', name); // Store name in local storage

      // Ensure the token and name are stored before redirecting
      setTimeout(() => {
        navigate('/'); // Redirect to dashboard
      }, 400); // Delay for 100ms to ensure token is stored
    } else {
      navigate('/login'); // Redirect to login if no token or name
    }
  }, [navigate]);

  return null; // No UI needed for this component
};

export default TokenLogin;
