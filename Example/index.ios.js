import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform
} from 'react-native';

import Category from 'react-native-category';

export default class Example extends Component {
  constructor(props) {
    super(props);

    //setup category default
    this.data = [
      {id: 1, title: 'Apple'},{id: 2, title: 'Samsung'},{id: 3, title: 'Sony'},
      {id: 4, title: 'Nokia'},{id: 5, title: 'HTC'},{id: 6, title: 'LG'},
      {id: 7, title: 'Huawei'},{id: 8, title: 'OPPO'},{id: 9, title: 'Lenovo'},
      {id: 10, title: 'Xiaomi'},{id: 11, title: 'Asus'}
    ];

    this.arrImage = [
      'bug','rocket','bell','bomb','cab','cloud','bank','legal',
      'map-marker','phone','soccer-ball-o','tint','wifi'
    ];

    this.arrImage2 = [
      'ios-american-football','logo-apple','ios-home','logo-android',
      'ios-appstore','ios-search','ios-analytics','logo-angular',
      'logo-bitcoin','ios-bulb','logo-chrome','ios-color-palette','logo-facebook'
    ];
  }

  _itemTextChoose(item) {
    alert(item.title);
  }

  _itemIconChoose(item) {
    alert('icon ' + item.index);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18 }}>Example Category List</Text>
        </View>
        <ScrollView style={styles.container}>

          <View style={styles.sectionStyles}>
            <Text style={styles.title}>Default</Text>
            <Category
              data={this.data}   //data category
              itemSelected={(item) => this._itemTextChoose(item)} //action when click item, return item selected
              itemText={'title'} //set attribule of object show in item category
            />
          </View>

          <View style={styles.sectionStyles}>
            <Text style={styles.title}>
              Custom round itemStyles - typeText capitalize
            </Text>
            <Category
              data={this.data}
              indexSelected={2}
              itemSelected={(item) => this._itemTextChoose(item)}
              itemText={'title'}
              textType={'capitalize'}
              itemStyles={{ paddingLeft: 30, paddingRight: 30,  borderRadius: 30 }}
            />
          </View>

          <View style={styles.sectionStyles}>
            <Text style={styles.title}>
              Custom cycle itemStyles - typeText upper
            </Text>
            <Category
              data={this.data}
              indexSelected={1}
              itemSelected={(item) => this._itemTextChoose(item)}
              itemText={'title'}
              textType={'upper'}
              itemStyles={{ width: 60, height: 60,  borderRadius: 30 }}
            />
          </View>

          <View style={styles.sectionStyles}>
            <Text style={styles.title}>
              Custom style - Icon (FontAwesome)
            </Text>
            <Category
              style={{ backgroundColor: 'white' }}
              imageData={this.arrImage}
              colorItemDefault={'gray'}
              colorItemSelected={'#FF4E50'}
              itemSelected={(item) => this._itemIconChoose(item)}
            />
          </View>

          <View style={styles.sectionStyles}>
            <Text style={styles.title}>
              Custom style - Icon (Ionicons)
            </Text>
            <Category
              style={{ backgroundColor: 'white' }}
              imageData={this.arrImage2}
              iconSet={'Ionicons'}
              iconSize={40}
              itemStyles={{ paddingLeft: 16, paddingRight: 16, borderRadius: 32 }}
              colorItemDefault={'gray'}
              colorItemSelected={'#FF4E50'}
              itemSelected={(item) => this._itemIconChoose(item)}
            />
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: (Platform.OS === 'ios') ? 64 : 44,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 30 : 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  sectionStyles:{
    marginTop: 20
  },
  title: {
    marginLeft: 8,
    marginBottom: 2,
    color: 'white'
  }
});

AppRegistry.registerComponent('Example', () => Example);
