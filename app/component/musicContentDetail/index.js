import React from 'react'


import './styles.less'

export default class MusicContentDetail extends React.Component {
	render() {
		const { cover, title, singer } = this.props
		return (
			<div className="musicContentDetail">
				<div className="musicContentDetail-cover">
					<img src= {`${cover}`} alt="歌曲图片"/>
				</div>
				<ul className="musicContentDetail-songitem">
					<li>
						<h2>title: </h2>
						<p>{title}</p>
					</li>
					<li>
						<h2>singer: </h2>
						<p>{singer}</p>
					</li>
				</ul>
			</div>
		)
	}
}