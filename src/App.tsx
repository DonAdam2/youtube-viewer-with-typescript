import React, {useEffect, FC} from "react";
import {useDispatch, useSelector} from "react-redux";
//interfaces
import {State} from "./store/rootReducer";
//actions
import {fetchYoutubeVideos, setSelectedYoutubeVideoComments} from "./store/app/actions/AppActions";
//selectors
import {getAppSelectedYoutubeVideo, getAppSelectedYoutubeVideoComments} from "./store/app/selectors/AppSelectors";
//components
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App: FC = () => {
    const dispatch = useDispatch(),
        selectedVideo = useSelector((state: State) => getAppSelectedYoutubeVideo(state)),
        comments = useSelector((state: State) => getAppSelectedYoutubeVideoComments(state));

    useEffect(() => {
        dispatch(fetchYoutubeVideos('liverpool'));
    }, []);

    useEffect(() => {
        if (selectedVideo) {
            dispatch(setSelectedYoutubeVideoComments())
        }
    }, [selectedVideo]);

    return (
        <div>
            <SearchBar />
            {selectedVideo && <VideoDetail comments={comments}/>}
            <VideoList />
        </div>
    );
}

export default App;
