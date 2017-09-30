import React from 'react'
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native'

const Toolbar = (props) => (
  <View style={styles.toolbarStyle}>
    <StatusBar
      barStyle="light-content"
    />
    <Text style={styles.titleStyle}>
      {props.title}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  toolbarStyle: {
    justifyContent: 'center',
    backgroundColor: '#009688',
    ...Platform.select({
      ios: {
        height: 64,
        paddingTop: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        height: 56 + StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        paddingLeft: 16,
        elevation: 4
      }
    })
  },
  titleStyle: {
    fontSize: 18,
    color: 'white'
  }
})

export default Toolbar
