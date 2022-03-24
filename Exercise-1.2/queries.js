const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const users = (req, res) => {
    pool.query('SELECT * FROM userData', (err, data) => {
        if (err) {
            throw err
        }
        res.status(200).json(data.rows)
    })
}

const getActiveUsers = (req, res) => {
    pool.query('SELECT * FROM userData WHERE active=true', (err, data) => {
        if (err) {
            throw err
        }
        res.status(200).json(data.rows)
    })
}

module.exports = {
    users,
    getActiveUsers
}