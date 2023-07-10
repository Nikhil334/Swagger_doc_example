import {Request,Response } from "express";

const powr= (req:Request,res:Response):void=>{
    const no1:number = req.body.a;
    const no2:number = req.body.b;
    const powr:number=Math.pow(no1,no2);
    res.status(200).send(`${no1} of Power ${no2} is : ${powr}`);
}

export default powr;