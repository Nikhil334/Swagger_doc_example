import {Request,Response } from "express";

const sqrt= (req:Request,res:Response):void=>{
    const a:number = req.body.a;
    //const b:number = req.body.b;
    const ans:number=Math.sqrt(a);
    res.status(200).send(`squareroot of ${a} is : ${ans}`);
}

export default sqrt;