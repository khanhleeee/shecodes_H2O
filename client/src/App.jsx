import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About/About'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import ListBusinessDetails from './pages/ListBusiness/ListBusinessDetails'
import ListBusinessPage from './pages/ListBusiness/ListBusinessPage'

function App() {
	return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencies" element={<ListBusinessPage />} />
          <Route path="/agencies/details" element={<ListBusinessDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
