const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const { watch } = require('fs');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: '[name].js', // Output file name
  },
  mode: 'development', // Set the mode to development
    devtool: 'source-map', // Enable source maps for easier debugging   
    module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Load CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource', // Handle image files
      },
    ],
    },
    plugins: [
      new CleanWebpackPlugin(), // Clean the output directory before each build 
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template for the HTML file
            inject: "body", // Inject scripts into the HTML file
            filename: 'index.html', // Output HTML file name
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // Output CSS file name
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env), // Make environment variables available in the app
        }),
    ],

    resolve: {  
        extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
    },
    watch: true, // Enable watching for file changes
    watchOptions: {
        ignored: /node_modules/, // Ignore changes in node_modules
        aggregateTimeout: 300, // Delay before rebuilding after changes
        poll: 1000, // Polling interval for file changes
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'), // Serve files from the dist directory
        
        contentBase: './', // Serve files from the root directory
        compress: true, // Enable gzip compression
        // port: 9000, // Port for the development server
        // hot: true, // Enable Hot Module Replacement
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Split chunks for better caching
        },
    },
    performance: {
        hints: false, // Disable performance hints
    },
    stats: {
        colors: true, // Enable colored output in the console
        reasons: true, // Show reasons for module inclusion
        chunks: false, // Disable chunk information
    },
    devtool: 'inline-source-map', // Enable inline source maps for easier debugging
    target: 'web', // Set the target to web
    experiments: {
        topLevelAwait: true, // Enable top-level await support
    },
    externals: {
        // Define external libraries that should not be bundled
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    resolveLoader: {
        modules: ['node_modules'], // Resolve loaders from node_modules
    },
    node: {
        // Polyfill Node.js modules for the browser
        global: true,
        __filename: false,
        __dirname: false,
    },
    performance: {
        hints: false, // Disable performance hints
    },
    infrastructureLogging: {
        level: 'warn', // Set the logging level to warn
    },
    cache: {
        type: 'filesystem', // Use filesystem caching for faster builds
        buildDependencies: {
            config: [__filename], // Rebuild when the config file changes
        },
    },

};


