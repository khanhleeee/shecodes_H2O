import { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'

import Button from '../Button/Button'

import './SearchBar.css'

function SearchBar(props) {
	const { buttonSearch } = props

	const searchClasses = classNames('search-container', {
		'search-w-button': buttonSearch,
	})

	const [searchText, setSearchText] = useState('')

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log('handle search...')
		}
	}

	useEffect(() => {
		// Search API
	}, [])

	return (
		<div className={searchClasses}>
			{buttonSearch ? (
				<>
					<span>Fields</span>
					<span>Services</span>
					<input
						value={searchText}
						className='h-full outline-none placeholder:font-bold text-black pl-8 pr-4'
						placeholder='Placeholder text here'
						onChange={(e) => setSearchText(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
					<Button
						className='ml-4'
						icon={<MagnifyingGlassIcon className='h-5 w-5' />}
					/>
				</>
			) : (
				<>
					<input
						value={searchText}
						className='w-[300px] h-full outline-none placeholder:font-bold text-black'
						placeholder='Placeholder text here'
						onChange={(e) => setSearchText(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
					{searchText ? (
						<XMarkIcon
							className='h-5 w-5 ml-4 transition-all duration-100 cursor-pointer hover:text-black/60 hover:scale-110'
							onClick={() => setSearchText('')}
						/>
					) : (
						<MagnifyingGlassIcon className='h-5 w-5 ml-4 transition-all duration-150 cursor-pointer' />
					)}
				</>
			)}
		</div>
	)
}

export default SearchBar

SearchBar.propTypes = {
	buttonSearch: PropTypes.bool,
}
