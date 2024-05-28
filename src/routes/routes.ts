import IndexRoutes from ".";
import TestController from "../controllers/test.controller";

export class AnotherRouter extends IndexRoutes {
    private testController = new TestController()
    constructor() {
        super();
        this.intializeRoutes()
    }
    public intializeRoutes() {
        this.router.get("/test", this.testController.test)
    }
}