import PropTypes from 'prop-types'

export default function PlayerTag({ name }) {
	if (!name) return null

	return (
		<div className='character-card__player-tag text-ellipsis flex-center'>
			{name}
		</div>
	)
}

PlayerTag.propTypes = {
	name: PropTypes.string,
}
