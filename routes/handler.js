const navigation = require('../modules/navigation');
const brugere = require('../modules/brugere');
const services = require('../modules/services');
const products = require('../modules/products');
const content = require('../modules/content');

module.exports = function (app) {
	app.get('/', products.getAllIndex);
	app.get('/content', navigation.content);

	app.get('/profile', brugere.profile);
	app.get('/login', brugere.login);
	app.get('/signup', brugere.signup);
	app.post('/signup', brugere.signup);
	app.get('/logout', brugere.logout);
	app.post('/login', brugere.login);
	app.delete('/delBruger/:id', brugere.delSingle);
	app.get('/brugere', brugere.getAll);

	app.post('/addService', services.addSingle);
	app.get('/services', services.getAll);
	app.get('/getService/:id', services.getOne);
	app.put('/updateService/:id', services.updateOne);
	app.get('/deleteService/:id', services.deleteSingle);
	app.get('/services', services.getAll);

	app.delete('/delProduct/:id', products.delSingle);
	app.post('/addProduct', products.addSingle);
	app.get('/produkter', products.getAll);
};