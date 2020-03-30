import dynamic from 'next/dynamic'
import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Map = styled.div`
	padding: 2em 0;
`

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
});

const User = () => {
	// User in queue, show queue status
	if (true === false) {
		return (
			<div className="user-container">
				<Header />
				<main>
					<h1>User Page</h1>
					<div className="user-status">
						In Queue Status: True
					</div>
				</main>
				<Footer />
			</div>
		)
	}

	// User not in queue, show map
	return (
		<div className="user-container">
			<Head>
				<script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js"></script>
			</Head>
			<Header />
			<main>
				<h1>User Page</h1>
				<div className="user-status">
					In Queue Status: False
				</div>
				<Map>
					<DynamicComponentWithNoSSR />
				</Map>
				<form>
					<label>Store: </label>
				</form>
				<Button>Join Queue</Button>
			</main>
			<Footer />
		</div>
	);
}

export default User