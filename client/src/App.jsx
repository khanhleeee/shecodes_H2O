import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About/About'
import Home from './pages/Home/Home'
import ListBusinessDetails from './pages/ListBusiness/ListBusinessDetails'
import ListBusinessPage from './pages/ListBusiness/ListBusinessPage'
import Login from './pages/Login/Login'
import Layout from './pages/Layout'
import NoHeaderLayout from './pages/NoHeaderLayout'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/agencies' element={<ListBusinessPage />} />
						<Route
							path='/agencies/:province?/:categories?'
							element={<ListBusinessPage />}
						/>
						<Route
							path='/agencies/details'
							element={<ListBusinessDetails />}
						/>
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
