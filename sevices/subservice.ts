import {Request,Response } from "express";

const sub= (req:Request,res:Response):void=>{
    const a:number = req.body.a;
    const b:number = req.body.b;
    const subt:number=a-b;
    res.status(200).send(`subtraction of and ${a} and ${b} is : ${subt}`);
}

export default sub;