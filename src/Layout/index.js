import React, { useContext } from 'react';
import { AlertContext } from '../Contexts/AlertContext';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import DrawerLeft from '../DrawerLeft';
import { UserContext } from '../Contexts/userContext';

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
      <DrawerLeft authProps={ authProps }>
        <div style={{ marginTop: "1rem"}}>
          {
            (userLocal === "" || !userLocal)
            ?
            <>Login Screen</>
            :
            props.children
          }
          <Snackbar open={alertOpen} autoHideDuration={5000} onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity={alertType}>
              {alertMsg}
            </Alert>
          </Snackbar>
        </div>
      </DrawerLeft>
    </div>
  )
};

export default Layout;
