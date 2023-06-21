// Code framework from Tyler Potts: https://www.youtube.com/watch?v=R81g-2r6ynM

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/MERNSTACK", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

const CaseStudy = require('./models/CaseStudy');

app.get('/CaseStudies', async (req, res) => {
    const CaseStudies = await CaseStudy.find();

    res.json(CaseStudies);
});
// GET function retrieves most up-to-date data

app.post('/CaseStudy/new', (req, res) => {
    const casestudy = new CaseStudy({
        order: req.body.order,
        text: req.body.text
    });

    casestudy.save();

    res.json(casestudy);
});
// POST adds a TODO to the database

app.put('/CaseStudy/update/:id', async (req, res) => {
    const casestudy = await CaseStudy.findById(req.params.id);

    console.log(casestudy.text);
    console.log(req.body.text);

    casestudy.text = req.body.text;

    casestudy.save();

    res.json(casestudy);
});

// app.delete('/todo/delete/:id', async(req, res) => {
//     const result = await CaseStudy.findByIdAndDelete(req.params.id);

//     res.json(result);
// });

// Deleting all the data in the database
app.delete('/CaseStudies/deleteAll', async (req, res) => {
    await CaseStudy.deleteMany();

    res.json({ message: 'All data deleted successfully' });
})

app.listen(3001, () => console.log("Server started on port 3001"));