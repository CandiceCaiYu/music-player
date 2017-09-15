import React from 'react'
import { cls } from '../../utils/libs.js'
import $ from 'jquery'
import jPlayer from 'jPlayer'

import './styles.less'

const MODE = ['icon-suiji', 'icon-danquxunhuan', 'icon-xunhuan']
export default class MusicContentPlayer extends React.Component {
	constructor() {
		super();
		this.state = {
			iconPlay: 'icon-zanting',
			currentMode: 'icon-suiji',
			play: true,
			stop: false
		}
	}

	// 播放状态
	musicPlayState = () => {
		if(this.state.iconPlay === 'icon-zanting') {
			//pause;
			this.setState({
				iconPlay: 'icon-bofang',
				play: false,
				stop: false
			})
		}else {
			//play;
			this.setState({
				iconPlay: 'icon-zanting',
				play: true,
				stop: false
			})
		}
	 }
	
	// 播放方式
	musicPlayMode = () => {
		let index = MODE.indexOf(this.state.currentMode);
		if(index >= MODE.length-1) {
			this.setState({
				currentMode: MODE[0]
			})
		}else{
			this.setState({
				currentMode: MODE[index+1]
			})
		}
		
	} 

	//音乐停止
	musicStop = () => {
	 	this.setState({
	 		iconPlay: 'icon-bofang',
	 		play: false,
	 		stop: true,
	 	})
	}

	componentDidMount() {
		$('#player').bind($.jPlayer.event.ended, () => {
			this.props.changeMusicRandom();
		})
	}

	// 更新数据
	 componentWillUpdate(nextProps, nextStates) {
	 	if(this.state.iconPlay != nextStates.iconPlay) {
		 	if(!nextStates.stop) {
		        if(nextStates.iconPlay === 'icon-zanting') {
			 		this.props.changeMusicPlay()
			 	}else {
			 		this.props.changeMusicPause()
			 	}
		 	}else {
		 		this.props.changeMusicStop()
		 	}	 		
	 	}
	 	if(this.state.currentMode != nextStates.currentMode) {
	 		$('#player').unbind($.jPlayer.event.ended)
			this.changePlayMode()
	 	}
	 }

	 //修改音乐播放模式
 	 changePlayMode = () => {
	 	switch(this.state.currentMode) {
			case 'icon-suiji':
				$('#player').bind($.jPlayer.event.ended, () => {
					this.props.changeMusicLoop();
				})
				break;
			case 'icon-danquxunhuan':
				$('#player').bind($.jPlayer.event.ended, () => {
					this.props.changeMusicLoopAll();
				})				
				break;
			case 'icon-xunhuan':
				$('#player').bind($.jPlayer.event.ended, () => {
					this.props.changeMusicRandom();
				})				
				break; 
			default:
				$('#player').bind($.jPlayer.event.ended, () => {
					this.props.changeMusicRandom();
				})
	 	}
	 }
	render() {
		const { changeMusicPre, changeMusicNext, changeMusicPause, changeMusicStop, changeMusicPlay, changeMusicRandom, changeMusicLoop, changeMusicLoopAll } = this.props
		return (
			<div className="musicContentPlayer">
				<button className="iconfont icon-shangyiqu musicContentPlayer-pre" onClick={changeMusicPre}></button>
				<button className="iconfont icon-shangyiqu1 musicContentPlayer-next" onClick={changeMusicNext}></button>
				<button className="iconfont icon-tingzhi musicContentPlayer-stop" onClick={this.musicStop}></button>
				<button className= { cls("iconfont", "classMusic-play", this.state.iconPlay) } onClick={this.musicPlayState}></button>
				<button className= { cls("iconfont", "classMusic-status", this.state.currentMode)} onClick={this.musicPlayMode}></button>
			</div>
		)
	}
}