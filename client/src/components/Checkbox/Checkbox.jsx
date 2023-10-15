/* eslint-disable react/prop-types */

function CheckBox({ label, name, id, value, onChange, onBlur }) {
	return (
		<>
			<div className='inline-flex items-center'>
				<label
					className='relative flex cursor-pointer items-center rounded-full p-3'
					htmlFor='login'
					data-ripple-dark='true'
				>
					<input
						id={id}
						type='checkbox'
						name={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white-500 checked:bg-white-500 checked:before:bg-white-500 hover:before:opacity-10"
					/>
					<div className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-FF5F2C opacity-0 transition-opacity peer-checked:opacity-100'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4.5'
							viewBox='0 0 20 20'
							fill='#FF5F2C'
							stroke='#FF5F2C'
							strokeWidth='1'
						>
							<path
								fillRule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							></path>
						</svg>
					</div>
				</label>
				<label
					className='mt-px cursor-pointer select-none font-light text-gray-700'
					htmlFor='login'
				>
					{label}
				</label>
			</div>
		</>
	)
}

export default CheckBox
