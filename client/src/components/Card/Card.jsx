/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import './Card.css'

import PropTypes from 'prop-types'

function Card({ item }) {
	return (
		<div className='form-card'>
			<div className='p-6'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					aria-hidden='true'
					className='mb-4 h-12 w-12 text-pink-500'
				>
					<path
						fillRule='evenodd'
						d='M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z'
						clipRule='evenodd'
					></path>
					<path d='M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z'></path>
				</svg>
				<h5 className='title'>Exponential Growth</h5>
				<p className='child-title'>
					Achieve Exponential Growth For Your Business
				</p>
			</div>
			<div className='p-5 pt-0'>
				<p className='ml-1'>United States</p>
				<p className='ml-1'>$1000</p>
			</div>
		</div>
	)
}

export default Card

Card.propTypes = {
	children: PropTypes.node,
	icon: PropTypes.node,
	secondary: PropTypes.bool,
	outlined: PropTypes.bool,
	text: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	onClick: PropTypes.func,
}
