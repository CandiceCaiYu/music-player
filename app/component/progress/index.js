import React from 'react'
import $ from 'jquery'
import jPlayer from 'jPlayer'
import './styles.less'

export default class Progress extends React.Component {
	changeProgress = (e) => {
		let progressBar = this.refs.progressBar;
		let mousePosition = e.clientX;
		let componentLeft = progressBar.getBoundingClientRect().left;
		let componentWidth = progressBar.clientWidth;
		let progress = (mousePosition - componentLeft)/componentWidth
		this.props.progressChangeHandler(progress) && this.props.progressChangeHandler(progress)
 	}
	render() {
		let time = $.jPlayer.convertTime(this.props.musicTime),
		  	totalTime = $.jPlayer.convertTime(this.props.totalTime);
		
		return (
			<div className="musicProgress">
				<div className="musicTime">{time}</div>
				<div className="component-progress" ref = "progressBar" onClick={this.changeProgress} >
					<div className="progress" style={{width: `${this.props.progress}%`}}></div>
				</div>	
				<div className="musicTotalTime" >{totalTime}</div>			
			</div>

		)
	}
}
