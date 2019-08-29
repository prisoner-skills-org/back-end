const localPg = {
  host: "localhost",
  database: "auth",
  user: "student",
  password: "hired"
};
const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./database/auth.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: { directory: "./database/seeds" }
  },
  production: {
    client: "pg",
    connection: productionDbConnection,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: { directory: "./database/seeds" }
  }
};
