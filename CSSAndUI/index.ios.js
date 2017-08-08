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

export default class CSSAndUI extends Component {
  render() {
    return (
      <View style = {styles.style_0}>

        <View style={[styles.style_1, {flexDirection: 'row'}]}>
          <Text style={{marginTop: 40,fontSize:20}}>
          flexDirection
          </Text>
          <Text style={{marginTop: 40,fontSize:20}}>
          一个是row
          </Text>

        </View>

        <View style={[styles.style_1, {flexDirection: 'column'}]}>

          <Text style={{marginTop: 30,fontSize:20}}>
          flexDirection在React-Native中只有两个属性，
          </Text>
          
          <Text style={{marginTop: 20,fontSize:20}}>
          一个是row(横向伸缩)和column(纵向伸缩)。
          </Text>

        </View>

        <View style={{flex: 10, borderWidth: 1, borderColor: 'red'}}>
          <Text>
            当一个(元素)组件，定义了flex属性时，表示该元素是可伸缩的。
            当然flex的属性值是大于0的时候才伸缩，其小于和等于0的时候不伸缩，例如：flex:0, flex:-1等。
            上面的代码，最外层的view是可伸缩的，因为没有兄弟节点和它抢占空间。
            里层是3个view,可以看到三个view的flex属性加起来是5+5+10=20,
            所以第一个view和第二个view分别占1／4伸缩空间， 最后一个view占据1／2空间
          </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style_0: {
    flex: 1,
  },
  style_1: {
    flex: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  }

});

AppRegistry.registerComponent('CSSAndUI', () => CSSAndUI);
