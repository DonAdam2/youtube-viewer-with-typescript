import React, {useEffect, useState, FC} from "react";
//axios
import axios from "axios";
//lodash
import * as _ from 'lodash';
//youtube api search
import YTSearch, {Video} from "youtube-api-search-typed/dist";
//interfaces
import {CommentEntry} from "./interfaces/CommentsInterface";
//constants
import {formatComments} from "./constants/Helpers";
//components
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM";

const App: FC = () => {
    const [videos, setVideos] = useState<Video[]>([]),
        [selectedVideo, setSelectedVideo] = useState<Video>(),
        [comments, setComments] = useState<CommentEntry[]>([]);

    useEffect(() => {
        videoSearch("liverpool");
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

    const videoSearch = _.debounce(async (term: string) => {
        const videos = await YTSearch({key: API_KEY, term: term ? term : "liverpool"});

        setVideos(videos);
        setSelectedVideo(videos[0])
    }, 300);

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            {selectedVideo && <VideoDetail video={selectedVideo} comments={comments}/>}
            <VideoList
                onVideoSelect={(video: Video) => setSelectedVideo(video)}
                videos={videos}
            />
        </div>
    );
}

export default App;
