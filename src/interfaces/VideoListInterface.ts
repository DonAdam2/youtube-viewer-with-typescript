import {Video} from "youtube-api-search-typed";

export interface VideoListInterface {
    videos: Video[],
    onVideoSelect: (video: Video) => void,
}
