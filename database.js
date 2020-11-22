var OpenConnection = async function(){
	const mongoose = require('mongoose');

	await mongoose.connect('mongodb://localhost/portfolio', {
  		useNewUrlParser: true,
  		useUnifiedTopology: true,
  		useFindAndModify: false,
  		useCreateIndex: true
	});

	return mongoose;
};
module.exports.OpenConnection = OpenConnection;


var LoadAccount =  async function(func){
	const mongoose = await OpenConnection();
	return require('./schemas/backend/account.js').Account(mongoose);
}
module.exports.LoadAccount = LoadAccount;