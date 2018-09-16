module.exports = {
  presets: [
    // '@babel/env',
    [ '@babel/env', { targets: {
      'browsers': ['> 1%', 'last 2 versions'] }}
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};
