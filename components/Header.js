import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'

const Nav = styled.nav`
	display: flex;
	justify-content: flex-start;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 3em;
	padding: 0.5em 1em;
	background-color: #FFFFFF;
	border-bottom: 2px solid #339900;
`

const Header = () => (
	<header>
  	<Nav>
      <Link href="/">
        <Button><a>Home</a></Button>
			</Link>
			<Link href="/admin">
				<Button><a>Admin</a></Button>
			</Link>
			<Link href="/user">
        <Button><a>User</a></Button>
			</Link>
    </Nav>
  </header>
)

export default Header