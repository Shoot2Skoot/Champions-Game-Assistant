import PropTypes from 'prop-types'
import './TopBanner.css'

export default function TopBanner({ playerName, roomCode }) {
	return (
		<>
			<div className='top-banner__filler'></div>
			<div className='top-banner'>
				<div className='top-banner__content'>
					<div className='top-banner__player'>{playerName}</div>
					<div className='top-banner__room'>
						<div className='room-code'>{roomCode}</div>
						<div className='room-code-label'>Room Code</div>
					</div>
				</div>
				<div className='top-banner__divider'></div>
			</div>
		</>
	)
}

TopBanner.propTypes = {
	playerName: PropTypes.string.isRequired,
	roomCode: PropTypes.string.isRequired,
}
