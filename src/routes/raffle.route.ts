import exp from "constants";
import IndexRoutes from ".";
import RafleManegar from "../controllers/raffle.controller";
import auth from "../middlewares/auth";
class RaflleRoutes extends IndexRoutes{
    constructor(){
        super();
        this.intializeRoutes()
    }
    private intializeRoutes(){
        const rafleManegar=new RafleManegar()
        this.router.post(
           "/:creator_id",new auth().auth, rafleManegar.createARaffle
        )
        this.router.post("/",rafleManegar.raffleWinner)
    }
}
export default RaflleRoutes