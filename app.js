const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data store
let user1 = [
    { id: 1, name: 'XYZ' },
    { id: 2, name: 'MNO' }
];

let user2 = [
    { id: 3, name: 'DEF' },
    { id: 4, name: 'ABC' }
];
// GET API endpoint
app.get('/api/users', (req, res) => {
    res.json(user1);
});
app.get('/api/content', (req, res) => {
    res.json(user2);
});

app.get('/api/users/:id', (req, res) => {
    const userid = parseInt(req.params.id);
    const user = user1.find(u => u.id === userid);

    if (user){
        res.json(user11);
    }
    else{
        res.status(404).json({ message: 'User not found' });
    }

});

// POST API endpoint
app.post('/api/users', (req, res) => {
    const newUser = {
        id: user1.length + 1,  // Simple ID generation
        name: req.body.name,
        Created_on: req.body.Created_on
    };
    user1.push(newUser);
    res.status(201).json(newUser);  // Respond with the created user
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
