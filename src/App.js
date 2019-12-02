import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import styled from 'styled-components';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // initialize state
  constructor() {
    super();
    this.state = {toDo: []};
  }

  // class methods to update state
  addItem = item => {
    // update toDo state with new item
    const newItem = {
      item: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDo: [...this.state.toDo, newItem]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
