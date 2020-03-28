import Head from 'next/head'
import Header from '../components/Header'
import Button from '../components/Button'

const User = () => {
	// User in queue, show queue status
	if (true === false) {
		return (
			<div>
				<Header />
				<div className="user-container">
					In Queue Status: True
				</div>
			</div>
		)
	}

	// User not in queue, show map
	return (
		<div>
			<Header />
			<div className="user-container">
				In Queue Status: False
				<div id="map">
					MAP
				</div>
				<Button>Join Queue</Button>
			</div>
		</div>
	);
}

export default User