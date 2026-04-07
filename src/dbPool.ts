import mysql, { PoolOptions } from 'mysql2/promise';

// Define pool configuration
const access: PoolOptions = {
  host: '1pnc3i.h.filess.io',
  user: 'sasonoroso_dev_usualbase',
  password: 'd223dbfa8c101baf2ac5359c4cea1b74866eeedb',
  database: 'sasonoroso_dev_usualbase',
  port:3307,
  connectionLimit: 5,       
  queueLimit: 0,
  waitForConnections: true,
  enableKeepAlive: true,
  idleTimeout: 3000
};

// Create the pool
const pool = mysql.createPool(access);

export default pool;