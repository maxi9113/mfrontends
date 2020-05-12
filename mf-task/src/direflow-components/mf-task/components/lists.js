import React from 'react'
import {TasksContext} from '../../provider/index'
import {Button,ButtonGroup,Table, TableContainer, TableHead, TableRow, TableCell,TableBody} from '@material-ui/core';

 const ListTask = () => {
    const {updateData} = React.useContext(TasksContext);    
    function deleteTask(task) {        
        updateData(task, 'DELETE');    
    }
    function selectTask(index) {        
        updateData(index, 'INDEX');    
    }
    return (
        <TasksContext.Consumer> 
        {({tasks,loading,index,previousState})=>(  
                   <TableContainer >
                   <Table  aria-label="simple table">
                     <TableHead>
                       <TableRow>
                         <TableCell>Title</TableCell>
                         <TableCell align="right">Body</TableCell>
                         <TableCell align="right">Actions</TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                       {tasks.map((row,_index) => (
                         <TableRow key={row.title}>
                           <TableCell component="th" scope="row">
                             {row.title}
                           </TableCell>
                           <TableCell align="right">{row.body}</TableCell>
                           <TableCell align="right">
                           <ButtonGroup size="small" aria-label="small outlined button group">
                                <Button onClick={()=>selectTask(_index)} color="primary">Edit</Button>
                                <Button onClick={()=>deleteTask(row)} color="secondary">Delete</Button>
                            </ButtonGroup>
                            </TableCell>
                        </TableRow>
                       ))}
                     </TableBody>
                   </Table>
                 </TableContainer>            
        )} 
        </TasksContext.Consumer>

        
    )
};


export default ListTask
