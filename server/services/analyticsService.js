const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const performAnalytics = async (interpretedQuery) => {
  const client = await pool.connect();
  try {
    const results = await client.query(interpretedQuery);
    return results.rows;
  } finally {
    client.release();
  }
};

module.exports = { performAnalytics };
