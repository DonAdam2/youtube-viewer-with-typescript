import {Video} from "youtube-api-search-typed";

export interface VideoListItemInterface {
    video: Video,
    onVideoSelect: (video: Video) => void,
}
