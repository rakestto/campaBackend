const Production = require('./Produccion');
const Development = require('./Development');
const { NODE_ENV } = process.env;

const currentEnv = Development;

if (NODE_ENV === 'production') {
  currentEnv = Production;
} else if (NODE_ENV === 'development') {
  currentEnv = Development;
}

module.exports = currentEnv;
