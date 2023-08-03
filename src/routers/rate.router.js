import {Router} from "express"; 
import { mdLimits } from "../middlewares/number.rate.limits.js";

const rate__router = Router(); 

rate__router.get("/", mdLimits, (rq, rs) => {
    rs.status(200).send("Hello world!")
})

export default rate__router; 