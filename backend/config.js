const config = {
    appConfig: {
        // host: 'http://localhost',
        // port: 4000
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    dbConfig: {
        dbName: process.env.DB_NAME,
        dbPassword: process.env.DB_PASSWORD
    }
}

module.exports = config