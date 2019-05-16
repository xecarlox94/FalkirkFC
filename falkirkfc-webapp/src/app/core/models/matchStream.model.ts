


export class MatchStream {
    match_id: string;
    live: boolean;
    
    constructor(match_id: string, live: boolean){
        this.match_id = match_id;
        this.live = live;
    }
}