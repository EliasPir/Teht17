var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'kayttajanimi',
	password:'salasana',
	database:'teht17'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;