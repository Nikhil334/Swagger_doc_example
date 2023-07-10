import div from "../sevices/divservice";
import { Request,Response } from "express";

const divcontrol = (req:Request,res:Response):void=>{
    div(req,res);
}

export default divcontrol;