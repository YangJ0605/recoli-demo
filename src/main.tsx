import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import './index.css'
// import App from './App'
import Index from './pages/index'
import About from './pages/about'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
