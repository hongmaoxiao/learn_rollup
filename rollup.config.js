import uglify from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/add.js',
    format: 'umd'
  },
  plugins: [
    production && uglify()
  ],
  sourcemap: true
}
