import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import {router} from './routes/routes';
import swaggerJSDoc from 'swagger-jsdoc';
import  SwaggerUiOptions  from 'swagger-ui-express';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

  
const options = {
    definition:{
    openapi: '3.0.0',
    info: {
      title: 'My Calculator APIs Documents',
      version: '1.0.0',
      description:'This is a REST API for my new calculator under this project we imllements firstly 7 api for tasting.',
    },
    servers:[
        {
            url:"http://localhost:3004/"
        }
    ]
},
    apis: ['./routes/*.ts'],
};
  
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', SwaggerUiOptions.serve, SwaggerUiOptions.setup(swaggerSpec));

app.use("/",router);
app.use("/add",router);
app.use("/sub",router);
app.use("/mul",router);
app.use("/div",router);
app.use("/log",router);
app.use("/sqrt",router);
app.use("/pow",router);



app.listen(port,()=>{
    console.log(`I am listening at port number ${port}`);
})


