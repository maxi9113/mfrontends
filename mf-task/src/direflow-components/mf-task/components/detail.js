import React from 'react';
import {TasksContext} from '../../provider/index'


const Detail = () => {
    return (
        <div className="center">
            <TasksContext.Consumer>
            {({index,tasks,previousState})=>( 
               <div>
                    <p class="font-weight-bold"> Selected </p>
                   <p class="font-weight-bold"> {JSON.stringify(tasks[index])}</p>
                   <p class="font-weight-bold"> List </p>
                   <p class="font-weight-bold"> {JSON.stringify(tasks)}</p>
                   <p class="font-weight-bold"> Previous State </p>
                   <p class="font-weight-bold"> {JSON.stringify(previousState?.tasks)}</p>
               </div>
               
            )}
            </TasksContext.Consumer>
        </div>
    )
};


export default Detail
