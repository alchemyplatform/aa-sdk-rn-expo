# Account Kit RN Example using Expo

This is a sample repo that used expo to get started and integrates with Account Kit

<img width="434" alt="image" src="https://github.com/alchemyplatform/aa-sdk-rn-expo/assets/4642570/e0dab7bc-f980-46eb-966c-13be7e79bc15">

## How it was made

1. First create a new expo project (we used `yarn`):

```bash
yarn create expo-app --template
```

This project used a `Blank (typescript)` template.

2. Upgrade to the latest beta version of expo. This is needed because react native 0.74+ includes native support for `TextEncoder`

```bash
yarn expo install expo@next --fix
```

3. Install shims for crypto libraries

```bash
yarn expo install node-libs-react-native crypto-browserify stream-browserify react-native-get-random-values
```

4. Add shims to `metro.config.js`:

```javascript
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
```

5. Import global shims in `App.tsx`:

```typescript
import "node-libs-react-native/globals.js";
import "react-native-get-random-values";

// rest of App.tsx
```

6. Install [Account Kit](https://accountkit.alchemy.com) Packages. At this point you're ready to use the aa-sdk in your project.

```bash
yarn add viem@2.8.6 @alchemy/aa-alchemy @alchemy/aa-core @alchemy/aa-accounts
```
