const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '139.59.156.136',
	user: 'admin',
	password: 'admin',
	database: 'frisor'
});

connection.connect();

global.db = connection;