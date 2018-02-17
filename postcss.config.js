module.exports = ({ env }) => ({
  plugins: [
    (env === 'production' ? require('autoprefixer') : null)
    // require('autoprefixer')
  ]
})
