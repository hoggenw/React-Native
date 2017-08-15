
// 引入React和Component
import React, { Component } from "react";
// 引入View，类似于html的Div
import {
  View,
  Text,
  StyleSheet,
  Platform,
 } from "react-native";
// 引入我们的Header模块
import Header from "./header";
// 引入我们的Footer模块
import Footer from "./footer";

// 定义App类，这个类是Component的子类
class App extends Component {
  /*
   实现App类的render方法，这个方法返回一个View，
   其组成分别是Header, Content和Footer
   */
  render() {
    return (
      <View style = {styles.container}>
        <Header />
        <View style = {styles.content}>
          <Text>我是Content</Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      ...Platform.select({
        ios:{
          paddingTop: 64
        }
      }),

    },
    content: {
      flex: 1
    }
});

// 导出这个模块，供外部调用
export default App;


// var React = require('react-native');
// var index = require('./pages/index');
// var {
//   NavigatorIOS,
//   AppRegistry,
//   StyleSheet,
// } = React;
//
// //
// // 分析代码：
// //  （1）require：引入外部模块，就像，引入我们自己创建的/pages/Index.js一样。
// //  （2）引入定义NavigatorIOS、AppRegistry、StyleSheet组件和类。
// //  （3）在render中调用NavigatorIOS组件，initialRoute是初始化路由，title是当前页面的头部标题；component是当前路由下显示的组件；
// //  （4）注意：这里NavigatorIOS的style需要设置大小，比如这里设置是flex：1，否则就不能显示内容主体；
// //  （5）最后我们需要注册当前应用：AppRegistry.registerComponent('HelloWorld', () => NV);
// var NV = React.createClass ({
//     render: function () {
//       return (
//         <NavigatorIOS
//           style = {styles.container}
//           initialRoute = {
//             {
//               title: '首页',
//               Component: index,
//             }
//           }
//         />
//       )
//     }
// });
//
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });
// AppRegistry.registerComponent('MyXiecheng', () => NV);
