import React , { useEffect } from 'react'
import ListTask from './lists'
import ServicesTasks from '../../provider/services'
import Add from './add'
import Detail from './detail'
import Edit from './edit'
import {TasksContext} from '../../provider/index'
import {Grid,BottomNavigation,Button} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
                    <Router>
                        <div>
                            <BottomNavigation >
                                <Button variant="contained" color="primary" >
                                    <Link to="/">List</Link>
                                </Button>
                                <Button variant="contained" color="primary">
                                    <Link to="/detail">Detail</Link>
                                </Button>
                                <Button variant="contained" color="primary" >
                                    <Link to="/add">Add</Link>
                                </Button>
                            </BottomNavigation>
                            <Switch>
                                    <Route path="/detail">
                                        <Grid item xs={12}>
                                            <Detail />
                                        </Grid>
                                    </Route>
                                    <Route path="/add">
                                        <Grid item xs={12}>
                                            <Add />
                                        </Grid>
                                    </Route>
                                    <Route path="/">   
                                        <Grid item xs={12}>
                                            <Edit />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListTask />
                                        </Grid>                                 
                                    </Route>
                                </Switch>
                             
                        </div>
                    </Router>                 
                </Grid>                 
           </div>
         
            )} 
        </TasksContext.Consumer>  
    )
};


export default Tasks
