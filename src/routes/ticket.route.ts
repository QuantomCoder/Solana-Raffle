import IndexRoutes from ".";
import TicketManegar from "../controllers/ticket.controller";
import auth from "../middlewares/auth";
class TicketRoutes extends IndexRoutes{
    constructor(){
        super()
        this.intializeRoutes()
    }
    private intializeRoutes(){
        const ticketController=new TicketManegar()
        this.router.post("/",new auth().auth,ticketController.ticketCreator)
    }
}
export default TicketRoutes