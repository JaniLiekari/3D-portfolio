module.exports.Account = function(mongoose){

	const Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;

	const Account = new Schema({
			name: String,
	    	date: { type: Date, default: Date.now }
	});


	return mongoose.model('Backend_Account', Account);

}