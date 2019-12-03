import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import { H2, P, AppDiv } from './components/TodoComponents/ComponentStyles';
import './components/TodoComponents/Todo.css';


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

  clearCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter(item => !item.completed)
    })
  };

  toggleCompleted = id => {
    // loop through toDo data, find toDo item that the user clicked by matching the id
    // toggle that item's completed property

    this.setState({
      toDo: this.state.toDo.map(item => {
        if(item.id === id) {
          return {...item, completed: !item.completed};
          } else {
            return item;
        }
      })
    })
  };

  render() {
    return (
      <AppDiv>
        <H2>Welcome to your Todo App!</H2>
        <P>You may add items to the list by typing them into the input and clicking Add, or by pressing the Enter/Return key.</P>
        <P>Existing items may be marked as completed by clicking on them.</P>
        <P>Completed items may be removed by clicking the Clear Completed Items button.</P>
        <TodoForm addItem={this.addItem} />
        <TodoList 
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          toDo={this.state.toDo}
        />
      </AppDiv>
    );
  }
}

export default App;
