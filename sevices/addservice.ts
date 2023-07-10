import {Request,Response } from "express";

const add= (req:Request,res:Response):void=>{
    const a:number = req.body.a;
    const b:number = req.body.b;
    const sum:number=a+b;
    res.status(200).send(`adition of ${a} and ${b} is : ${sum}`);
}

export default add;