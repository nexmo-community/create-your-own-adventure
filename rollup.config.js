import svelte from 'rollup-plugin-svelte'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'ui/main.js',
  dest: 'ui/main.dist.js',
  format: 'iife',
  plugins: [
    svelte(),
    nodeResolve({ jsnext: true, main: true }),
    commonjs(),
    buble(),
    uglify()
  ]
}
