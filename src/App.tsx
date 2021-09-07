import React, {useEffect, useState, FC} from "react";
import {useDispatch, useSelector} from "react-redux";
//axios
import axios from "axios";
//youtube api search
import {Video} from "youtube-api-search-typed/dist";
//interfaces
import {CommentEntry} from "./interfaces/CommentsInterface";
import {State} from "./store/rootReducer";
//actions
import {fetchYoutubeVideos, setSelectedYoutubeVideo} from "./store/app/actions/AppActions";
//selectors
import {getAppSelectedYoutubeVideo, getAppYoutubeVideos} from "./store/app/selectors/AppSelectors";
//constants
import {API_KEY, formatComments} from "./constants/Helpers";
//components
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App: FC = () => {
    const dispatch = useDispatch(),
        videos = useSelector((state: State) => getAppYoutubeVideos(state)),
        selectedVideo = useSelector((state: State) => getAppSelectedYoutubeVideo(state)),
        [comments, setComments] = useState<CommentEntry[]>([]);

    useEffect(() => {
        dispatch(fetchYoutubeVideos('liverpool'));
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const config = {
                        url: 'https://www.googleapis.com/youtube/v3/commentThreads',
                        params: {
                            key: API_KEY,
                            textFormat: 'plainText',
                            part: 'snippet',
                            videoId: selectedVideo?.id.videoId,
                            maxResults: 50,
                        }
                    },
                    res = await axios(config);

                setComments(formatComments(res.data.items));
            } catch (err) {
                console.log(err);
            }
        }
        if (selectedVideo) {
            fetchComments();
        }
    }, [selectedVideo]);

    return (
        <div>
            <SearchBar />
            {selectedVideo && <VideoDetail comments={comments}/>}
            <VideoList
                onVideoSelect={(video: Video) => dispatch(setSelectedYoutubeVideo(video))}
                videos={videos}
            />
        </div>
    );
}

export default App;
