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


var UserInfo = require('./models/UserModel');

app.get('/UserInfo', async (req, res) => {
    const UserInfos = await UserInfo.find();

    res.json(UserInfos);
});

app.post('/UserInfo/new', (req, res) => {
    var userinfo = new UserInfo({
        username: req.body.username,
        password: req.body.password
    });

    userinfo.password = userinfo.generateHash(req.body.password);
    userinfo.save();

    res.json(userinfo);
});

app.post('/UserInfo/login', async (req, res) => {
    try {
        const existingUser = await UserInfo.findOne({ username: req.body.username });
        
        if (!existingUser) {
          return res.json({ message: `No account with this email found` });
        }
    
        const user = await UserInfo.findOne({ username: req.body.username });
        if (!user.validPassword(req.body.password)) {
          res.json({ message: 'Incorrect password' });
        } else {
          res.json({ message: 'Login successful' });
        }
      } catch (error) {
        // Handle any errors that occurred during the process
        res.status(500).json({ message: 'Internal server error' });
      }
});

app.put('/UserInfo/update/:id', async (req, res) => {
    const userinfo = await UserInfo.findById(req.params.id);

    console.log(req.body.username);
    console.log(req.body.password);

    userinfo.username = req.body.username;
    userinfo.password = req.body.password;

    userinfo.save();

    res.json(userinfo);
});

app.delete('/UserInfo/deleteAll', async (req, res) => {
    await UserInfo.deleteMany();

    res.json({ message: 'All data deleted successfully' });
})

app.listen(3001, () => console.log("Server started on port 3001"));