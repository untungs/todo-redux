import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

const Toolbar = (props) => (
  <View style={styles.toolbarStyle}>
    <Text style={styles.titleStyle}>
      {props.title}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  toolbarStyle: {
    height: 56 + StatusBar.currentHeight,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 16,
    backgroundColor: '#009688',
    elevation: 4
  },
  titleStyle: {
    fontSize: 18
  }
})

export default Toolbar
