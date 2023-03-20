import  express  from "express";
import {get,getAll,create,remove,update,put} from "../controllers/lab.js";
const router = express.Router();

router.get("/users",getAll);
router.post("/users",create)
router.get("/users/:id",get)
router.delete("/users/:id", remove);
router.patch("/users/:id", update);
router.put("/users/:id", put);
export default router;