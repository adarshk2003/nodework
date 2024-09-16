const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoConnect = require('./db/connect');
const productRout=require('./routes/productRout')

app.get('/test',(req,res)=>{
    res.status(200).send("text successfull");
});

app.use(express.static("./client"));

//mongo connection
mongoConnect();

//parse json datas
app.use(express.json())


app.use(express.urlencoded({extended : true}));

app.use(productRout);
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});