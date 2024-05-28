import express, { Application, json } from "express";
import { tableSync, dbSync } from "./config/dbSync";
import MainRouter from "./routes/main.routes";
class app {
    public App: Application
    constructor() {
        this.App = express();
        this.config()
        this.dbConactions();
        this.routesInitializer();
        
    }
    private async dbConactions() {
        await dbSync();
        console.log("DataBase syncronised")
        await tableSync();
        console.log("table Syncronized")
    }
    private routesInitializer() {
        const allRoutes = new MainRouter();
        this.App.use(allRoutes.router);
    }
    private config(){
        this.App.use(express.json({ limit: "25mb" }));
    }
}
export default new app().App