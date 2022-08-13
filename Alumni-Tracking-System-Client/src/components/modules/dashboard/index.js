import React, {useEffect, useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AppBar from '../common/appBar';

import ModuleRoutes from '../moduleRoutes';
import {getFCMToken, onMessageListener} from "../../../utils/firebase";
import {saveFcmToken} from "../../../services/firebaseService";

const mdTheme = createTheme();

function DashboardContent() {


  const [token, setToken] = useState(null);

  getFCMToken(setToken);

  onMessageListener().then(payload => {
    alert(payload.notification.title + "\n" + payload.notification.body );
  }).catch(err => console.log('failed: ', err));

  useEffect(()=>{
    if(token) {
      saveFcmToken(token);
    }
  }, [token])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
         <ModuleRoutes />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
