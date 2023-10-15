/* eslint-disable react/prop-types */
import './Card.css'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiTime } from 'react-icons/bi'
import { FiBriefcase, FiEye } from 'react-icons/fi'

function CompanyCard({ item, noDesc = false }) {
	if (item === null) {
		return <Spinner></Spinner>
	}

	return (
		<Link to={`/agencies/${item.accountId}`}>
			<div className='flex flex-col justify-center p-6 bg-white rounded-xl h-full shadow-md hover:-translate-y-1 transition-transform duration-200'>
				{/* Header */}
				<div className='flex justify-between items-top'>
					<div className='flex gap-4'>
						<img className='h-16 rounded-md' src={item.logo} alt='logo' />
						<div>
							<p className='font-bold text-xl'>{item.name}</p>
							{item.categories?.map((item, i) => (
								<p key={i}>{item}</p>
							))}
						</div>
					</div>
					<div className='p-3 border-4 border-[#1877F2] h-fit rounded-full leading-none bg-[#E4F0FF]'>
						1k
					</div>
				</div>
				{/* Tag */}
				<div className='flex gap-2 mt-4 flex-wrap'>
					<span className='flex gap-2 px-4 py-1 border border-black rounded-full'>
						<HiOutlineLocationMarker className='h-5' />
						{item.province}
					</span>
					<span className='flex gap-2 px-6 py-1 border border-black rounded-full'>
						<BiTime className='h-6' />
						{item.establishedYear}
					</span>
					<span className='flex gap-2 px-6 py-1 border border-black rounded-full'>
						<FiBriefcase className='h-6' />
						{item.budget.toLocaleString('it-IT', {
							style: 'currency',
							currency: 'VND',
						})}
					</span>
				</div>
				{/* Desc */}
				{!noDesc && (
					<p className='h-[72px] mt-4 mb-4 description'>
						{item.description}
					</p>
				)}
				{/* Services & views */}
				<div className='flex justify-between mt-4'>
					<div className='flex flex-wrap gap-1'>
						{item.services?.map((servies) => (
							<div
								key={servies}
								className='flex items-center justify-center gap-2 px-2 py-1 border border-[#5DB9FF] bg-[#EBF6FF] rounded-full flex-nowrap'
							>
								{servies}
							</div>
						))}
					</div>
					<span className='flex items-center gap-2 hover:bg-[#e0e0e0] p-2 rounded-lg transition-all duration-100'>
						<FiEye />
						{item.viewProfileCount}
					</span>
				</div>
			</div>
		</Link>
	)
}

export default CompanyCard
