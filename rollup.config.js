import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: './src/index.js',
  output: {
    file: './dist/swan.js',
    format: 'umd',
    name: 'swan'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    cleanup()
  ]
}
