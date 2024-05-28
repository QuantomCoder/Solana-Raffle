
import App from "./app";
const port=process.env.PORT;
App.listen(port,()=>{console.log(`I am running on ${port}`)})