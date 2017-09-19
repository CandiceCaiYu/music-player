import React from 'react'
import Header from '../header/index.js'
import Progress from '../progress/index.js'
import MusicContent from '../musicContent/index.js'
import Voice from '../voice/index.js'
import $ from 'jquery'
import jPlayer from 'jPlayer'
import { MUSIC_LIST } from '../../config/musicList.js'
import './styles.less'

let duration = null,
	songNumber = 0;

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			progress: 0,
			musicTime: 0,
			voice: 80,
			voiceIcon: 'icon-shengyin',
			currentMusicItem: MUSIC_LIST[songNumber],
		}
	}

	componentDidMount() {
		this.jplayerinit();
		$('#player').jPlayer('setMedia', {
			mp3: this.state.currentMusicItem.file
		}).jPlayer('play')
		this.changeMusic(this.state.currentMusicItem.file);
	}
	

	componentWillUpdate(nextProps, nextState) {
		if(nextState.currentMusicItem) {
			if(nextState.currentMusicItem.id !== this.state.currentMusicItem.id){
					// after music file change
				$('#player').jPlayer('setMedia', {
					mp3: nextState.currentMusicItem.file
				}).jPlayer('play')
			}
		}
		if(this.state.voiceIcon !== nextState.voiceIcon) {
			this.changeVoiceIcon()
			if(nextState.voiceIcon === 'icon-tushujiemianjingyin') {
			 	$('#player').jPlayer('mute');
			 	this.setState({
			 		voice: 0
			 	})
			}else {
				$('#player').jPlayer('unmute');
				this.setState({
					voice: this.changeVoiceLevel()
				})
			}
		}

		
	}

	changeVoiceLevel = () => {
		$('#player').jPlayer($.jPlayer.event.volumeChange, (e) => {
			return e.jPlayer.options.volume * 100
		})
	}

	componentWillUnMount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
		$('#player').unbind($.jPlayer.event.ended);
	}
	
	// init jPlayer
	jplayerinit = () => {
		$('#player').jPlayer({
			supplied: 'mp3',
			wmod: 'window',
			//volume: 0.15,
			//swfPath: "../../dist/jplayer", // jquery.jplayer.swf 文件存放的位置
			//supplied: "mp3",
			//wmode: "window", // 设置Flash 的wmode，具体设置参见文档说明，写window 就好了
			// useStateClassSkin: true, // 默认情况下，播放和静音状态下的dom 元素会添加class jp-state-playing, jp-state-muted 这些状态会对应一些皮肤，是否使用这些状态对应的皮肤。
			// autoBlur: false, // 点击之后自动失去焦点
			smoothPlayBar: true, // 平滑过渡
			// keyEnabled: true, // 是否允许键盘控制播放
			 remainingDuration: true, // 是否显示剩余播放时间,如果为false 那么duration 那个dom显示的是【3:07】,如果为true 显示的为【-3:07】
		})
	} 
	// autoplay && progress
	changeMusic = (music) => {
		if(!this.state.currentMusicItem){ return; }
		 $("#player").jPlayer({
			ready: function (event) {
				$('#player').jPlayer("setMedia", {
					mp3: music,
				}).jPlayer('play');
			}
			
		});
		$('#player').bind($.jPlayer.event.timeupdate, (event) => {
			duration = event.jPlayer.status.duration;
			this.setState({
				musicTime: Math.round(event.jPlayer.status.currentTime),    //显示时间
				progress: event.jPlayer.status.currentPercentAbsolute,
			});
			if(this.state.voice !== 0) {
				this.setState({
					voice: event.jPlayer.options.volume * 100
				})
			}
		});
	}


	// change the progress
	progressChangeHandler = progress => {
		$('#player').jPlayer('play', duration * progress)
	}
	
	// change the voice
	voiceChangeHandler = (progress) => {
		$('#player').jPlayer('volume', progress)
	}
	
	// change the voice icon
	changeVoiceIcon = () => {
		if(this.state.voiceIcon === 'icon-shengyin') {
			this.setState({
				voiceIcon: 'icon-tushujiemianjingyin' 

			})
		}else{
			this.setState({
				voiceIcon: 'icon-shengyin'
			})
		}
	} 
	changeMusicPre = () => {
		if(songNumber < 1) {
			return;
		}
		songNumber--;
		this.setState({
			currentMusicItem: MUSIC_LIST[songNumber]
		})
	}

	changeMusicNext = () => {
		songNumber++;
		if(songNumber >= MUSIC_LIST.length) {
			songNumber = 0;
		}
		this.setState({
			currentMusicItem: MUSIC_LIST[songNumber]
		})
	}

	changeMusicPause = () => {		
		$('#player').jPlayer('pause')
	}

	changeMusicPlay = () => {		
		$('#player').jPlayer('play')
	}

	changeMusicStop = () => {
		$('#player').jPlayer('stop')
	}

	changeMusicRandom = () => {
		let index = Math.floor(Math.random() * MUSIC_LIST.length);
		while(index == songNumber) {
			index = Math.floor(Math.random() * MUSIC_LIST.length);
		}
		songNumber = index;
		this.setState({
			currentMusicItem: MUSIC_LIST[songNumber]
		})
	}
	changeMusicLoop = () => {
		this.changeMusicPlay();
	}
	changeMusicLoopAll = () => {
		this.changeMusicNext();
	}

	render() {
		return (
			<div className="home">
				<Header song = {this.state.currentMusicItem.title} />
				<div className = "voiceAndProgress">
					<Progress 
						musicTime = { this.state.musicTime }
						totalTime = { duration }
					    progress = { this.state.progress }
					    progressChangeHandler = { this.progressChangeHandler }
					/>
					<Voice 
						progress = { this.state.voice  }
						voiceIcon = { this.state.voiceIcon }
						changeVoiceIcon = { this.changeVoiceIcon }
						voiceChangeHandler = { this.voiceChangeHandler }
					/>
				</div>
				
				<MusicContent 
					cover = { this.state.currentMusicItem.cover }
					title = { this.state.currentMusicItem.title }
					singer = { this.state.currentMusicItem.singer }
					changeMusicPre = {this.changeMusicPre}
					changeMusicNext = {this.changeMusicNext}
					changeMusicPlay = {this.changeMusicPlay}
					changeMusicPause = {this.changeMusicPause}
					changeMusicStop = {this.changeMusicStop}
					changeMusicRandom = {this.changeMusicRandom} 
					changeMusicLoop =  {this.changeMusicLoop} 
					changeMusicLoopAll =  {this.changeMusicLoopAll} 
				/>
			</div>
		)
	}
}