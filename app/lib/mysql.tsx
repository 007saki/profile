

import mysql from 'mysql2/promise.js'

export const portfolioDB = mysql.createPool({
    password: process.env.DB_PASSWORD as string,
    user: process.env.DB_USER as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.DB_HOST as string,
})