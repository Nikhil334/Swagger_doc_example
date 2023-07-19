import {Request,Response } from "express";

const sub= (req:Request,res:Response):void=>{
    const no1:number = req.body.a;
    const no2:number = req.body.b;
    const subt:number=no1-no2;
    res.status(200).send(`subtraction of and ${no1} and ${no2} is : ${subt}`);
}

export default sub;