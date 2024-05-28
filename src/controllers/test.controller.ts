import { Request,Response } from "express";
class TestController {
    public test(req:Request,res:Response){
        res.send("Server is running like a tiger")
    }
    public test2(req:Request,res:Response){
        res.send("Server is running like a Lion")
    }
}
export default TestController