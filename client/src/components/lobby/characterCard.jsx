import './characterCard.css'

export default function CharacterCard({
	character,
	isSelected,
	onClick,
	playerName,
	aspect,
	isReady,
}) {
	return (
		<div
			key={character.id}
			className={`character-card ${
				isSelected ? 'character-card--selected' : ''
			} character-card--${character.type} character-card--${aspect} ${
				playerName ? 'character-card--with-player' : ''
			} ${isReady ? 'character-card-ready' : ''}`}
			data-aspect={aspect}
			onClick={isSelected ? null : onClick} // Ensure the click handler is included
		>
			<div className='character-card__image-wrapper'>
				<img
					src={character.forms[0].image}
					alt={character.forms[0].name}
					className='character-card__image'
				/>
				<div className='character-card__checkbox'>
					{isReady ? (
						<svg
							viewBox='0 0 24 24'
							fill='currentcolor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g
								id='SVGRepo_tracerCarrier'
								stroke-linecap='round'
								stroke-linejoin='round'
							></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<g clip-path='url(#clip0_429_11034)'>
									{' '}
									<path
										d='M6 14L13 2V10H18L11 22V14H6Z'
										stroke='currentcolor'
										stroke-width='2.5'
										stroke-linejoin='round'
									></path>{' '}
								</g>{' '}
								<defs>
									{' '}
									<clipPath id='clip0_429_11034'>
										{' '}
										<rect
											width='24'
											height='24'
											fill='currentcolor'
										></rect>{' '}
									</clipPath>{' '}
								</defs>{' '}
							</g>
						</svg>
					) : (
						''
					)}
				</div>
				<div className='character-card__player-tag'>{playerName}</div>
			</div>
			<div className='character-card__label'>
				{character.forms[0].name}
			</div>
		</div>
	)
}
