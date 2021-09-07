//interfaces
import {CommentApiEntry} from "../interfaces/CommentsInterface";

export const formatComments = (data: CommentApiEntry[]) => {
    return data.map(el => {
        const {
            id,
            snippet: {
                topLevelComment: {
                    snippet: {
                        authorDisplayName,
                        authorProfileImageUrl,
                        textDisplay,
                        publishedAt
                    }
                }
            }
        } = el;
        return ({
            id,
            authorDisplayName,
            authorProfileImageUrl,
            textDisplay,
            publishedAt,
        })
    });
};
