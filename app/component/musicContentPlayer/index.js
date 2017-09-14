import React from 'react'
import { cls } from '../../utils/libs.js'

import './styles.less'

export default class MusicContentPlayer extends React.Component {
	constructor() {
		super();
		this.state = {
			icon: 'icon-zanting',
			play: true
		}
	}

	musicPlayState = () => {
		if(this.state.icon === 'icon-zanting') {
			//pause;
			this.setState({
				icon: 'icon-bofang',
				play: false
			})
		}else {
			//play;
			this.setState({
				icon: 'icon-zanting',
				play: true
			})
		}
	 }
	 componentWillUpdate(nextProps, nextStates) {
	 	if(this.state.icon === nextStates.icon) return;
	 	if(nextStates.icon === 'icon-zanting') {
	 		this.props.changeMusicPlay()
	 	}else {
	 		this.props.changeMusicPause()
	 	}
	 }
 
	render() {
		const { changeMusicPre, changeMusicNext, changeMusicPause, changeMusicStop, changeMusicPlay } = this.props
		return (
			<div className="musicContentPlayer">
				<button className="iconfont icon-shangyiqu musicContentPlayer-pre" onClick={changeMusicPre}></button>
				<button className="iconfont icon-shangyiqu1 musicContentPlayer-next" onClick={changeMusicNext}></button>
				<button className="iconfont icon-tingzhi musicContentPlayer-stop" onClick={changeMusicStop}></button>
				<button className= { cls("iconfont", "classMusic-play", this.state.icon) } onClick={this.musicPlayState}></button>
				<button className="iconfont icon-suiji musicContentPlayer-random" onClick={changeMusicPlay}></button>
			</div>
		)
	}
}