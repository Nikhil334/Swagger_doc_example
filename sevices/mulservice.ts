import {Request,Response } from "express";

const mul= (req:Request,res:Response):void=>{
    const a:number = req.body.a;
    const b:number = req.body.b;
    const mul:number=a*b;
    res.status(200).send(`Multiplication of ${a} and ${b} is : ${mul}`);
}

export default mul;