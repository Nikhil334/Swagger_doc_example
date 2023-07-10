import mul from "../sevices/mulservice";
import { Request,Response } from "express";

const mulcontrol = (req:Request,res:Response):void=>{
    mul(req,res);
}

export default mulcontrol;