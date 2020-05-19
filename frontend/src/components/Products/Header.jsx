import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import ImportDataDialog from './ImportDataDialog';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  const [openImportDataDialog, setOpenImportDataDialog] = React.useState(false);

  const handleImportButtonOnClick = React.useCallback(e => {
    setOpenImportDataDialog(true);
  }, []);
  
  const handleImportDataDialogOnClose = React.useCallback(e => {
    setOpenImportDataDialog(false);
  }, []);

  return (
      <Paper 
        variant="outlined" 
        className={classes.root} 
        square 
      >
        <Button 
          color="primary"
          variant="contained" 
          aria-label="import"
          onClick={handleImportButtonOnClick}
        >
          Import
        </Button>
        <ImportDataDialog open={openImportDataDialog} onClose={handleImportDataDialogOnClose} />
      </Paper>
  );
}
