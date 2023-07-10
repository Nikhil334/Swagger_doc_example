import {Request,Response } from "express";

const mul= (req:Request,res:Response):void=>{
    const no1:number = req.body.a;
    const no2:number = req.body.b;
    const mul:number=no1*no2;
    res.status(200).send(`Multiplication of ${no1} and ${no2} is : ${mul}`);
}
export default mul;