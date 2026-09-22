import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { useTheme } from './hooks/useTheme'
import Profile from './components/Profile'
import Note from './components/Note'
import NoteForm from './components/NoteForm'



const App = () => {
  const { theme } = useTheme();
  const [viewNote, setviewNote] = useState(false)
  const [noteId, setnoteId] = useState(null)
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [owner, setOwner] = useState(null)
  const isDark = theme === "dark";
  const themeStyles = isDark
    ? "border-violet-400/20 bg-gradient-to-br from-violet-900 via-indigo-950 to-slate-900 text-white"
    : "border-violet-200 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50 text-zinc-900";

  return (
    <div className={` h-screen w-full flex justify-center items-center ${themeStyles}`}>
      <Routes>
        <Route path='/' element={<Home themeStyles={themeStyles} />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile
                setShowCreateNote={() => setShowCreateNote(true)}
                themeStyles={themeStyles}
                setnoteId={setnoteId}
                onViewNote={() => setviewNote(true)}
                owner ={owner}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard
              setOwner={setOwner}
                setShowCreateNote={() => setShowCreateNote(true)}
                showCreateNote={showCreateNote}
                themeStyles={themeStyles}
                setnoteId={setnoteId}
                setviewNote={() => setviewNote(true)}
                onViewNote={() => setviewNote(true)}
              />
            </ProtectedRoute>
          }
        />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Note/> */}
      {viewNote && (
        <Note onClose={() => setviewNote(false)} setOwner={setOwner} noteId={noteId} themeStyles={themeStyles} />)}
      {showCreateNote && (
        <NoteForm onClose={() => setShowCreateNote(false)} />)}
    </div>
  )
}

export default App