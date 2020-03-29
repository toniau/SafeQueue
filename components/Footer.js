import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
	display: flex;
	justify-content: flex-start;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 0.5em 1em;
	background-color: #FFFFFF;
	border-top: 2px solid #339900;
`

const FooterLink = styled.a`
	padding: 0.25em 1em;
`

const Footer = () => (
	<footer>
  	<Nav>
      <Link href="/">
        <FooterLink>About</FooterLink>
			</Link>
			<Link href="/">
				<FooterLink>Social</FooterLink>
			</Link>
			<Link href="/">
        <FooterLink>&copy;</FooterLink>
			</Link>
    </Nav>
  </footer>
)

export default Footer