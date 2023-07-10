import {Request,Response } from "express";

const home= (res:Response):void=>{
    res.status(200).send("Welcome to MyCalC");
}

export default home;