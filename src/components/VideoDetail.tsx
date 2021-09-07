import React, {FC} from "react";
import {useSelector} from "react-redux";
//interfaces
import {State} from "../store/rootReducer";
import {CommentEntry} from "../interfaces/CommentsInterface";
//selectors
import {getAppSelectedYoutubeVideo, getAppSelectedYoutubeVideoComments} from "../store/app/selectors/AppSelectors";
//components
import Comment from "./Comment";

const VideoDetail: FC = () => {
    const video = useSelector((state: State) => getAppSelectedYoutubeVideo(state)),
        comments = useSelector((state: State) => getAppSelectedYoutubeVideoComments(state));

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
            {comments.map((el: CommentEntry) => (
                <Comment key={el.id} commentData={el}/>
            ))}
        </div>
    );
};

export default VideoDetail;
