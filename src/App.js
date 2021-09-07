import React, {useEffect, useState} from "react";
//axios
import axios from "axios";
//lodash
import {debounce} from "lodash";
//youtube api search
import YTSearch from "youtube-api-search";
//components
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM";

const App = () => {
    const [videos, setVideos] = useState([]),
        [selectedVideo, setSelectedVideo] = useState(null),
        [comments, setComments] = useState([]);

    useEffect(() => {
        videoSearch("liverpool");
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const config = {
                        method: 'get',
                        url: 'https://www.googleapis.com/youtube/v3/commentThreads',
                        params: {
                            key: API_KEY,
                            textFormat: 'plainText',
                            part: 'snippet',
                            videoId: selectedVideo.id.videoId,
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

    const videoSearch = debounce((term) => {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            setVideos(videos);
            setSelectedVideo(videos[0])
        });
    }, 300);

    const formatComments = (data) => {
        return data.map(el => {
            const {
                id,
                snippet: {
                    totalReplyCount,
                    topLevelComment: {
                        snippet: {
                            authorDisplayName,
                            authorProfileImageUrl,
                            likeCount,
                            textDisplay,
                            publishedAt
                        }
                    }
                }
            } = el;
            return ({
                id,
                authorDisplayName,
                authorProfileImageUrl,
                likeCount,
                textDisplay,
                totalReplyCount,
                publishedAt,
            })
        });
    }

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={selectedVideo} comments={comments}/>
            <VideoList
                onVideoSelect={(video) => setSelectedVideo(video)}
                videos={videos}
            />
        </div>
    );
}

export default App;
