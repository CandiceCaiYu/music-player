import React from 'react'
import logo from '../../images/logo.jpg'
import './styles.less'

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-logo">
					<img src={logo} alt="header-logo"/>
				</div>
				<h1 className="caption">React Music Player</h1>
			</div>
		)
	}
}
