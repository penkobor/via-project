import * as React from "react";
import { ToDoMock } from "./CalendarToDo";

export function CalendarTodoBase(props: any) { 
      return (
        <div style={{
          width: '40%',
          padding: '10px',
          backgroundColor: 'grey' }}
        > 
          {props.children}
        </div>
      );
    }