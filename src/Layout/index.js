import React, { useContext } from 'react';
import { AlertContext } from '../Contexts/AlertContext';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import DrawerLeft from '../DrawerLeft';
import { UserContext } from '../Contexts/userContext';
import Login from '../Login';

function Layout(props) {
  const { 
    alertOpen,
    handleAlertClose,
    alertType,
    alertMsg } = useContext(AlertContext);
  const { authProps } = props;
  const {userLocal} = useContext(UserContext)
  return (
    <div>
      {
        (userLocal === "" || !userLocal)
        ?
        <Login authProps={ authProps } />
        :
        <DrawerLeft authProps={ authProps }>
          {props.children}
          <div style={{ marginTop: "1rem"}}>
            <Snackbar open={alertOpen} autoHideDuration={5000} onClose={handleAlertClose}>
              <Alert onClose={handleAlertClose} severity={alertType}>
                {alertMsg}
              </Alert>
            </Snackbar>
          </div>
        </DrawerLeft>
      }
    </div>
  )
};

export default Layout;
