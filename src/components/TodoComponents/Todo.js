import React from 'react';
import { P } from './ComponentStyles';

const ToDo = props => {
  return (
    <div className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleCompleted(props.item.id)}>
        <P>{props.item.item}</P>
    </div>
  )
};

export default ToDo;
