/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  input: 'src',
  plugins:
    process.env.NODE_ENV === 'development'
      ? [require('tailwindcss'), require('postcss-preset-env')]
      : [
          require('tailwindcss'),
          require('postcss-preset-env'),
          require('cssnano'),
        ],
}
