import sqrt from "../sevices/sqrtservice";
import { Request,Response } from "express";

const sqrtcontrol = (req:Request,res:Response):void=>{
    sqrt(req,res);
}

export default sqrtcontrol;