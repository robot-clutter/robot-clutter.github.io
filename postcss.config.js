module.exports =
  process.env.NODE_ENV !== 'development'
    ? {
        plugins: [
          'postcss-import',
          'tailwindcss',
          'postcss-flexbugs-fixes',
          'autoprefixer',
          'postcss-100vh-fix',
          'postcss-hover-media-feature',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
          [
            'cssnano',
            {
              preset: 'default',
            },
          ],
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./**/*.tsx'],
              safelist: ['html', 'body'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ],
      }
    : {
        plugins: [
          'postcss-import',
          'tailwindcss',
          'postcss-flexbugs-fixes',
          'autoprefixer',
          'postcss-100vh-fix',
          'postcss-hover-media-feature',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
        ],
      };
