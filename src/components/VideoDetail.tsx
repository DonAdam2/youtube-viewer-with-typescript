import React, {FC} from "react";
import {useSelector} from "react-redux";
//interfaces
import {VideoDetailsInterface} from "../interfaces/VideoDetailsInterface";
import {State} from "../store/rootReducer";
//selectors
import {getAppSelectedYoutubeVideo} from "../store/app/selectors/AppSelectors";
//components
import Comment from "./Comment";

const VideoDetail: FC<VideoDetailsInterface> = ({comments}) => {
    const video = useSelector((state: State) => getAppSelectedYoutubeVideo(state));

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId,
        url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title={video.snippet.title}
                    className="embed-responsive-item"
                    src={url}
                />
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
            <hr/>
            <p className='comments-number'>{comments.length} comments</p>
            {comments.map((el) => (
                <Comment key={el.id} commentData={el}/>
            ))}
        </div>
    );
};

export default VideoDetail;
