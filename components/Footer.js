import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'

const Nav = styled.nav`
	display: flex;
	justify-content: flex-start;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3em;
	padding: 0.5em 1em;
	background-color: #FFFFFF;
	border-top: 2px solid #339900;
`

const Footer = () => (
	<footer>
  	<Nav>
      <Link href="/">
        <Button><a>About</a></Button>
			</Link>
			<Link href="/">
				<Button><a>Social</a></Button>
			</Link>
			<Link href="/">
        <Button><a>&copy;</a></Button>
			</Link>
    </Nav>
  </footer>
)

export default Footer