import PropTypes from 'prop-types'
import { useMemo } from 'react'
import CharacterImage from './CharacterImage'
import PlayerTag from './PlayerTag'
import ReadyCheckmark from './ReadyCheckmark'
import './CharacterCard.css'

export default function CharacterCard({
	character,
	isSelected = false,
	onClick,
	playerName = '',
	aspect = '',
	isReady = false,
}) {
	const cardClassNames = useMemo(() => {
		return [
			'character-card',
			isSelected && 'character-card--selected',
			`character-card--${character.type}`,
			aspect && `character-card--${aspect}`,
			playerName && 'character-card--with-player',
			isReady && 'character-card-ready',
		]
			.filter(Boolean)
			.join(' ')
	}, [character.type, isSelected, aspect, playerName, isReady])

	const handleClick = (e) => {
		if (isSelected) return
		onClick?.(e)
	}

	return (
		<div
			className={cardClassNames}
			data-aspect={aspect}
			onClick={handleClick}
		>
			<div className='character-card__image-wrapper'>
				<CharacterImage
					src={character.forms[0].image}
					alt={character.forms[0].name}
				/>
				<ReadyCheckmark isReady={isReady} />
				<PlayerTag name={playerName} />
			</div>
			<div className='character-card__label'>
				{character.forms[0].name}
			</div>
		</div>
	)
}

CharacterCard.propTypes = {
	character: PropTypes.shape({
		id: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		forms: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
	isSelected: PropTypes.bool,
	onClick: PropTypes.func,
	playerName: PropTypes.string,
	aspect: PropTypes.string,
	isReady: PropTypes.bool,
}
