const express = require('express');
const cors = require('cors');


const fs = require('fs');

const app = express(); 

app.use(cors());

app.use(express.json());

const Port = 3000;  

let info = [];

try {
    const getData = fs.readFileSync('./data.json','utf-8');
    info = JSON.parse(getData); 
} catch (err) {
    console.log("Error getting Data");      
}

app.get('/stephen',(req,res) => {
    res.send(info);     
})

app.post('/stephen',(req,res) => {
    const newData = req.body;
    info.push(newData);  
    fs.writeFileSync('./data.json',JSON.stringify(info));
    res.send(info);   
})

app.listen(Port,() => {
    console.log(`Server Running on Port ${Port}`);
})