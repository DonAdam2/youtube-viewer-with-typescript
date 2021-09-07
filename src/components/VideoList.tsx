import React, {FC} from "react";
//interfaces
import {VideoListInterface} from "../interfaces/VideoListInterface";
//components
import VideoListItem from "./video_list_item";

const VideoList:FC<VideoListInterface> = ({videos, onVideoSelect}) => {
    const videoItems = videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={video.etag}
                video={video}
            />
        );
    });

    return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
