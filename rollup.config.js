import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: ['src/litter-robot4-card.ts'],
  output: {
    file: 'litter-robot4-card.js',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    typescript(),
    terser(),
  ],
};
