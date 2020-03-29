import dynamic from 'next/dynamic'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
});

// export () => <DynamicComponentWithNoSSR />;

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
			<Header />
			<main>
				<h1>User Page</h1>
				<div className="user-status">
					In Queue Status: False
				</div>
				<div id="map">
					<DynamicComponentWithNoSSR />
				</div>
				<Button>Join Queue</Button>
			</main>
			<Footer />
		</div>
	);
}

export default User