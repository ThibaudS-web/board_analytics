import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router'
import { createGlobalStyle } from 'styled-components'
import 'normalize.css/normalize.css'

import Dashboard from './pages/Dashboard'
import Error404 from './components/error/Error404'
import ErrorAPI from './components/error/ErrorAPI'
import Layout from './components/layout/Layout'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    #root{
        margin:0 auto;
    }
`
function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/profil/12" />} />
                    <Route path="/profil/:id" element={<Dashboard />} />
                    <Route
                        path="/parameters"
                        element={<Navigate to="/profil/12" />}
                    />
                    <Route
                        path="/community"
                        element={<Navigate to="/profil/12" />}
                    />
                    <Route path="/api-error" element={<ErrorAPI />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}

export default App
