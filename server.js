const express = require('express');
menu = require('./json_data/menu_items');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require("body-parser");

require("./config/db_config");

const port = process.env.PORT || 3000;

app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 5 * 60 * 1000
	} // 5 minutter
}));


require("./routes/handler")(app);

app.listen(port);
console.log(`http://localhost:${port}/`);