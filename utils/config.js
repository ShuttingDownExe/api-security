const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'dev') {
  console.log('Using development environment variables')
  dotenv.config()
} else if (process.env.NODE_ENV === 'prod') {
  console.log('Using production environment variables')
}

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

module.exports = {
  MONGODB_URL,
  PORT
}