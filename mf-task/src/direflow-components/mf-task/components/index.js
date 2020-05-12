import React , { useEffect } from 'react'
import ListTask from './lists'
import ServicesTasks from '../../provider/services'
import Add from './add'
import Detail from './detail'
import Edit from './edit'
import {TasksContext} from '../../provider/index'
import {Grid} from '@material-ui/core';


const Tasks = () => {
    const { updateData } = React.useContext(TasksContext);

    // function undoChanges() {
    //     updateData({} ,'UNDO');
    // }

    async function loadData() {
         updateData(true ,'LOAD');
        ServicesTasks.getTask().then((res) => {
            updateData(res, 'GET');
            updateData(false ,'LOAD');
        }).catch(() => {
            updateData(true ,'ERROR');
        })
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <TasksContext.Consumer> 
            {()=>(   
           <div>
               <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Edit />
                </Grid>
                <Grid item xs={6}>
                    <Detail />
                </Grid>
                <Grid item xs={12}>
                    <Add />
                </Grid>
                <Grid item xs={12}>
                    <ListTask />
                </Grid>
                              
            </Grid>
                 
           </div>
         
            )} 
        </TasksContext.Consumer>  
    )
};


export default Tasks
