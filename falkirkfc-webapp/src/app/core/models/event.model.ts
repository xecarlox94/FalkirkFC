


export class Event {
    _id?: string;
    body?: string;
    subtitle?: string;
    title?: string;
    time?: string;

    constructor(title: string, subtitle: string, time: string, body: string, _id: string = null){
        this.title = title;
        this.subtitle = subtitle;
        this.time = time;
        this.body = body;
        this._id = _id;
    }

    setId(id: string){
        this._id = id;
    }
}