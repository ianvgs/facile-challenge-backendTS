  require('dotenv').config();
 
 module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "port":process.env.DB_PORT,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{"require":true,"rejectUnauthorized": false,}
    }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{"require":true,"rejectUnauthorized": false,}
    }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{"require":true,"rejectUnauthorized": false,}
    }
  }
}
