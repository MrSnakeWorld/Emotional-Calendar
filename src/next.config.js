import path from 'path'
import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache'

module.exports = withPWA({
  pwa: {
    reactStrictMode: true,
    basePath: '',  
    dest: 'public',
    runtimeCaching
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})
