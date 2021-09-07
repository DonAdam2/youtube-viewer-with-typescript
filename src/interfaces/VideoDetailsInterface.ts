//interfaces
import {Video} from "youtube-api-search-typed";
import {CommentEntry} from "./CommentsInterface";

export interface VideoDetailsInterface {
    video: Video,
    comments: CommentEntry[],
}
