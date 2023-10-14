import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import Button from '../Button/Button'

import Logo from '../../assets/logo.png'
import './Header.css'

const navItems = [
	{
		id: 1,
		name: 'Trang chủ',
		path: '/',
	},
	{
		id: 2,
		name: 'Khám phá',
		path: '/agencies',
	},
	{
		id: 3,
		name: 'Về chúng tôi',
		path: '/about',
	},
]

function Header() {
	const headerRef = useRef(null)

	useEffect(() => {
		const handleScrollHeader = () => {
			if (
				document.body.scrollTop > 50 ||
				document.documentElement.scrollTop > 50
			) {
				headerRef.current.classList.remove('bg-white/50')
				headerRef.current.classList.add('bg-white')
			} else {
				headerRef.current.classList.remove('bg-white')
				headerRef.current.classList.add('bg-white/50')
			}
		}

		window.addEventListener('scroll', handleScrollHeader)

		return () => {
			window.removeEventListener('scroll', handleScrollHeader)
		}
	}, [])

	return (
		<header
			ref={headerRef}
			className='fixed w-full bg-white/50 backdrop-opacity-10 z-20 transition-colors duration-200'
		>
			<div className='container mx-auto flex justify-between items-center py-4 px-16'>
				<img className='h-10' src={Logo} alt='logo' />
				<nav>
					{navItems.map((item) => (
						<NavLink
							className='font-bold px-6 hover:text-primary-500 transition-colors duration-100'
							key={item.id}
							to={item.path}
						>
							{item.name}
						</NavLink>
					))}
				</nav>
				<div>
					<Button text>Đăng ký</Button>
					<Button>Đăng nhập</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
