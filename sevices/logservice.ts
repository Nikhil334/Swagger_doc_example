import {Request,Response } from "express";

const log= (req:Request,res:Response):void=>{
    const a:number = req.body.a;
    res.status(200).send(`logorthim of ${a} is : ${Math.log(a)}`);
}

export default log;