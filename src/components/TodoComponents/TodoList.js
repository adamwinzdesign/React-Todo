// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

import { Button, P, ListDiv } from './ComponentStyles';

const ToDoList = props => {
  return (
    <ListDiv>
      <P>Your Items:</P>
      {props.toDo.map(item => (
        <ToDo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <Button onClick={props.clearCompleted}>
        Clear Completed Items
      </Button>
    </ListDiv>
  );
};

export default ToDoList;
