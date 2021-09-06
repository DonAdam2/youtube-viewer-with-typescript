import React, {useEffect, useState} from "react";
//lodash
import _ from "lodash";
//youtube api search
import YTSearch from "youtube-api-search";
//components
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM";

const App = () => {
  const [videos, setVideos] = useState([]),
      [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    videoSearch("liverpool");
  }, []);

  const videoSearch = _.debounce((term) => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {

      setVideos(videos);
      setSelectedVideo(videos[0])
    });
  }, 300);

  return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList
            onVideoSelect={(video) => setSelectedVideo(video )}
            videos={videos}
        />
      </div>
  );
}

export default App;
