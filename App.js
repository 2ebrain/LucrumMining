import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'

import Routes from './src/Routes'
import Login from './src/views/Login'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:23,
  },
});
