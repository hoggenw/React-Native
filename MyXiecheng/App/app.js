
// 引入React和Component
import React, { Component } from "react";
// 引入View，类似于html的Div
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ListView,
  keyboard,

 } from "react-native";
// 引入我们的Header模块
import Header from "./header";
// 引入我们的Footer模块
import Footer from "./footer";
import Row from "./row";

// 定义App类，这个类是Component的子类
class App extends Component {

  // 构造方法,初始化state
  constructor(props) {
    super(props);
    // 创建ListView.DataSource
    const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    // 初始化2个状态
    this.state = {
      value: "",
      items: [],
      dataSource: ds.cloneWithRows([]),
    };
    //比如我们今天的方法handleRemoveItem是App这个类的方法，
    // 在JavaScript中，类方法是默认不绑定的，所以在handleRemoveItem这个类方法里，
    // 如果我们不将this绑定的话，我们便无法在这个方法里使用this，否则会报this会undefined。 

    this.setSource = this.setSource.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
  }
  /*
  一个通用的setSource方法,方便调用
  */
  setSource(items,itemsDatasource,otherState = {}){
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState
    });
  }
  // 更新state
    // this.setState({
    //   items: newItems,
    //   value: ""
    // });

  /*
     传给Header.TextInput.onSubmitEditing的回调函数
     更新this.state.items
     设置this.state.value为空
     更新this.state.dataSource
     */
  handleAddItem() {
    if (!this.state.value) {
      return;
    }
     // 创建一个新的items,从this.state.items里copy现有的数据,再增加一个新的
     const newItems = [
       // 展开运算符 ... ,
       ...this.state.items,
       {
         key: Date.now(),
         text: this.state.value,
         complete: false
       }
     ];
     this.setSource(newItems,newItems,{value: ""})
  }

  handleToggleComplete(key,complete) {
    // 这里使用了Array.map方法，遍历todo list里每一条todo，
    // 如果发现其key和传递进来的key相同，使用ES6的...操作符来更新complete状态。
    const newItems = this.state.items.map((item) =>{
      if (item.key !== key) {
        return item;
      }
      return {
        ...item,
        complete
      }
    });
    this.setSource(newItems, newItems);
  }
  /*
   实现App类的render方法，这个方法返回一个View，
   其组成分别是Header, Content和Footer
   */


  render() {
    return (
      <View style = {styles.container}>
        <Header
          value = {this.state.value}
          onAddItem = {this.handleAddItem.bind(this)}
          onChange=  {(value) => this.setState({value})}
        />
        <View style = {styles.content}>
            <ListView
              style = {styles.list}
              enableEmptySections
              dataSource = {this.state.dataSource}
              onScroll = {() => keyboard.dismiss()}
              renderRow = {({key,...value}) => {
                return (
                  <Row
                    key = {key}
                    onComplete = {(complete) => this.handleToggleComplete(key, complete)}
                    {...value}
                  />
                )
              }}
              renderSeparator={(sectionId, rowId) => {
             return <View key={rowId} style={styles.separator}/>
           }}
         />
{/* enableEmptySections，在未来的react native版本中，ListView将默认渲染空section headers，所以这里设置这个参数。
onScroll={() => Keyboard.dismiss()}会在ListView手指滚动的时候，将输入框隐藏起来，给用户更好的体验
({key, ...value})使用ES6的...来将item的属性动态的传给Row组件
renderSeparator用于渲染数据行的间隔横线
 */}
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
    },
    list: {
    backgroundColor: '#FFF'
  },
  separator: {
    borderWidth: 1,
    borderColor: "#F5F5F5"
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
