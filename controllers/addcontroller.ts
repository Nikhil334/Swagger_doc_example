import add from "../sevices/addservice";
import { Request,Response } from "express";

const addcontrol = (req:Request,res:Response):void=>{
    add(req,res);
}

export default addcontrol;