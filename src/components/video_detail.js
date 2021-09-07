import React from "react";
//components
import Comment from "./Comment";

const VideoDetail = ({video, comments}) => {
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
