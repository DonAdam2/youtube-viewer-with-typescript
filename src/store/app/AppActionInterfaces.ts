//interfaces
import {Video} from "youtube-api-search-typed/dist";
import { CommentEntry } from "../../interfaces/CommentsInterface";
//action types
import {AppActionTypes} from './AppActionTypes';

interface SetYoutubeVideos {
    type: AppActionTypes.SET_YOUTUBE_VIDEOS,
    videos: Video[]
}

interface SetSelectedYoutubeVideo {
    type: AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO,
    video: Video
}

interface SetSelectedYoutubeVideoComments {
    type: AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO_COMMENTS,
    comments: CommentEntry[]
}

export type Action = SetYoutubeVideos | SetSelectedYoutubeVideo | SetSelectedYoutubeVideoComments;
