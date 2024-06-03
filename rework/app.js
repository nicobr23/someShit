const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    const stations = [
        {
            name: 'Regensburg',
            weather: 800,
            temperature: 20.32,
            humidity: 0, 
            windSpeed: 0.89,
            pressure: 1016
        },
        {
            name: 'Kelheim',
            weather: 600,
            temperature: 0.25,
            humidity: 0, 
            windSpeed: 1.02,
            pressure: 1002
        },
        {
            name: 'München',
            weather: 500,
            temperature: 17.67,
            humidity: 0, 
            windSpeed: 0.89,
            pressure: 1017
        }
    ];
    res.render('dashboard', { stations });
});

app.get('/details', (req, res) => {
    res.render('details');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
