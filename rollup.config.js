import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/litter-robot4-card.js',
  output: {
    file: 'dist/litter-robot4-card.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [ 
    resolve(), 
    typescript({
      tsconfig: false,
      target: 'es2020',
      module: 'esnext',
      experimentalDecorators: true,
      emitDecoratorMetadata: true
    }), 
    terser() 
  ],
}; 