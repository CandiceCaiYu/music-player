import React from 'react'
import { cls } from '../../utils/libs.js'
import './styles.less'


export default class Voice extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		voiceIcon: 'icon-shengyin',
	// 	}
	// }

	changeVoice = (e) => {
		let voiceProgress = this.refs.voiceProgress,
			mousePosition = e.clientX,
			componentLeft = voiceProgress.getBoundingClientRect().left,
			componentWidth = voiceProgress.clientWidth,
			progress = (mousePosition - componentLeft)/componentWidth
			this.props.voiceChangeHandler(progress) && this.props.voiceChangeHandler(progress)
	}
	render() { 
		let { progress, voiceIcon, changeVoiceIcon } = this.props
		return (
			<div className="voicePart">
				<div className= {cls("iconfont", "voiceLogo", `${voiceIcon}`)} onClick = {changeVoiceIcon}></div>
				<div className="voice_progress" ref="voiceProgress" onClick={this.changeVoice}>
					<div className="voice" style={{width:`${progress}%` }}></div>
				</div>
			</div>
			
		)
	}
}