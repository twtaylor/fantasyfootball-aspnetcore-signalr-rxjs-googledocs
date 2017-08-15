import { Model } from '../Model/Player';
import Mongoose = require('mongoose');
import GoogleSpreadsheet = require('google-spreadsheet');

export module Repository {
    export class Players {
        Spreadsheet:any;
        constructor(googleSheetsApiKey) {
            this.Spreadsheet = new GoogleSpreadsheet(googleSheetsApiKey);
        }
        async getPlayers(): Promise<void> { 
            return await this.Spreadsheet.getRows({ offset: 1,
                limit:320});
        };
        async dropAllPlayers(): Promise<void> {
            return await Model.Player.remove({}, (e) => { 
                if (e) {
                    console.error('Error clearing players: ' + e);
                }
            });
        };
        async loadPlayerData() {
            var ds = await this.getPlayers();
            
        };
    }
}
