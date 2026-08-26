const express = require('express');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS setup
app.set('view engine', 'ejs');

// Home page
app.get('/', (req, res) => {
    res.render('index');
});

// Form page
app.get('/form', (req, res) => {
    res.render('form');
});

// Form submission
app.post('/submit', (req, res) => {
    console.log(req.body);

    res.send('Form submitted successfully!');
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});