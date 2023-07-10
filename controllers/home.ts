import home from "../sevices/homeservice";
import { Request,Response } from "express";

const homecontroller =(req:Request,res:Response):void=>{
    home(res);
}

export default homecontroller