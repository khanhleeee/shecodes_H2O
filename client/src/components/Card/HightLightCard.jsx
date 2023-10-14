/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

import { PlusSmallIcon } from '@heroicons/react/24/outline'

import { HiLocationMarker } from 'react-icons/hi'
import { BiSolidUserPlus } from 'react-icons/bi'

import PropTypes from 'prop-types'

import './Card.css'

function HightLightCard({ item }) {
	const { accountId, name, description, province, logo } = item

	return (
		<Link to={`/detail/${accountId}`}>
			<div className='relative min-h-[300px] mt-6 flex flex-col rounded-xl bg-white bg-clip-border shadow-md py-6 px-8'>
				<div className='h-[70px]'>
					<img className='w-auto h-full' src={logo} alt='company logo' />
				</div>
				<h5 className='text-lg mt-4 py-1'>{name}</h5>
				<p className='text-sm text-gray-dark description'>{description}</p>
				<p className='mt-4 flex'>
					<div className='w-8'>
						<HiLocationMarker class='h-5 w-5' />
					</div>
					{province}
				</p>
				<p className='flex'>
					<div className='w-8'>
						<BiSolidUserPlus class='w-6 h-6' />
					</div>
					<div className='flex items-center'>
						<span className='font-bold text-primary-500'>1000</span>
						<PlusSmallIcon class='h-3 w-3 text-primary-500' />
					</div>
				</p>
			</div>
		</Link>
	)
}

export default HightLightCard

HightLightCard.propTypes = {
	item: PropTypes.object,
}
