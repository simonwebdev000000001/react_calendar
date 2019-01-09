const express = require('express');
const os = require('os');

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.static('dist'));
app.use(express.static('public'));



app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8238, () => console.log('Listening on port 8080!'));
