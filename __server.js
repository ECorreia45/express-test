let express = require('express');
let app = express();
let hbs = require('hbs');
let about = require('./router/about');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/includes');
hbs.registerHelper('getTitle', () => {
    return "Express App"
})

app.get('/', (req, res) => {
    res.render("index.hbs");
});

app.get('/about', about);

app.listen(3000, () => {
    console.log('Now listening on port 3000...');
});

module.exports.app = app;

