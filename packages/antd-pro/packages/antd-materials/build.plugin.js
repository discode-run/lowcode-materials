// webpack 配置自定义
module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('less')
      .test(/\.less/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('less-loader')
      .loader('less-loader')
      .options({
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#0052cc',
            'link-color': '#0052cc'
          }
        }
      })

    config.module
      .rule('sass')
      .test(/\.s[ac]ss$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('sass-loader')
      .loader('sass-loader')
      .options({
        implementation: require('sass')
      })

    config.module
      .rule('css')
      .test(/\.css$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')

    config.resolve.extensions
      .add('.js')
      .add('.jsx')
      .add('.ts')
      .add('.tsx')
      .add('.json')
      .add('.mjs')

    config.resolve.mainFields
      .add('module')
      .add('main')
  })
}
