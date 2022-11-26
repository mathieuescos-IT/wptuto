const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const IconfontPlugin = require("iconfont-plugin-webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const GlobImporter = require("node-sass-glob-importer");
const webpack = require("webpack");
const iconTemplate = require(path.resolve(__dirname, "src") + "/js/icon-template.js");

module.exports = (env) => {
  const mode = env.development ? "development" : "production";

  return {
    mode: mode,
    entry: {
      scripts: ["./src/js/base.js", "./src/scss/style.scss"],
      "scripts-admin": [
        "./src/js/admin.js",
        "./src/scss/gutenberg-style.scss",
        "./src/scss/tinymce-style.scss",
        "./src/scss/login-style.scss"
      ]
    },
    output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, "dist/")
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({ extractComments: false }),
        new CssMinimizerPlugin()
      ]
    },
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new BrowserSyncPlugin(
        {
          host: "localhost",
          port: 3000,
          proxy: env.proxy || "http://wptuto.local/",
          injectCss: true,
          files: ["./dist/css/*.css"]
        },
        {
          reload: false
        }
      ),
      new IconfontPlugin({
        src: "./src/icons", // required - directory where your .svg files are located
        family: "iconfont", // optional - the `font-family` name. if multiple iconfonts are generated, the dir names will be used.
        dest: {
          font:
            path.resolve(__dirname, "dist") + "/iconfont/[family].[type]", // required - paths of generated font files
          css: path.resolve(__dirname, "src") + "/scss/_[family].scss" // required - paths of generated css files
        },
        watch: {
          pattern: "src/icons/**/*.svg", // required - watch these files to reload
          cwd: undefined // optional - current working dir for watching
        },
        cssTemplate: iconTemplate
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: []
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "css/",
                name: "[name].min.css"
              }
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  importer: GlobImporter(),
                  includePaths: [path.resolve(__dirname, "node_modules")]
                }
              }
            }
          ]
        }
      ]
    }
  };
};
