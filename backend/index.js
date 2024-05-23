const express = require('express'); 
const fs = require('fs'); 
const app = express(); 
const Port = 3000; 

let info = [];  
const data =  fs.readFileSync('./data.json','utf-8');      
info.push(JSON.parse(data)); 

app.get('/',(req,res) => { 
    res.send(info)
});     

app.post('/',(req,res) => { 
    
})


app.listen(Port,() => { 
    console.log("Server is Running");  
})          