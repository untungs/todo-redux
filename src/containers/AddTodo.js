import React from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'

const AddTodo = () => (
  <View style={styles.container}>
    <TextInput style={styles.inputStyle} />
    <Button 
      title="Add"
      onPress={() => {}}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16
  },
  inputStyle: { 
    flex: 1, 
    marginRight: 8,
    padding: 4
  }
})

export default AddTodo
