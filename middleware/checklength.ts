import { Request,Response } from "express";
const check =(req:Request,res:Response,next:any): void=>{
  if(Object.keys(req.body).length<2){
    res.status(406).send("Please provide two numbers");
  }
  next();
}

export default check;