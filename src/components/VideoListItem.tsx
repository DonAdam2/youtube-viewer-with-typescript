import React, {FC} from "react";
import {useDispatch} from "react-redux";
//interfaces
import {VideoListItemInterface} from "../interfaces/VideoListItemInterface";
//actions
import {setSelectedYoutubeVideo} from "../store/app/actions/AppActions";

const VideoListItem: FC<VideoListItemInterface> = ({ video }) => {
  const dispatch = useDispatch(),
      imageUrl = video.snippet.thumbnails.default.url;

  const onVideoSelect = () => {
    dispatch(setSelectedYoutubeVideo(video));
  }

  return (
    <li onClick={onVideoSelect} className="list-group-item single-video">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="video thumbnail" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
