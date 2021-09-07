import {Video} from "youtube-api-search-typed";

export interface VideoListInterface {
    onVideoSelect: (video: Video) => void,
}
