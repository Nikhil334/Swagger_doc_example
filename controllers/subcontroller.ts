import sub from "../sevices/subservice";
import { Request,Response } from "express";

const subcontrol = (req:Request,res:Response):void=>{
    sub(req,res);
}

export default subcontrol;