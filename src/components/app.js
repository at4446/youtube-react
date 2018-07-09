import React, { Component } from "react";
import ReactDOM from "react-dom";
import Searchbar from "./search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import _ from 'lodash';

const API = "AIzaSyBWHT1CraxgG_qCpzq-Lldu3odftyUOEvg";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
			this.videoSearch('surfeboards');
	
	}
	videoSearch(term){
			YTSearch({ key: API, term: term }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});

	}
	render() {
		    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 1000);
		return (
			<div>
				<Searchbar onSearchTermChange={videoSearch}/> 
				<div className="row">
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={selectedVideo =>
						this.setState({ selectedVideo })
					}
				/>
			</div>
			</div>
		);
	}
}
