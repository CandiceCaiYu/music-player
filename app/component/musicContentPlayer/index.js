import React from 'react'


import './styles.less'

export default class MusicContentPlayer  extends React.Component {
	render() {
		const { changeMusicPre, changeMusicNext, changeMusicPause, changeMusicStop, changeMusicPlay  } = this.props
		return (
			<div className="musicContentPlayer">
				<button className="iconfont icon-shangyiqu musicContentPlayer-pre" onClick={changeMusicPre}></button>
				<button className="iconfont icon-shangyiqu1 musicContentPlayer-next"></button>
				<button className="iconfont icon-tingzhi musicContentPlayer-stop"></button>
				<button className="iconfont icon-zanting musicContentPlayer-pause"></button>
				<button className="iconfont icon-bofang musicContentPlayer-play"></button>
				<button className="iconfont icon-suiji musicContentPlayer-random"></button>
			</div>
		)
	}
}