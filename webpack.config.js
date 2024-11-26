module.exports = {
    module: {
      rules: [
        {
          test: /\.feature$/,
          use: 'gherkin-loader',
          exclude: /node_modules/,
        },
        // Teised reeglid, mis teil on
      ],
    },
  };