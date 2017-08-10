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
  View,
  Image
} from 'react-native';
//文本编辑器打开index.ios.js文件，是js代码的入口文件，所有的代码编写从这开始，可以定义自己的模块和引入第三方模块。
export default class MyApp extends Component {
  render() { //如何引入css样式？其实在render方法返回的视图模板里已经体现出来了，即style={styles.container}.其中style是视图的一个属性，
             // styles是我们定义的样式表，container是样式表中的一个样式
             // 。
    return (
      <View style={styles.container}>
        <View style = {{height: 40, borderWidth: 1, borderColor: 'red'}}>
          <View>
            <Text>有补全了</Text>
          </View>
        </View>
        <Text style={styles.welcome}>
          React Native 入门学习!
        </Text>
        <Text style={styles.instructions}>
          构建不成功的原因是因为版本一直不正确，init命令默认会创建最新的版本，而目前最新的0.45版本需要下载boost库编译。
          此库体积庞大，在国内即便翻墙也很难下载成功，导致很多人无法正常运行iOS项目，推荐暂时使用0.44.3的版本。
          创建项目暂时先使用react-native init MyApp --version 0.44.3，指定某个版本。
        </Text>

        <Text style={styles.wrongInstruction}>
              由于没有启动npm start,所以更新不成功。使用text 会失败 应该为Text.
              其中，Image标签的source的第一个大括号是模板，第二个大括号是js对象，js对象里面有个key是uri,表示图片的地址。
        </Text>

        <Image style={styles.pic} source={{uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>

        </Image>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  styleView: {

  },
    pic: {
      width: 100,
      height: 100,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'red',
    },
    wrongInstruction:{
      textAlign:'center',
        color: 'blue',
        fontSize: 18,
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
