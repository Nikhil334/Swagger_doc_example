import log from "../sevices/logservice";
import { Request,Response } from "express";

const logcontrol = (req:Request,res:Response):void=>{
    log(req,res);
}

export default logcontrol;