import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import BaseLayout from './pages/BaseLayout';
import Homepage from './pages/Homepage';
import UserProfile from './pages/UserProfile';
import Error from './pages/Error';
import UsersList from './pages/UsersList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: 'profile',
                element: <UserProfile />,
            },
            {
                path: 'users',
                element: <UsersList />
            }
        ]
    }
]);

function App() {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
