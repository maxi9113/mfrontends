import React from "react";
import {produce} from "immer"
export const TasksContext = React.createContext();

const initialState = {
    loading: false,
    error : false,   
    tasks: [],
    stateOriginal : null,
    index: null
};

function reducer(state, action) { 
    console.log(action.type)
    let nextState =  {} ;
    if(action.type == "UNDO")
        nextState = {...state.previousState}  
    else 
        nextState = reducerImmer(state,action);     

    state = nextState;
    return state; 
}

const reducerImmer = produce((draft, action) => {
    
    switch (action.type) {
        case 'GET':            
            draft.tasks = action.data;
          break;
        case 'INDEX':
            draft.index = action.data;
          break;
        case 'DELETE':
            draft.tasks.splice(action.data,1);
          break;
        case 'ADD':
            draft.tasks.push(action.data);
          break;
        case 'LOAD':
            draft.loading = action.data;
          break;
        case 'ERROR':
            draft.error = action.data;
          break;
        case 'UPDATE':
            draft.tasks[draft.index] = {
                ...draft.tasks[draft.index],
                ...action.data            
            };            
          break;
        default:
            break;
    }
  
 
});

function Provider({ children }) {
    const [state, dispatch] = React.useReducer(reducerImmer, initialState);
    const value = {
        tasks : state.tasks,
        loading : state.loading,
        error: state.error,
        index : state.index,
        previousState : state.previousState,
        updateData: (data,type) => {
            dispatch({ type: type, data });
        }
    };

    return ( 
    <TasksContext.Provider value ={value}> 
        {children} 
    </TasksContext.Provider>
    );

}
export default Provider