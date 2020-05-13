import React from 'react';
import {TasksContext} from '../../provider/index'
import {TextField} from '@material-ui/core';

const Edit = () => {   
    const {updateData} = React.useContext(TasksContext);  
    const handleInputChange = (event) => {        
        updateData({[event.target.name]:event.target.value},"UPDATE");
    }
    
    return (
        <TasksContext.Consumer> 
            {({index,tasks})=>(  
                <div >
                    {
                     index != null?
                     <form  noValidate autoComplete="off">
                        <TextField type="text" onChange={handleInputChange} value={tasks[index].title}  name="title"/>   
                        <TextField type="text"  onChange={handleInputChange} value={tasks[index].body}  name="body"/>
                    </form>:
                    <p class="font-weight-bold"> No selected task </p>
                    }
                    
                </div>
            )} 
        </TasksContext.Consumer>
           
    )
};


export default Edit
