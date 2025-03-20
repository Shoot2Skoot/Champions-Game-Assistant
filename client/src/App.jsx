import { useState } from 'react'
import './App.css'
import PlayerSetup from './components/lobby/playerSetup.jsx'
import TopBanner from './components/topBanner.jsx'
function App() {
	const [players, setPlayers] = useState([
		{
			name: 'Cody',
			isHost: true,
			isClient: true,
			isReady: false,
			selectedCharacter: null,
			aspect: null,
		},
		{
			name: 'Hannah',
			isClient: false,
			isReady: true,
			selectedCharacter: 'captainamerica',
			aspect: 'leadership',
		},
		{
			name: 'TheRealSteveRogers',
			isHost: false,
			isClient: false,
			isReady: true,
			selectedCharacter: 'ironman',
			aspect: 'protection',
		},
		{
			name: 'Player 4',
			isHost: false,
			isClient: false,
			isReady: true,
			selectedCharacter: 'shehulk',
			aspect: 'justice',
		},
	])

	return (
		<>
			<TopBanner
				playerName={players.find((player) => player.isClient).name}
				roomCode='LG4R2'
			/>
			<PlayerSetup playerList={players} />
		</>
	)
}

export default App
