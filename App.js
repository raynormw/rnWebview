/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
        style={styles.container}
        source={{
          uri:
            'http://180.215.13.119/core/m/Default.aspx?ref=99bet303&mobile=auto',
        }}>
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      </WebView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
