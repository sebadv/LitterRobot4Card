import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/litter-robot4-card.ts',
  output: {
    dir: '.',
    format: 'es',
  },
  plugins: [
    resolve(),
    typescript(),
    json(),
    terser(),
  ],
};
