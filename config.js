var dbuser = process.env.dbuser;
var dbpass = process.env.dbpass;

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                        'mongodb://' + dbuser + ':' + dbpass + '@ds139937.mlab.com:39937/shopping-list' :
                        'mongodb://localhost/shopping-list');

exports.PORT = process.env.PORT || 8080;