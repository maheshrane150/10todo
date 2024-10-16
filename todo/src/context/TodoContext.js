import { createContext, useContext } from "react";

export const TodoContext = createContext ({
    todos : [{
        id : 1,
        todo : "random",
        completed : false
    }],
    addTodo :(todo) => {},
    removeTodo :(id) => {},
    updateTodo : (id, todo) => {},
    toggleTodo : (id) => {}
})

export default function useTodo (){
   return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;