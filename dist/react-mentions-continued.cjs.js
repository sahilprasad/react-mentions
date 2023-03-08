if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-mentions-continued.cjs.prod.js')
} else {
  module.exports = require('./react-mentions-continued.cjs.dev.js')
}
