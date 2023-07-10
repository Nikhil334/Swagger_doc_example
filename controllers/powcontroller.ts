import powr from "../sevices/powservice";
import { Request,Response } from "express";

const powcontrol = (req:Request,res:Response):void=>{
    powr(req,res);
}

export default powcontrol;