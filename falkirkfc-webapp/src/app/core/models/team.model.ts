import { Player } from './player.model';


export class Team {
    name: string;
    manager: string;
    players?: Player[];
    _id?: string

    constructor(name: string, manager: string, id: string = null){
        this.name = name;
        this.manager = manager;
        this._id = id;
    }

    setPlayers(players: Player[]){
        this.players = players
    }

    getPlayers(){
        return this.players.slice();
    }
}