import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[

//            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
{title: 'J', data: getUserList()},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}
//function getUserList() {
//  return ['test', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']
//  }
//function getUserList() {
//  return fetch('http://localhost:8080/user/brw')
//    .then((response) => response.json())
//    .then((responseJson) => {
//      return responseJson.users;
//    })
//    .catch((error) => {
//      console.error(error);
//    });
//}

function getUserList() {
  return fetch('http://localhost:8080/user/brw').then(function(response){return ['1','2']);}
//return ['{"id":1,"name":"Tom","password":"no_pass"}','{"id":2,"name":"Jerry","password":"no_pass"}'];
//return {"id":1,"name":"Tom","password":"no_pass"},{"id":2,"name":"Jerry","password":"no_pass"};
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})