import Header from '../components/Header'
import Footer from '../components/Footer'

const Admin = () => (
	<div className="admin-container">
		<Header />
		<main>
			<div className="admin-profile">
				<h1>Admin Page</h1>
				<div className="admin-profile__store">
					Your Store: Mitsuwa
				</div>
				<div className="admin-profile__max-capacity">
					Maximum Capacity: 100
				</div>
			</div>
		</main>
		<Footer />
	</div>
)

export default Admin