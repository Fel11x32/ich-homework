import React from 'react'

const VideoComponent = () => {
	return (
		<video width='320' height='240' controls>
			<source
				src='https://www.w3schools.com/html/mov_bbb.mp4'
				type='video/mp4'
			/>
		</video>
	)
}

export default VideoComponent
