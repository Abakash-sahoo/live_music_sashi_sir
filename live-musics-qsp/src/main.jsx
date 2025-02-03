import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import AuthProvider from './context/AuthContextApi'
import SongContextApi from './context/SongContextApi'

ReactDOM.createRoot(document.getElementById("root")).render(
    <SongContextApi>
        <AuthProvider>
            <RouterProvider router={router}>

            </RouterProvider>

        </AuthProvider>
    </SongContextApi>
)