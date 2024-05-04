import "node-libs-react-native/globals.js";
import "react-native-get-random-values";

import { createLightAccount, LightAccount } from "@alchemy/aa-accounts";
import {
  createSmartAccountClient,
  LocalAccountSigner,
  sepolia,
} from "@alchemy/aa-core";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { custom, http } from "viem";
import { generatePrivateKey } from "viem/accounts";

export default function App() {
  const [account, setAccount] = useState<LightAccount | null>(null);
  const client = useMemo(
    () =>
      createSmartAccountClient({
        transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
        chain: sepolia,
      }),
    []
  );

  useEffect(() => {
    createLightAccount({
      signer: LocalAccountSigner.privateKeyToAccountSigner(
        generatePrivateKey()
      ),
      transport: custom(client),
      chain: sepolia,
    }).then(setAccount);
  }, []);

  return (
    <View style={styles.container}>
      {!account ? (
        <Text>Loading account...</Text>
      ) : (
        <Text>Light Account Address: {account.address}</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
