import express from "express";
import { create, getall, getone , update ,deleteuser } from "../controller/usercontroller.js"

const route = express.Router();

route.post("/create", create);
route.get("/getall", getall);
route.get("/getone/:id", getone);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteuser);

export default route;