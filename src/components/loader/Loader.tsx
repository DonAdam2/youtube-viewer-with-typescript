import React from 'react';
//components
import CommentLoader from "./CommentLoader";
import VideoItemListLoader from "./VideoItemListLoader";
import VideoLoader from "./VideoLoader";

const Loader = () => (
    <>
        <div className="video-detail col-md-8">
            <VideoLoader />
            <CommentLoader />
            <CommentLoader />
            <CommentLoader />
        </div>
        <div className='video-detail col-md-4'>
            <VideoItemListLoader />
            <VideoItemListLoader />
            <VideoItemListLoader />
            <VideoItemListLoader />
            <VideoItemListLoader />
            <VideoItemListLoader />
            <VideoItemListLoader />
        </div>
    </>
)

export default Loader;
