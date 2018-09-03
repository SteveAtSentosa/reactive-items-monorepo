const baseConfig = require('reactive-items-dev-config/babel.config-base');
const reactConfig = require('reactive-items-dev-config/babel.config-react');

module.exports = {
  presets: [
    ...baseConfig.presets || [],
    ...reactConfig.presets || [],
  ],
  plugins: [
    ...baseConfig.plugins || [],
    ...reactConfig.plugins || [],
  ]
};
