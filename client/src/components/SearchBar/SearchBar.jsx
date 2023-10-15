import { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'

import Button from '../Button/Button'

import './SearchBar.css'
import { useFormik } from 'formik'
import partnerUpApi from '../../config/partnerupdb'
import { useNavigate } from 'react-router'

function SearchBar(props) {
	const { buttonSearch } = props

	const initialValues = {
		location: '',
		field: '',
	}

	const navigate = useNavigate()
	const onSubmit = async (values) => {
		navigate(`/agencies/${values.location}/${values.field}`)
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
	})

	const searchClasses = classNames('search-container', {
		'search-w-button': buttonSearch,
	})

	const [searchText, setSearchText] = useState('')

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log('handle search...')
		}
	}

	return (
		<div className={searchClasses}>
			{buttonSearch ? (
				<form className='flex' onSubmit={formik.handleSubmit}>
					<select
						value={formik.values.location}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						id='location'
						name='location'
						className='dropdown'
					>
						<option selected value='' disabled>
							Địa điểm
						</option>
						<option value='Hồ Chí Minh'>Hồ Chí Minh</option>
						<option value='Hà Nội'>Hà Nội</option>
						<option value='Đà Nẵng'>Đà Nẵng</option>
					</select>
					<select
						id='field'
						className='dropdown'
						value={formik.values.field}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					>
						<option selected value='' disabled>
							Lĩnh vực
						</option>
						<option value='Công nghệ'>Công nghệ</option>
						<option value='Marketing'>Marketing</option>
						<option value='Thiết kế'>Thiết kế</option>
					</select>
					<Button
						type='submit'
						className='ml-4'
						icon={<MagnifyingGlassIcon className='h-5 w-5' />}
					/>
				</form>
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
