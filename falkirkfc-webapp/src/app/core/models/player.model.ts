

export class Player {
    name: string;
    position: string;
    team: string;
    _id?: string;
    
    constructor(name: string, position: string, team: string, id: string = null){
        this.name = name;
        this.position = position;
        this.team = team;
        this._id = id;
    }

    setId(id: string){
        this._id = id;
    }
}