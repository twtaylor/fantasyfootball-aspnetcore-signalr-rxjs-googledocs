export module Settings {
    export class Current {
        GoogleSpreadsheetsApiKey: string;
        ServerUrl: string;
        ServerPort: number;
        
        constructor() {
            // TODO: load dynamically later
            this.GoogleSpreadsheetsApiKey = '1yUeMhafkVw1L87SY3a1NvGCCfOx8U6I173dfv7ctO6A';
            this.ServerUrl = "localhost";
            this.ServerPort = 5000;
        }
    }
}