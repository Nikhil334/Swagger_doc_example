import {Request,Response } from "express";

const sqrt= (req:Request,res:Response):void=>{
    const no1:number = req.body.a;
    //const b:number = req.body.b;
    const ans:number=Math.sqrt(no1);
    res.status(200).send(`squareroot of ${no1} is : ${ans}`);
}

export default sqrt;