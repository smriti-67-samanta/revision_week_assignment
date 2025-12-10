import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Notes from './components/Notes';
import NoteDetail from './components/NoteDetail';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/projects" element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          } />
          
          <Route path="/projects/:projectId" element={
            <ProtectedRoute>
              <ProjectDetail />
            </ProtectedRoute>
          } />
          
          <Route path="/notes" element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          } />
          
          <Route path="/notes/:noteId" element={
            <ProtectedRoute>
              <NoteDetail />
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          <Route path="/" element={<Navigate to="/projects" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;