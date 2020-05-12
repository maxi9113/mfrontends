import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';
////contexts////
import Provider from '../provider/index'
import Tasks from '../mf-task/components/index';

 const App = () => {
//   const dispatch = useContext(EventContext);

  // const handleClick = () => {
  //   const event = new Event('my-event');
  //   dispatch(event);
  // };


  return (
    <Provider>     
      <Styled styles={styles}>   
        <div className='app'>          
          <div >           
            <div ><Tasks/></div>     
          </div>
        </div>
      </Styled>
    </Provider>
  );
};



export default App;
