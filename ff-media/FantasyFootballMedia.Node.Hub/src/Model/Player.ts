import Mongoose = require('mongoose');

export module Model  {
    interface IPlayer {
        rank: string;
        player: string;
        chosenBy: string;
        media: string;
        created: Date;
        updated: Date;
        seen: Boolean;
    }

    interface IPlayerModel extends IPlayer, Mongoose.Document { } 

    var playerSchema = new Mongoose.Schema({
        rank: { type: String, index: true }
        , player: String
        , chosenBy: String
        , media: String
        , created: Date
        , updated: Date
        , seen: Boolean
    })

    export const Player : Mongoose.Model<IPlayerModel> = Mongoose.model<IPlayerModel>("Player", playerSchema);
}
