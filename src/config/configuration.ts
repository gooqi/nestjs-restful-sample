export default () => ({
  port: parseInt(process.env.PORT, 10) || 7900,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  }
});
