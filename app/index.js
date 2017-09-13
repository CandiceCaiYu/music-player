
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './component/home/index.js'

import './styles.less'

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Home/>
				<div id="player"></div>
			</div>
		) 
		
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)

