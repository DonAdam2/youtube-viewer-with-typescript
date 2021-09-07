import React, {useEffect, FC} from "react";
import {useDispatch, useSelector} from "react-redux";
//interfaces
import {State} from "./store/rootReducer";
//actions
import {fetchYoutubeVideos, setSelectedYoutubeVideoComments} from "./store/app/actions/AppActions";
//selectors
import {getAppSelectedYoutubeVideo} from "./store/app/selectors/AppSelectors";
//components
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Loader from "./components/loader/Loader";

const App: FC = () => {
    const dispatch = useDispatch(),
        selectedVideo = useSelector((state: State) => getAppSelectedYoutubeVideo(state));

    useEffect(() => {
        dispatch(fetchYoutubeVideos('liverpool'));
    }, [dispatch]);

    useEffect(() => {
        if (selectedVideo) {
            dispatch(setSelectedYoutubeVideoComments())
        }
    }, [selectedVideo, dispatch]);

    return (
        <>
            <SearchBar />
            {!selectedVideo ? <Loader/> : (
                <>
                    <VideoDetail />
                    <VideoList />
                </>
            )}
        </>
    );
}

export default App;
