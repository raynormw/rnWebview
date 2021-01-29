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
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  hideSpinner() {
    this.setState({visible: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          onLoad={() => this.hideSpinner()}
          source={{
            uri:
              'http://180.215.13.119/core/m/Default.aspx?ref=99bet303&mobile=auto',
          }}
        />
        {this.state.visible && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default App;
