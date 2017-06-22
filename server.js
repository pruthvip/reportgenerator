const Express = require('express');
const path    = require('path');

const app = Express();

app.use(Express.static('dist'));
app.set('views', __dirname);

// app.set('view engine', 'handlebars');

// assuming app is express Object.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(7213);

console.log('Express app listening on ' + 7213);
