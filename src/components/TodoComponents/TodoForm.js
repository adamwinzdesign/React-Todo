import React from 'react';
import styled from 'styled-components';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='item'>New ToDo Item</label>
        <input 
          type='text' 
          name='item' 
          id='item' 
          value={this.state.newItem} 
          onChange={this.handleChanges} 
          />
        <button>Add</button>
      </form>
    )
  }
}

export default ToDoForm;
