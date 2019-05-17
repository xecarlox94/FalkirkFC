
export class News {
    _id?: string;
    time?: string;
    title?: string;
    topic?: string;
    subtitle?: string;
    body?: string;

    constructor(title: string, subtitle: string, topic: string, time: string, body: string, _id: string = null){
        this.title = title;
        this.subtitle = subtitle;
        this.topic = topic;
        this.time = time;
        this.body = body;
        this._id = _id;
    }

    setId(id: string){
        this._id = id;
    }
    
}