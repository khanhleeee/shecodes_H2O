import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About/About'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import NoHeaderLayout from './pages/NoHeaderLayout'
import Login from './pages/Login/Login'
import Layout from './pages/Layout'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/agencies' element={<About />} />
						<Route path='/about' element={<About />} />
					</Route>
					<Route path='/login' element={<NoHeaderLayout />}>
						<Route index element={<Login />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
