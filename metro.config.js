// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  ...require("node-libs-react-native"),
  crypto: require.resolve("crypto-browserify"),
  stream: require.resolve("stream-browserify"),
};

module.exports = config;
