class Post {
    constructor (id,ownerId, date, image,content, video,category, tag) {
        this.id = id;
        this.ownerId = ownerId;
        this.date = date;
        this.content = content;
        this.image = image;
        this.video = video;
        this.category = category;
        this.tag = tag;
    }
}


export default Post