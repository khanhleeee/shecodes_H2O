import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
	ExclamationCircleIcon,
	EyeIcon,
	EyeSlashIcon,
} from '@heroicons/react/24/outline'

import '../Form.css'
import { useState } from 'react'

function Input(props) {
	const {
		id,
		name,
		label = 'Label',
		type = 'text',
		value = '',
		errorMessage,
		onChange = () => {},
		onBlur = () => {},
		...otherProps
	} = props

	const [passwordText, setPasswordText] = useState('password')

	const handleShowPassword = () => {
		if (value) {
			setPasswordText((currType) =>
				currType === 'password' ? 'text' : 'password'
			)
		}
	}

	const inputContainerClasses = classNames('input-container', {
		error: errorMessage,
	})

	const inputClasses = classNames('input', {
		password: type === 'password',
	})

	return (
		<div className={inputContainerClasses}>
			<div className={inputClasses}>
				<label
					htmlFor={id}
					className='absolute capitalize bg-white -top-[8px] left-[12px] px-1 leading-none text-sm'
				>
					{label}
				</label>
				<input
					className='outline-none w-full'
					type={type === 'password' ? passwordText : type}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					{...otherProps}
				/>
				{errorMessage && type !== 'password' && (
					<ExclamationCircleIcon class='h-6 w-6 text-[#D64751]' />
				)}
				{type === 'password' && (
					<span className='password-icon' onClick={handleShowPassword}>
						{passwordText === 'text' ? (
							<EyeIcon className='h-6 w-6 text-gray-dark' />
						) : (
							<EyeSlashIcon className='h-6 w-6 text-gray-dark' />
						)}
					</span>
				)}
			</div>
			{errorMessage && <p className='error-mess'>{errorMessage}</p>}
		</div>
	)
}

export default Input

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	errorMessage: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
}
