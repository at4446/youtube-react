import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
	console.log(props);
	const videoItem = props.videos.map(video => {
		return (
			<VideoListItem
				key={video.id.videoId}
				video={video}
				onVideoSelect={props.onVideoSelect}
			/>
		);
	});

	return <ul className="col-md-4 list-group">{videoItem}</ul>;
};

export default VideoList;
