import {Request,Response } from "express";

const log= (req:Request,res:Response):void=>{
    const no1:number = req.body.a;
    res.status(200).send(`logorthim of ${no1} is : ${Math.log(no1)}`);
}

export default log;