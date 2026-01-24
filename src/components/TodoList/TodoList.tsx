import { TodoInfo } from '../TodoInfo';
import React from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export const TodoList: React.FC<Todo[]> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
