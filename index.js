const fs = require("fs");
const pg = require("pg");
require("dotenv").config();


const config = {
  user: "avnadmin",
  password: process.env.AIVEN_PASSWORD,
  host: "messageboard-garuna-2005.j.aivencloud.com",
  port: "20140",
  database: "defaultdb",
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca (1).pem").toString(),
  },
};

const client = new pg.Client(config);
client.connect(function (err) {
  if (err) throw err;
  client.query("SELECT VERSION()", [], function (err, result) {
    if (err) throw err;

    console.log(result.rows[0]);
    client.end(function (err) {
      if (err) throw err;
    });
  });
});