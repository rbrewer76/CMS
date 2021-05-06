const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')([
  '@adobe/react-spectrum',
  '@react-spectrum/.*',
  '@spectrum-icons/.*'  
])

module.exports = withPlugins([withCSS, withTM], {
  // Your Next.js configuration
})