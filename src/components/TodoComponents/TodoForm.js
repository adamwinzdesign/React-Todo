import React from 'react';

import { Form, Label, Button } from './ComponentStyles';
import '../TodoComponents/Todo.css'

class ToDoForm extends React.Component {
  // constructor with state
  constructor() {
    super();
    this.state = {
      newItem: '',
    }
  }

  handleChanges = e => {
    this.setState({
      newItem: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // add item to state
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: '' });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor='item'>New ToDo Item</Label>
        <input 
          type='text' 
          name='item' 
          id='item' 
          value={this.state.newItem} 
          onChange={this.handleChanges} 
          />
        <Button>Add</Button>
      </Form>
    )
  }
}

export default ToDoForm;
