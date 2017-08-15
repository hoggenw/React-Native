// 引入React和Component
import React, { Component } from "react";
// 引入Text，显示文字
import { View, Text,StyleSheet,TextInput } from "react-native";

// 定义Header类，这个类是Component的子类
class Header extends Component {
  /*
   实现Header类的render方法，这个方法返回一个View，显示Footer
   */
  render() {
    return (
      <View style = {styles.header}>
        {/* value，是一个值，就是app用于存储当前正在输入的todo value
onChange，一个回调函数，用于TextInput onChangeText的时候，更新app.state.value
onAddItem，一个回调函数，当TextInput onSubmitEditing（提交）的时候，更新app.state.items，并将app.state.value设置为空。

作者：胡冰蓝
链接：http://www.jianshu.com/p/b4ccbf43924b
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */}
        <TextInput
          placeholder="什么需要做?"
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          blurOnSubmit={false}
          returnKeyType="done"
          style={styles.input}
        />
      </View>
    );
  }
}

// 创建StyleSheet
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    flex: 1,
    height: 50
  }
});


// 导出这个模块，供外部调用
export default Header;
