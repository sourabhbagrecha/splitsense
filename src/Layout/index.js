import React, { useContext } from 'react';
import { AlertContext } from '../Contexts/AlertContext';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

function Layout(props) {
  const { 
    alertOpen,
    handleAlertClose,
    alertType,
    alertMsg } = useContext(AlertContext);
  return (
    <div>
      {props.children}
      <Snackbar open={alertOpen} autoHideDuration={5000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={alertType}>
          {alertMsg}
        </Alert>
      </Snackbar>
    </div>
  )
};

export default Layout;
