module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': env === 'production' ? {} : false
  }
})
