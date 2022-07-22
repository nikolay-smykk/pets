import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './shared/Footer'
import { Header } from './shared/Header'

import { App } from './App'
import { Home } from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Header />
            <Footer />
            <Route path="/" element={<App />}>
                <Route index element={<App />} />
                <Route path="home" element={<Home />} />
                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    </BrowserRouter>,
)
