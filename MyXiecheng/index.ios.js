/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // 导入AppRegistry模块
 import {
   AppRegistry
 } from 'react-native';

 // 导入我们的App模块
 import App from "./App/app";

 // 注册App
 AppRegistry.registerComponent('MyXiecheng', () => App);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   NavigatorIOS,
//   View
// } from 'react-native';
//
// export default class MyXiecheng extends Component {
//   render() {
//     return (
//       // <NavigatorIOS
//       // style={styles.container}
//       // initialRoute={{
//       //   title: '首页',
//       // }}
//       // />
//       <View>
//
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//     }
// });
//
// AppRegistry.registerComponent('MyXiecheng', () => MyXiecheng);
