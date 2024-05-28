import IndexRoutes from ".";
import RaflleRoutes from "./raffle.route";
import { AnotherRouter2 } from "./route2";
import TicketRoutes from "./ticket.route";
import { UserRoutes } from "./user.Route";
class MainRouter extends IndexRoutes {
    // Routes
    private anotherROuter2 = new AnotherRouter2()
    constructor() {
        super();
        this.intializeRoutes()
    }
    // public getRouter() {
    //     return this.router;
    // }
    private intializeRoutes() {
        this.router.use("/user", new UserRoutes().router);
        this.router.use("/raffle",new RaflleRoutes().router)
        this.router.use("/ticket",new TicketRoutes().router)
        this.router.use("/v2", this.anotherROuter2.router);
    }

}

export default MainRouter