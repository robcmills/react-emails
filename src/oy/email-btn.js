import React from 'react'
import PropTypes from 'prop-types'

const EmailBtn = ({
	bgcolor,
	children,
	className,
	color,
	href,
	outline,
	size,
}) => {
	const fontSize = {
		small: '14px',
		medium: '16px',
	}[size]

	const lineHeight = {
		small: '18px',
		medium: '20px',
	}[size]

	return (
		<a
			href={href}
			style={{
				backgroundColor: bgcolor,
				borderColor: (outline ? color : bgcolor),
				borderRadius: '1px',
				borderStyle: 'solid',
				borderWidth: (outline ? '1px' : '8px 20px'),
				color: color,
				cursor: 'pointer',
				display: 'inline-block',
				fontSize: fontSize,
				fontWeight: 'bold',
				lineHeight: lineHeight,
				marginBottom: '12px',
				padding: (outline ? '8px 20px' : '0'),
				textAlign: 'center',
				textDecoration: 'none',
			}}
		>
			{children}
		</a>
	)
}

EmailBtn.propTypes = {
	bgcolor: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	outline: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium']),
}

EmailBtn.defaultProps = {
	outline: false,
	size: 'medium',
}

export default EmailBtn
