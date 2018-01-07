let express = require('express');
let app = express();
let hbs = require('hbs');
let about = require('./router/about');
const PORT = process.env.PORT || 4500;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/includes');

app.get('/', (req, res) => {
    res.render("index.hbs",{
        title: "Express App"
    });
});

app.get('/about', about);

app.listen(PORT, () => {
    console.log('Now listening on port 4500...');
});

module.exports.app = app;

