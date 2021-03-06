import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import ImportDataCard from './ImportDataCard';

export default function ImportDataDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      {...props}
    >
      <DialogTitle id="import-data">Delete All Data?</DialogTitle>
      <DialogActions>
        <Button variant="outlined" onClick={props.handleDeleteButtonOnClick} color="secondary">
          Delete
        </Button>
        <Button onClick={props.onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );  
}