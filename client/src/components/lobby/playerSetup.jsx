import CharacterCard from './characterCard.jsx'
import CHARACTERS from '../../data/game-data.js'
import './playerSetup.css'
import { useState } from 'react'

export default function PlayerSetup({ playerList }) {
	const [players, setPlayers] = useState(playerList)

	const handleCharacterSelect = (playerIndex, characterId) => {
		const newPlayers = [...players]
		newPlayers[playerIndex].selectedCharacter = characterId
		newPlayers[playerIndex].isReady = false
		setPlayers(newPlayers)
	}

	const handleAspectSelect = (playerIndex, aspect) => {
		const newPlayers = [...players]
		newPlayers[playerIndex].aspect = aspect
		newPlayers[playerIndex].isReady = false
		setPlayers(newPlayers)
	}

	const handleReady = (playerIndex) => {
		if (
			players[playerIndex].aspect &&
			players[playerIndex].selectedCharacter
		) {
			const newPlayers = [...players]
			newPlayers[playerIndex].isReady = !newPlayers[playerIndex].isReady
			setPlayers(newPlayers)
		} else {
			alert('Please select a character and aspect')
		}
	}

	const handleStartGame = () => {
		console.log('Starting game...')
	}

	return (
		<div className='player-setup'>
			<h1>CHOOSE A HERO</h1>
			<div>
				{CHARACTERS.map((character) => (
					<CharacterCard
						key={character.id}
						character={character}
						isSelected={players.some(
							(player) =>
								player.selectedCharacter === character.id
						)}
						isReady={players.some(
							(player) =>
								player.selectedCharacter === character.id &&
								player.isReady
						)}
						onClick={() => {
							// Handle character selection
							handleCharacterSelect(0, character.id)
						}}
						aspect={
							players.find(
								(player) =>
									player.selectedCharacter === character.id
							)?.aspect
						}
						playerName={
							players.find(
								(player) =>
									player.selectedCharacter === character.id
							)?.name
						}
					/>
				))}
			</div>
			<h1>CHOOSE AN ASPECT</h1>
			<div className='aspect-buttons'>
				{[
					{
						name: 'aggression',
						content: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentcolor'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-swords'
							>
								<polyline points='14.5 17.5 3 6 3 3 6 3 17.5 14.5' />
								<line x1='13' x2='19' y1='19' y2='13' />
								<line x1='16' x2='20' y1='16' y2='20' />
								<line x1='19' x2='21' y1='21' y2='19' />
								<polyline points='14.5 6.5 18 3 21 3 21 6 17.5 9.5' />
								<line x1='5' x2='9' y1='14' y2='18' />
								<line x1='7' x2='4' y1='17' y2='20' />
								<line x1='3' x2='5' y1='19' y2='21' />
							</svg>
						),
					},
					{
						name: 'justice',
						content: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentcolor'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-scale'
							>
								<path d='m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' />
								<path d='m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' />
								<path d='M7 21h10' />
								<path d='M12 3v18' />
								<path d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2' />
							</svg>
						),
					},
					{
						name: 'leadership',
						content: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentcolor'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-star'
							>
								<path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
							</svg>
						),
					},
					{
						name: 'pool',
						content: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='icon icon-tabler icons-tabler-filled icon-tabler-bomb'
							>
								<path
									stroke='none'
									d='M0 0h24v24H0z'
									fill='none'
								/>
								<path d='M14.499 3.996a2.2 2.2 0 0 1 1.556 .645l3.302 3.301a2.2 2.2 0 0 1 0 3.113l-.567 .567l.043 .192a8.5 8.5 0 0 1 -3.732 8.83l-.23 .144a8.5 8.5 0 1 1 -2.687 -15.623l.192 .042l.567 -.566a2.2 2.2 0 0 1 1.362 -.636zm-4.499 5.004a4 4 0 0 0 -4 4a1 1 0 0 0 2 0a2 2 0 0 1 2 -2a1 1 0 0 0 0 -2z' />
								<path d='M21 2a1 1 0 0 1 .117 1.993l-.117 .007h-1c0 .83 -.302 1.629 -.846 2.25l-.154 .163l-1.293 1.293a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.293 -1.292c.232 -.232 .375 -.537 .407 -.86l.007 -.14a2 2 0 0 1 1.85 -1.995l.15 -.005h1z' />
							</svg>
						),
					},
					{
						name: 'protection',
						content: (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='4 0 20 24'
								fill='currentcolor'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-shield'
							>
								<path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' />
							</svg>
						),
					},
				].map((aspect) => (
					<button
						key={aspect.name}
						className={`aspect-button ${
							players.some(
								(player) =>
									player.isClient &&
									player.aspect === aspect.name
							)
								? 'aspect-button-chosen'
								: ''
						}`}
						data-aspect={aspect.name}
						onClick={() => handleAspectSelect(0, aspect.name)}
					>
						{aspect.content}
					</button>
				))}
			</div>
			<div className='ready-button-container'>
				<div>
					<button
						className={`ready-button ${
							players.find((player) => player.isClient)?.isReady
								? 'ready-button-ready'
								: 'ready-button-unready'
						}`}
						onClick={() =>
							handleReady(
								players.findIndex((player) => player.isClient)
							)
						}
					>
						{players.find((player) => player.isClient)?.isReady
							? 'Unready'
							: 'Ready'}
					</button>
				</div>
				<div>
					<button
						className={`start-game-button ${
							players.every((player) => player.isReady) &&
							players.find((player) => player.isClient)?.isHost
								? 'start-game-button-active'
								: ''
						}`}
						onClick={handleStartGame}
					>
						Start Game
					</button>
				</div>
			</div>
		</div>
	)
}
