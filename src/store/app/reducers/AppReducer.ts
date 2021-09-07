//youtube api search
import {Video} from "youtube-api-search-typed/dist";
//constants
import {updateObject} from '../../../constants/Helpers';
//actions interfaces
import {Action} from "../AppActionInterfaces";
//action types
import {AppActionTypes} from '../AppActionTypes';

interface AppReducerInterface {
    videos: Video[],
    selectedVideo: Video | undefined,
}

const initialState = {
    videos: [],
    selectedVideo: undefined,
};

const reducer = (state: AppReducerInterface = initialState, action: Action) => {
    switch (action.type) {
        case AppActionTypes.SET_YOUTUBE_VIDEOS: {
            return updateObject(state, {videos: action.videos});
        }
        case AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO: {
            return updateObject(state, {selectedVideo: action.video});
        }
        default:
            return state;
    }
};

export default reducer;
