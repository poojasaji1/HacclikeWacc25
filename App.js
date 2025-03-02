import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [serverStatus, setServerStatus] = useState('Checking...');

  // Check if the server is running when the component mounts
  useEffect(() => {
    fetch('http://localhost:5001/')  // Updated port to 5001
      .then(response => {
        if (response.ok) {
          setServerStatus('Connected');
        } else {
          setServerStatus('Running, but returned an error');
        }
      })
      .catch(err => {
        setServerStatus('Not connected. Make sure Flask is running on port 5001');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      console.log('Sending request to Flask server...');
      const response = await fetch('http://localhost:5001/api/process', {  // Updated port to 5001
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Response data:', data);
      setResult(data.result);
    } catch (error) {
      console.error('Error details:', error);
      setError(`Error: ${error.message}. Check console for details.`);
      setResult('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Processor</h1>
        <div className="server-status">
          Server Status: <span className={serverStatus === 'Connected' ? 'connected' : 'disconnected'}>
            {serverStatus}
          </span>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter some text..."
            className="text-input"
          />
          <button type="submit" disabled={isLoading || serverStatus !== 'Connected'}>
            {isLoading ? 'Processing...' : 'Process Text'}
          </button>
        </form>
        
        {error && (
          <div className="error">
            {error}
          </div>
        )}
        
        {result && (
          <div className="result">
            <h2>Result:</h2>
            <p>{result}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;