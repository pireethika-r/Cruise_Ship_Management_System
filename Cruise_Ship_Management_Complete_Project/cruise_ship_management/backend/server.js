
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let cateringOrders = [];
let salonBookings = [];

app.get('/', (req,res)=>{
    res.send('Cruise Ship Management Backend Running');
});

app.post('/api/catering', (req,res)=>{
    cateringOrders.push(req.body);
    console.log("Catering Order:", req.body);
    res.json({message:'Order Added Successfully'});
});

app.get('/api/catering', (req,res)=>{
    res.json(cateringOrders);
});

app.post('/api/salon', (req,res)=>{
    salonBookings.push(req.body);
    console.log("Salon Booking:", req.body);
    res.json({message:'Salon Booking Successful'});
});

app.get('/api/salon', (req,res)=>{
    res.json(salonBookings);
});

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
