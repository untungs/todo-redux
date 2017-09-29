import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'

class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onTextChanged = text => {
    this.setState({ text })
  }

  onAddButtonClicked = () => {
    console.log(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.inputStyle}
          value={this.state.text}
          onChangeText={this.onTextChanged}
        />
        <Button 
          title="Add"
          onPress={this.onAddButtonClicked}
        />
      </View>
    )
  }
}

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
