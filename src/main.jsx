import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gray-950'>
    <div className="text-3xl md:text-center text-left text-white border-2 border-gray-900 px-10 py-5 rounded-md bg-gray-900">Dashboard Overview</div>
    <App />
    </div>
  </React.StrictMode>,
)
