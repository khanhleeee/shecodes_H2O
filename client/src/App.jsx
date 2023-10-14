import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About/About'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/agencies' element={<About />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
