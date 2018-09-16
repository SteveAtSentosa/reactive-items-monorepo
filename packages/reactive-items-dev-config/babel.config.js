const baseConfig = require('./babel.config-base');
const reactConfig = require('./babel.config-react');

// Note order matters.  React stuff first due to some order specific dependencies
module.exports = {
  presets: [
    ...reactConfig.presets || [],
    ...baseConfig.presets || [],
  ],
  plugins: [
    ...reactConfig.plugins || [],
    ...baseConfig.plugins || [],
  ]
};
