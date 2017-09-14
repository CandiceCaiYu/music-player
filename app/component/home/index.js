import React from 'react'
import Header from '../header/index.js'
import Progress from '../progress/index.js'
import MusicContent from '../musicContent/index.js'
import $ from 'jquery'
import jPlayer from 'jPlayer'
//import theMusic from '../../music/countryStyle.mp3'
import { MUSIC_LIST } from '../../config/musicList.js'
import './styles.less'

let duration = null,
	songNumber = 0;

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			progress: '-',
			currentMusicItem: MUSIC_LIST[songNumber],
			// playState: {
			// 	icon: 'icon-zanting',
			// 	state:  this.changeMusicPlay
			// }
		}
	}

	componentDidMount() {
		this.changeMusic(this.state.currentMusicItem.file);
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextState.currentMusicItem) {
			if(nextState.currentMusicItem.id == this.state.currentMusicItem.id){
					return;
			}
		}
		
		this.changeMusic(this.state.currentMusicItem.file);
	}

	componentWillUnMount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
	}

	changeMusic = (music) => {
		if(!this.state.currentMusicItem){ return; }

		//let music = this.state.currentMusicItem.file;


		$("#player").jPlayer({
			ready: function (event) {
				$("#player").jPlayer("setMedia", {
					mp3: music,
				}).jPlayer('play');
			},
			//swfPath: "../../dist/jplayer", // jquery.jplayer.swf 文件存放的位置
			supplied: "mp3",
			//wmode: "window", // 设置Flash 的wmode，具体设置参见文档说明，写window 就好了
			// useStateClassSkin: true, // 默认情况下，播放和静音状态下的dom 元素会添加class jp-state-playing, jp-state-muted 这些状态会对应一些皮肤，是否使用这些状态对应的皮肤。
			// autoBlur: false, // 点击之后自动失去焦点
			// smoothPlayBar: true, // 平滑过渡
			// keyEnabled: true, // 是否允许键盘控制播放
			// remainingDuration: true, // 是否显示剩余播放时间,如果为false 那么duration 那个dom显示的是【3:07】,如果为true 显示的为【-3:07】
			// toggleDuration: true //允许点击剩余时间的dom 时切换 剩余播放时间的方式，比如从【3:07】点击变成【-3：07】如果设置为false ,那么点击无效，只能显示remainingDuration 设置的方式。
		});
		$('#player').bind($.jPlayer.event.timeupdate, (event) => {
			duration = event.jPlayer.status.duration;
			this.setState({
				//progress: Math.round(event.jPlayer.status.currentTime)    //显示时间
				progress: event.jPlayer.status.currentPercentAbsolute
			});
		});	}
	
	progressChangeHandler = progress => {
		$('#player').jPlayer('play', duration * progress)
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
			return;
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

	render() {
		return (
			<div className="home">
				<Header song = {this.state.currentMusicItem.title} />
				<Progress 
				    progress = { this.state.progress }
				    progressChangeHandler = { this.progressChangeHandler }
				    //bgColor = '#f00'
				/>
				<MusicContent 
					cover = { this.state.currentMusicItem.cover }
					title = { this.state.currentMusicItem.title }
					singer = { this.state.currentMusicItem.singer }
					changeMusicPre = {this.changeMusicPre}
					changeMusicNext = {this.changeMusicNext}
					changeMusicPlay = {this.changeMusicPlay}
					changeMusicPause = {this.changeMusicPause}
					changeMusicStop = {this.changeMusStop}
				/>
			</div>
		)
	}
}