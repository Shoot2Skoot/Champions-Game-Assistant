import PropTypes from 'prop-types'

export default function ReadyCheckmark({ isReady }) {
	if (!isReady) return null

	return (
		<div className='character-card__checkbox flex-center'>
			<svg
				viewBox='0 0 24 24'
				fill='currentcolor'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
				<g
					id='SVGRepo_tracerCarrier'
					strokeLinecap='round'
					strokeLinejoin='round'
				></g>
				<g id='SVGRepo_iconCarrier'>
					<g clipPath='url(#clip0_429_11034)'>
						<path
							d='M6 14L13 2V10H18L11 22V14H6Z'
							stroke='currentcolor'
							strokeWidth='2.5'
							strokeLinejoin='round'
						></path>
					</g>
					<defs>
						<clipPath id='clip0_429_11034'>
							<rect
								width='24'
								height='24'
								fill='currentcolor'
							></rect>
						</clipPath>
					</defs>
				</g>
			</svg>
		</div>
	)
}

ReadyCheckmark.propTypes = {
	isReady: PropTypes.bool,
}
