const config = {
    user : 'test',
    password : '123456789',
    server : 'localhost',
    database : 'SodaDrinks',
    options : {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port : 1433
}

module.exports = config;