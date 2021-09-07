import React, {FC} from "react";
import {useSelector} from "react-redux";
//interfaces
import {Video} from "youtube-api-search-typed/dist";
import {State} from "../store/rootReducer";
//selectors
import {getAppYoutubeVideos} from "../store/app/selectors/AppSelectors";
//components
import VideoListItem from "./VideoListItem";

const VideoList:FC = () => {
    const videos = useSelector((state: State) => getAppYoutubeVideos(state));

    const videoItems = videos.map((video:Video)  => {
        return (
            <VideoListItem
                key={video.etag}
                video={video}
            />
        );
    });

    return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
