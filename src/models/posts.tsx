export interface PostType {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    date: string;
    image: string;
}

class PostData implements PostType {
    id;
    title;
    subtitle;
    tags;
    date;
    image;

    constructor(id: string, title: string, subtitle: string, tags: string[], date: string, image: string) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.tags = tags;
        this.date = date;
        this.image = image;
    }
}

export default PostData;
