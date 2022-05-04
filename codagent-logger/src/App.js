import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Upload from './components/pages/Upload';
import Image from './components/pages/Image';
import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/SignUp'} element={<SignUp />} />
          <Route exact path={'/SignIn'} element={<SignIn />} />
          <Route exact path={'/Dashboard'} element={<Dashboard />} />
          <Route exact path={'/Upload'} element={<Upload />} />
          <Route exact path={'/Image'} element={<Image />} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
