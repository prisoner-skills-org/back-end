const knex = require('knex');

const knexConfig = require('../knexfile.js');

const dbEnv = process.env.production || 'development';

module.exports = knex(knexConfig.development);
