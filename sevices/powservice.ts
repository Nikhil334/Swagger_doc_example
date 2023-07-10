import {Request,Response } from "express";

const powr= (req:Request,res:Response):void=>{
    const a:number = req.body.a;
    const b:number = req.body.b;
    const powr:number=Math.pow(a,b);
    res.status(200).send(`${a} of Power ${b} is : ${powr}`);
}

export default powr;