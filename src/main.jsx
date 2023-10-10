import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContextProvider from './Context/todoContext.jsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<TodoContextProvider>

 {/* Root file */}
    <App />

    <Toaster position="top-center"/>
</TodoContextProvider>
  </React.StrictMode>,
)
