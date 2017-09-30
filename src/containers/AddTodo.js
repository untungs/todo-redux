import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

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
    if (this.state.text) {
      this.props.dispatch(addTodo(this.state.text))
      this.setState({ text: '' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.inputStyle}
          value={this.state.text}
          onChangeText={this.onTextChanged}
          placeholder="I want to..."
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

export default connect()(AddTodo)
