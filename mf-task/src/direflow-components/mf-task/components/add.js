import React, { useState } from 'react';
import {TasksContext} from '../../provider/index'
import {TextField,Button} from '@material-ui/core';

const Add = () => {
    const { updateData} = React.useContext(TasksContext);  
    const [task, setTask] = useState({
        title: '',
        body: '',
        completed:false
    })

    const handleInputChange = (event) => {
        setTask({
            ...task,
            [event.target.name] : event.target.value
        })
    }
    function addTask() {  
        updateData(task, 'ADD');
    }
    return (
        <form  noValidate autoComplete="off">
        <TextField id="standard-basic" name="title" label="Title" onChange={handleInputChange}  />
        <TextField id="standard-basic" name="body" label="Body" onChange={handleInputChange}/>
        <Button variant="contained" onClick={addTask} color="primary">
            Add
        </Button>
        </form>
    )
};


export default Add
