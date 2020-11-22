const express = require('express')
const app = express()

const server = require('./server');
const config = require('./config.js');

const bodyParser = require('body-parser');

app.use(bodyParser());


app.use('/file', require('./loadfiles.js'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
	//res.render('widget/codeviewer/index.ejs' ,{ code : require('./schemas/backend/account.js').Account.toString() }); 
	res.render('index');
})



config.preload();
server.start(app, config.port());


// TESTI

console.clear();
const mongoDB = require('./database');
console.log(mongoDB.OpenConnection.toString());








