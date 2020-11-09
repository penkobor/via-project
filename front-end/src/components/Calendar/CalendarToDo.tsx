import * as React from "react";
import { CalendarListItem } from "./CalendarListItem";
import { CalendarTodoBase } from "./CalendarTodoBase";

export interface ToDoMock {
    title: string,
    time: number,
    done: boolean
}

export class CalendarToDo extends React.Component<{},{}>{ 
    // 1. fetch data from api/todos
    // 2. define handlers tick/untick <- or better move it to ListItemcomponent
    //  2.1 onTick -> POST to api/todos/delete/{taskId} -> finish
    //  2.2 onUntick -> POST to api/todos/create/{taskId} -> start
    // 3. create structure (newer by time on the top)
    todos: ToDoMock[] = [
      {
        title: 'Do A',
        time: 9,
        done: false 
      },
      {
        title: 'Do B',
        time: 12,
        done: true
      },
      {
        title: 'Do A',
        time: 15,
        done: false
      }
    ]
    render(){
        return (
          <CalendarTodoBase>
            {this.todos.map(todo => {
              return <CalendarListItem todos={todo} />  
            })}
          </CalendarTodoBase>
        );
    }
}