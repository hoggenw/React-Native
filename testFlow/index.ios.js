/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class testFlow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}> alignSelf的对齐方式主要有四种：flex-start、 flex-end、 center、  auto、 stretch。</Text>
        <View style = {[styles.view,]}><Text>自由摆放</Text></View>
        <View style = {[styles.view,styles.center]}><Text>居中摆放</Text></View>
        <View style = {[styles.view,styles.left]}><Text>局桌摆放</Text></View>
        <View style = {[styles.view,styles.right]}><Text>具有拜访</Text></View>
        <Text style = {styles.textStyle}>alignItems是alignSelf的变种，跟alignSelf的功能类似，可用于水平居中；justifyContent用于垂直居中，属性较多，可以了解下。</Text>
        <View style = {[styles.alignItemsStyle,]}><Text>方块居中</Text></View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0.5
  },
  alignItemsStyle: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 3,
    justifyContent:'center',
    alignItems: 'center',
    height: 50
  },
  textStyle: {
    top: 40,
    bottom: 10
  },
  view: {
    borderWidth: 5,
    borderColor: 'blue',
    width: 100,
    height: 40
  },
  center: {
    alignSelf: 'center'
  },
  left: {
    alignSelf:'flex-start'
  },
  right: {
    alignSelf: 'flex-end'
  }
});

AppRegistry.registerComponent('testFlow', () => testFlow);
