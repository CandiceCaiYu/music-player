import React from 'react'

import './styles.less'

export default class Progress extends React.Component {
	static defaultProps = {
		bgColor: '#66a969'
	}
	changeProgress = (e) => {
		let progressBar = this.refs.progressBar;
		let mousePosition = e.clientX;
		let componentLeft = progressBar.getBoundingClientRect().left;
		let componentWidth = progressBar.clientWidth;
		let progress = (mousePosition - componentLeft)/componentWidth
		this.props.progressChangeHandler(progress) && this.props.progressChangeHandler(progress)
 	}
	render() {
		return (
			<div className="component-progress" ref = "progressBar" onClick={this.changeProgress} >
				<div className="progress" style={{width: `${this.props.progress}%`, background: `${this.props.bgColor}`}}>
					
				</div>
			</div>
		)
	}
}
