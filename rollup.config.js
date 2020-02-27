import alias from '@rollup/plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import minify from 'rollup-plugin-babel-minify';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

/** @TODO actual env vars */
const NODE_ENV = 'development';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  external: [
    'classnames',
    'html-react-parser',
    'lodash',
    'marked',
    'prop-types',
    'react-slick',
    'react',
    'uuid',
  ],
  plugins: [
    alias({
      entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    }),
    postcss({
      modules: true,
      extract: 'dist/styles.css',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    json(),
    commonjs(),
    resolve(),
    minify({}),
  ],
};
