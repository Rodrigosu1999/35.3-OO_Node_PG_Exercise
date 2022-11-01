/** Database for lunchly */

const {Client} = require("pg");

let DB_URI;

//Use different databases if we are testing or in producition
if (process.env.NODE_ENV === "test") {
    DB_URI = "postgresql://rodrigo:secret-password@localhost/lunchly_test"
} else {
    DB_URI = "postgresql://rodrigo:secret-password@localhost/lunchly"
}

let db = new Client({
    connectionString: DB_URI
});


db.connect();

module.exports = db;
