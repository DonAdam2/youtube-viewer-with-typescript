import {Video} from "youtube-api-search-typed/dist";
import {AppActionTypes} from './AppActionTypes';

interface SetYoutubeVideos {
    type: AppActionTypes.SET_YOUTUBE_VIDEOS,
    videos: Video[]
}

interface SetSelectedYoutubeVideo {
    type: AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO,
    video: Video
}

export type Action = SetYoutubeVideos | SetSelectedYoutubeVideo;
