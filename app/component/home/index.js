import React from 'react'
import Header from '../header/index.js'
import Progress from '../progress/index.js'
import $ from 'jquery'
import jPlayer from 'jPlayer'
import theMusic from '../../music/countryStyle.mp3'

import './styles.less'

let duration = null;
export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			progress: '-'
		}
	}
	componentDidMount() {
		$("#player").jPlayer({
			ready: function (event) {
				$("#player").jPlayer("setMedia", {
					title: "test1或者小城大事",
					mp3: theMusic
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
		});
	}
	componentWillUnMount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
	}
	progressChangeHandler = progress => {
		$('#player').jPlayer('play', duration * progress)
	}
	render() {
		//console.log('progress: ' + this.state.progress)
		return (
			<div className="home">
				<Header />
				<Progress 
				    progress = { this.state.progress }
				    progressChangeHandler = { this.progressChangeHandler }
				    //bgColor = '#f00'
				></Progress>
			</div>
		)
	}
}