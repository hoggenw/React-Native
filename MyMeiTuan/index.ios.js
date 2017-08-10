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

export default class MyMeiTuan extends Component {
  render() {
    return (
      <View style = {{backgroundColor:'#f3f3f3'}}>
        {/* 第一部分 */}
        <View style = {[styles.height160,styles.row]}>

          {/* part_1_left */}
          <View style = {[styles.height160,styles.part_1_left,{marginTop:64,backgroundColor:'white'}]}>
            <Text style = {[styles.font14,styles.marTop18,styles.marLeft10,styles.green,]} >我们约会吧</Text>
            <Text style = {[styles.font10,styles.marTop14,styles.marLeft10]}>恋爱家人好朋友</Text>
            <Image style = {[styles.yue]} source={{uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}></Image>
          </View>

          {/* part_1_right */}
          <View style = {[styles.height160,styles.part_1_right,{marginTop:64,backgroundColor:'white'}]}>
            <View style = {[styles.row,{flex:1}]}>
              <View style = {{flex : 1}}>
                <Text style = {[styles.font14,styles.marTop18,{marginLeft:30},styles.red]} >
                  超值低价
                </Text>
                <Text style = {[styles.font14,{marginLeft:30,marginTop:14,fontSize:12,color:'black'},styles.marTop18]} >
                  十元惠生活
                </Text>
              </View>
              <View style = {[{flex:1},{marginTop: 13}]}>
                <Image style = {[styles.hanbao]} source={{uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>

                </Image>
              </View>
            </View>
            {/* part_1_right down */}
            <View style={[{flex:1, flexDirection: 'row',borderTopWidth:0.5,
                          borderColor:'#DDD8CE'}]}>
                      {/*  lft*/}
                      <View style = {{flex:1,borderRightWidth:1, borderColor:'#DDD8CE',}}>
                            <Text style = {{color:'#F742AB',marginLeft:5,fontWeight:'bold',fontSize:15,marginTop:8}}>
                              聚餐宴请
                            </Text>
                            <Text style = {{fontSize:12,marginTop:4,marginLeft:5}}>
                              朋友家人常聚聚
                            </Text>
                            <Image style = {{height:25,width: 25,alignSelf:'center'}}
                            source = {{uri:'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>
                            </Image>

                      </View>
                      {/* right */}
                      <View style = {{flex:1}}>
                        <Text style = {{fontSize:14,marginTop:8,marginLeft:5,color:'#ff8601'}}>
                          名店抢购
                        </Text>
                        <Text style = {{fontSize:12,marginTop:4,marginLeft:5}}>
                          还有
                        </Text>
                        <Text style = {{fontSize:12,marginTop:4,marginLeft:5}}>
                          12:06:12分
                        </Text>
                      </View>
            </View>


          </View>
        </View>
        {/* 第一部分完成 */}
        {/* 第二部分开始 */}
        <View style = {{marginTop: 75}} >
          {/*  第一列*/}
          <View style = {{borderBottomWidth:1,borderTopWidth:1,borderColor:'#DDD8CE',
                          marginTop:0,height:65,flexDirection:'row',paddingTop:10,
                          backgroundColor:'white'}}>
                  <View style = {{flex:1}}>
                    <Text style = {{fontSize:17,color:'#ff7f60',fontWeight:'900',
                                    marginLeft: 5}}>
                      一元吃大餐
                    </Text>
                    <Text style = {{marginLeft: 7,fontSize:12,marginTop:7}}>
                      新用户专享
                    </Text>
                  </View>
                  <View style = {{flex:1}}>
                    <Image style = {{height:50,width: 120}}
                    source = {{uri:'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>
                    </Image>
                  </View>

          </View>
        {/* 第二列 */}
          <View style = {{backgroundColor:'white'}}>
                    <View style = {{flexDirection:'row'}}>
                          <View style = {[styles.row,{borderColor:'#DDD8CE',borderRightWidth:1,flex:1}]}>
                              <View style= {{flex:1}}>
                                  <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>撸串节狂欢</Text>
                                  <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>烧烤6.6元起</Text>
                              </View>
                              <View style= {{flex:1}}>
                                  <Image style = {{height:55,width: 60}}
                                      source = {{uri:'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>
                                  </Image>
                              </View>

                          </View>

                          <View style={styles.row,{flex:1}}>
                                <View style={{flex:1}}>
                                      <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>毕业旅行</Text>
                                      <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>选好酒店才安心</Text>
                                </View>
                                <View style={{flex:1}}>
                                        <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>
                                </View>
                        </View>
                    </View>
          </View>


      </View>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  marTop14: {
    marginTop: 14,
  },
  marTop18: {
    marginTop: 18,
  },
  marLeft10: {
    marginLeft: 10,
  },
  font14: {
    fontSize: 14,
  },
  font10: {
    fontSize: 12,
  },
  height160: {
    height: 160,
  },
  yue: {
    height: 80,
  },
  part_1_left: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#dcd7cd',
    borderBottomWidth: 1
  },
  part_1_right: {
    flex:2,
    borderWidth: 0.5,
    borderBottomWidth: 1,
    borderColor:'#dcd7cd',
  },
  green: {
    color:'#55a448',
    fontWeight: '900'
  },
  red: {
    color:'#ff3f0d',
    fontWeight: '900'
  },
  hanbao:{
    height:55,
    width:55
}


});

AppRegistry.registerComponent('MyMeiTuan', () => MyMeiTuan);
