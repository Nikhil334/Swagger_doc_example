import {Request,Response } from "express";

const div= (req:Request,res:Response):void=>{
    const a:number = req.body.a;
    const b:number = req.body.b;
    if(b===0){
        res.status(406).send("Second number should not be zero! ");
    }else{
    const division:number=a/b;
    res.status(200).send(`division of ${a} and ${b} is : ${division}`);
    }
}

export default div;