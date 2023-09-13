import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import scss from 'rollup-plugin-scss'
import styles from 'rollup-plugin-styles'

import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'm3-react',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      scss({
        include: ['./scss/*.scss'],
        prefix: `@import "./scss/_variables.scss"; @import "./scss/_base.scss";`,
        output: 'dist/styles.css',
        failOnError: true,
      }),
    ],
    external: ['react'],
  },
  {
    input: './dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
    external: [/\.scss$/], // ignore .scss file
  },
]
