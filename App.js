import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import MainContent from './components/MainContent';

// Import your encryption components
import MessageInput from './components/MessageInput';
import MessageUploader from './components/MessageUploader';
import UploadControl from './components/UploadControls';
import UploadHeader from './components/UploadHeader';
import Header3 from './components/Header3';
import ImageGallerySelection from './components/ImageGallerySelection';
import EncryptedPhotoSuccess from './components/EncryptedPhotoSuccess';
import ResourcesPage from './components/ResourcesPage';
import TeamSection from './components/TeamSection';
import DecryptorHeader from './components/DecryptorHeader';
import ImageDecryptor from './components/ImageDecryptor';
import ResourcesSection from './components/ResourcesSection';
import GeneralResources from './components/GeneralResources';



function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [serverStatus, setServerStatus] = useState('Checking...');

  useEffect(() => {
    fetch('http://localhost:5001/')
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
      const response = await fetch('http://localhost:5001/api/process', {
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

  // Home page content component
  const Home = () => (
    <div className="App-header">
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
    </div>
  );

  // Encrypt page that combines all your encryption components
  const Encrypt = () => (
    <div className="encrypt-container">
      <div className="encrypt-content">
        <MessageUploader />
        <Header3/>
        <ImageGallerySelection/>
        <EncryptedPhotoSuccess/>
      </div>
    </div>
  );
  const Resources = () => (
    <div className="resources-container">
      <div className="resources-content">
       <ResourcesPage/>
       <ResourcesSection/>
       <GeneralResources/>
      </div>
    </div>
  );
  const About = () => (
    <div className="about-container">
      <div className="about-content">
      <TeamSection/>
      </div>
    </div>
  );
  const Decrypt = () => (
    <div className="decrypt-container">
      <div className="decrypt-content">
      <DecryptorHeader/>
      <ImageDecryptor/>
      
      </div>
    </div>
  );

  return (
    <div className="App">
      <Router>
        <Header />
        {/* Main content that will change based on route */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/encrypt" element={<Encrypt />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/decrypt" element={<Decrypt />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
