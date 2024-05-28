import IndexRoutes from ".";
import { UserManeger } from "../controllers/user.controller";
import auth from "../middlewares/auth";
import upload from "../middlewares/upload";

export class UserRoutes extends IndexRoutes {
    constructor (){
        super()
        this.intializeRoute()
    }
    private intializeRoute(){
        const userController=new UserManeger()
        const authManegar=new auth()
        this.router.post("/",userController.createUser)
        this.router.post("/upload",upload.single("img"),userController.addfile)
        this.router.post("/login",authManegar.genrateToken,userController.readUser)
        this.router.put("/:user_id",authManegar.auth,userController.updateUser)
        this.router.delete("/:user_id",authManegar.auth,userController.deleteUser)
    }
}