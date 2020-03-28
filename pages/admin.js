import Head from 'next/head'
import styled from 'styled-components'

const Admin = () => (
	<div className="admin-container">
		<Head>
			<title>SafeQueue</title>
		</Head>

		<main>
			<h1>Admin Page</h1>

			<div className="admin-profile">
				<div className="admin-profile__store">
					Your Store: Mitsuwa
				</div>
				<div className="admin-profile__max-capacity">
					Maximum Capacity: 100
				</div>
			</div>
		</main>
	</div>
)

export default Admin