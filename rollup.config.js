import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/now.js',
    format: 'umd',
    name: 'Now'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    production && uglify()
  ],
  sourcemap: true
}
