module.exports = {
    HOST: "us-cdbr-east-04.cleardb.com",
    USER: "be52e9dd1b592f",
    PASSWORD: "88390cad",
    DB: "heroku_3737849b456f580",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
//mysql://be52e9dd1b592f:88390cad@us-cdbr-east-04.cleardb.com/heroku_3737849b456f580?reconnect=true