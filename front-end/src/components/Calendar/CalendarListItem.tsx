import * as React from "react";
import { ToDoMock } from "./CalendarToDo";

export class CalendarListItem extends React.Component<{
  todos: ToDoMock
},{}>{ 
    // 2. define handlers tick/untick <- or better move it to ListItemcomponent
    //  2.1 onTick -> POST to api/todos/delete/{taskId} -> finish
    //  2.2 onUntick -> POST to api/todos/create/{taskId} -> start
    render(){
      const { todos } = this.props
      return (
      <>
        <div style={{
          width: '100%',
          height: '40px',
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: todos.done ? 'green' : 'red',
          display: 'flex'
        }} >
          <p>{todos.title}</p>
          <p>{todos.time}</p>
        </div>
      </>
      );
    }
}