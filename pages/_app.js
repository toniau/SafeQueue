import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html {
		font-family: Helvetica Neue, Roboto, sans-serif;
		font-size: 16px;
	}

  body {
		padding: 0;
		margin: 0;
		overflow: hidden;
		background: #FFFFFF;
	}

	main {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0.5em 2em;
	}
	
	a {
		font-size: 16px;
		font-family: Helvetica Neue, Roboto, sans-serif;
		cursor: pointer;
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
					<link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
					<Component {...pageProps} />
				</Container>
			</React.Fragment>
		);
	}
}