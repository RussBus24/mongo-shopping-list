exports.DATABASE_URL = 'mongodb://user:pass@ds139937.mlab.com:39937/shopping-list' ||
                       process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/shopping-list' :
                            'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;