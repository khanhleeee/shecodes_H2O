function TextArea({
	value,
	onChange = () => {},
	onBlur = () => {},
	placeholder,
	...props
}) {
	return (
		<div className='input-container'>
			<textarea
				className='input min-h-[180px]'
				placeholder={placeholder}
				{...props}
			></textarea>
		</div>
	)
}

export default TextArea
