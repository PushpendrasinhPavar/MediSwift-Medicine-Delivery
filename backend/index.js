


//  ______________________________index file

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;


const cors = require('cors');
app.use(cors());



app.use(express.json());


mongoose.connect('mongodb+srv://mediProject:Medi%4097hXt@cluster0.1dr9y80.mongodb.net/mediswift?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Connection Error:', err));

//  Connect Routes
const userRoute = require('./routes/user');
app.use('/api/user', userRoute);

//  Test API
app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

// const medicineRoute = require('./routes/medicine');
// app.use('/api/medicine', medicineRoute);

const medicineRoute = require('./routes/medicine');
app.use('/api/medicine', medicineRoute);

//  Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
