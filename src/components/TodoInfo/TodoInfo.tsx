import { UserInfo } from '../UserInfo';
import React from 'react';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      key={todo.id}
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo todo={todo} />
    </article>
  );
};
