import React, {useState} from 'react';
//date-fns
import {formatDistanceToNow} from 'date-fns';

const Comment = ({commentData}) => {
    const [isSeeMoreClicked, setIsSeeMoreClicked] = useState(false);

    const seeMore = () => {
        setIsSeeMoreClicked(true);
    };

    const seeLess = () => {
        setIsSeeMoreClicked(false);
    }

    return (
        <div className='comment-block'>
            <div className='wrapper'>
                <img className='author-image' src={commentData.authorProfileImageUrl} alt={commentData.authorDisplayName} />
            </div>
            <div className='wrapper'>
                <div>
                    <span className='author-name'>{commentData.authorDisplayName}</span>
                    <span className='date'>{formatDistanceToNow(new Date(commentData.publishedAt), {addSuffix: true})}</span>
                </div>
                <p className='author-comment'>
                    {isSeeMoreClicked ? <span onClick={seeLess}>{commentData.textDisplay}</span> : commentData.textDisplay.slice(0, 120)}{' '}
                    {!isSeeMoreClicked && commentData.textDisplay.length > 120 && (
                        <span>
							<span>... </span> <a onClick={seeMore} className='see-more'>See More</a>
						</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Comment;
