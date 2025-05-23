import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: ['src/litter-robot4-card.ts'],
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    typescript(),
    terser(),
  ],
};
