exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                        'mongodb://russbus:gogators@ds139937.mlab.com:39937/shopping-list' :
                        'mongodb://localhost/shopping-list');

exports.PORT = process.env.PORT || 8080;