import {Request,Response } from "express";

const add= (req:Request,res:Response):void=>{
    const no1:number = req.body.a;
    const no2:number = req.body.b;
    const sum:number=no1+no2;
    res.status(200).send(`adition of ${no1} and ${no2} is : ${sum}`);
}

export default add;