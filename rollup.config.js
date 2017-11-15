import uglify from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
  entry: 'src/main.js',
  dest: 'dist/add.js',
  format: 'iife',
  plugins: [
    production && uglify()
  ],
  sourceMap: true
}
