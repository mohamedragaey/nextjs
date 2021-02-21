const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

require(`dotenv`).config()

const configNext = {
  env: {
    API_URL: process.env.API_URL,
    ISSUER_API_URL: process.env.ISSUER_API_URL
  },
  serverRuntimeConfig: {
    API_URL: process.env.API_URL,
    ISSUER_API_URL: process.env.ISSUER_API_URL
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    ISSUER_API_URL: process.env.ISSUER_API_URL
  },
  i18n: {
    locales: ['en', 'fr', 'es', 'de', 'it'],
    defaultLocale: 'en'
  }
}

module.exports = withPlugins([
  [withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development'
    }
  })],
  [withOptimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: -1,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80
    },
    optipng: {
      optimizationLevel: 3
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75
    },
    responsive: {
      adapter: require('responsive-loader/sharp')
    }
  }],
  [withBundleAnalyzer]
], configNext)
