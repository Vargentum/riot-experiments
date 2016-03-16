export default {
  from: './src',
  to: './dist/app.js',
  ext: 'tag',
  type: 'babel',
  template: 'jade',
  style: 'stylus',
  plugins: [
    ["transform-es2015-modules-commonjs", { "allowTopLevelThis": true }]
  ]
}