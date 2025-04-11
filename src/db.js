const { Pool } = require('pg');      // tiny wrapper around pg‑client
require('dotenv').config();          // loads .env into process.env

module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});