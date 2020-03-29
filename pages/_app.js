import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
		padding: 0;
		margin: 0;
		overflow: hidden;
		background: #FFFFFF;
		font-family: Helvetica Neue, Robot, sans-serif;
		font-size: 16px;
  }
`

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
	}
	
	render() {
		const { Component, pageProps } = this.props;
		return (
			<React.Fragment>
				<Container>
						<GlobalStyle />
						<Component {...pageProps} />
				</Container>
			</React.Fragment>
		);
	}
}