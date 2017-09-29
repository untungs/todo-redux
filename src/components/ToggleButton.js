import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = ({ active, children, onClick }) => {
  return (
    <TouchableOpacity
      disabled={active}
      onPress={onClick}
      style={[styles.buttonStyle, { backgroundColor: active ? '#009688' : 'grey' }]}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    margin: 8,
    padding: 8,
    borderRadius: 50,
    alignItems: 'center'
  }
})

export default ToggleButton
