import {Dispatch} from "redux";
//lodash
import * as _ from "lodash";
//youtube api search
import YTSearch from "youtube-api-search-typed/dist";
//constants
import { API_KEY } from "../../../constants/Helpers";
//interfaces
import {Action} from "../AppActionInterfaces";
import {Video} from "youtube-api-search-typed/dist";
//action types
import { AppActionTypes } from "../AppActionTypes";

export const setSelectedYoutubeVideo = (video: Video) => ({
    type: AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO,
    video,
});

export const fetchYoutubeVideos = (term: string) => _.debounce(async (dispatch: Dispatch<Action>) => {
    try {
        const videos = await YTSearch({key: API_KEY, term: term ? term : "liverpool"});
        dispatch({
            type: AppActionTypes.SET_YOUTUBE_VIDEOS,
            videos,
        });
        dispatch({
            type: AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO,
            video: videos[0],
        });
    } catch(err) {
        console.log(err);
    }
}, 300);
