import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Button.css'

function Button(props) {
	const {
		children,
		className,
		text,
		secondary,
		outlined,
		icon,
		disabled,
		onClick = () => {},
		...otherProps
	} = props

	const btnClasses = classNames(
		'btn',
		{
			text,
			secondary,
			outlined,
			disabled,
			circle: icon,
		},
		className
	)

	return (
		<button
			className={btnClasses}
			onClick={disabled ? () => {} : onClick}
			{...otherProps}
		>
			{icon && icon}
			{children}
		</button>
	)
}

export default Button

Button.propTypes = {
	children: PropTypes.node,
	icon: PropTypes.node,
	secondary: PropTypes.bool,
	outlined: PropTypes.bool,
	text: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	onClick: PropTypes.func,
}
