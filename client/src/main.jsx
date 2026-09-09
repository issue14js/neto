import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { NoteProvider } from './context/NoteContext.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <NoteProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </NoteProvider>
    </AuthProvider>
</ThemeProvider>
  </StrictMode>,
)
