var express = require('express')
var router = express.Router();

const fs = require("fs");

router.get('/widget', function (req, res) {

	res.sendFile( 
		encodeURI('./views/widget/' + req.query.file), 
		{ 
			root: __dirname 
		});
})


module.exports = router;