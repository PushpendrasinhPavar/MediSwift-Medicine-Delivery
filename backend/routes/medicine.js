


//     medi cine file java sc....


const express = require('express');
const router = express.Router();
const Medicine = require('../models/Medicine');

// Add New Medicine         medicine
router.post('/add', async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const newMedicine = new Medicine({ name, price, description });
        await newMedicine.save();
        res.status(201).json({ message: 'Medicine added successfully' });
    } catch (error) {
        console.error('Error adding medicine:', error);
        res.status(500).json({ error: 'Error adding medicine' });
    }
});

// Get All Medicines   mediine
router.get('/list', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (error) {
        console.error('Error fetching medicines:', error);
        res.status(500).json({ error: 'Error fetching medicines' });
    }
});

// Search Medicines by Name     all medicine naaame 
router.get('/search', async (req, res) => {
    const { name } = req.query;

    try {
        const medicines = await Medicine.find({
            name: { $regex: name, $options: 'i' } // case-insensitive search
        });
        res.json(medicines);
    } catch (error) {
        console.error('Error searching medicines:', error);
        res.status(500).json({ error: 'Error searching medicines' });
    }
});

module.exports = router;
