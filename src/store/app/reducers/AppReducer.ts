//youtube api search
import {Video} from "youtube-api-search-typed/dist";
//constants
import {updateObject} from '../../../constants/Helpers';
//interfaces
import {Action} from "../AppActionInterfaces";
import {CommentEntry} from "../../../interfaces/CommentsInterface";
//action types
import {AppActionTypes} from '../AppActionTypes';

interface AppReducerInterface {
    videos: Video[],
    selectedVideo: Video | undefined,
    comments: CommentEntry[],
}

const initialState = {
    videos: [],
    selectedVideo: undefined,
    comments: [],
};

const reducer = (state: AppReducerInterface = initialState, action: Action) => {
    switch (action.type) {
        case AppActionTypes.SET_YOUTUBE_VIDEOS: {
            return updateObject(state, {videos: action.videos});
        }
        case AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO: {
            return updateObject(state, {selectedVideo: action.video});
        }
        case AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO_COMMENTS: {
            return updateObject(state, {comments: action.comments});
        }
        default:
            return state;
    }
};

export default reducer;
