import React from 'react'
import MusicContentDetail from '../musicContentDetail/index.js'
import MusicContentPlayer from '../musicContentPlayer/index.js'

import './styles.less'


export default class MusicContent extends React.Component {
	render() {
		const { cover, title, singer, changeMusicPre, changeMusicNext, changeMusicPause, changeMusicStop, changeMusicPlay } = this.props
		return (
			<div className="musicContent">
				<MusicContentDetail
					cover = {cover}
					title = {title}
					singer = {singer}
				 />
				<MusicContentPlayer
					changeMusicPre = {changeMusicPre}
					changeMusicNext = {changeMusicNext}
					changeMusicPause = {changeMusicPause}
					changeMusicStop = {changeMusicStop}
					changeMusicPlay = {changeMusicPlay}
				/>
			</div>
		)
	}
}