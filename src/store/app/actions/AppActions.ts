//redux thunk
import { ThunkDispatch } from "redux-thunk";
//axios
import axios from "axios";
//lodash
import * as _ from "lodash";
//youtube api search
import YTSearch, {Video} from "youtube-api-search-typed/dist";
//constants
import {API_KEY, formatComments} from "../../../constants/Helpers";
//interfaces
import {Action} from "../AppActionInterfaces";
import {State} from "../../rootReducer";
//selectors
import { getAppSelectedYoutubeVideo } from "../selectors/AppSelectors";
//action types
import {AppActionTypes} from "../AppActionTypes";

export const setSelectedYoutubeVideo = (video: Video) => ({
    type: AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO,
    video,
});

export const fetchYoutubeVideos = (term: string) => _.debounce(async (dispatch: ThunkDispatch<State, undefined,Action>) => {
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

export const setSelectedYoutubeVideoComments = () => async (dispatch: ThunkDispatch<State, undefined,Action>, getState: () => State) => {
    const state = getState(),
        selectedVideo = getAppSelectedYoutubeVideo(state);

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

        dispatch({
            type: AppActionTypes.SET_SELECTED_YOUTUBE_VIDEO_COMMENTS,
            comments: formatComments(res.data.items),
        })
    } catch(err) {
        console.log(err);
    }
}
