import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import LoadingComponent from '../common/LoadingComponent';
import ImportDataDialog from './ImportDataDialog';
import DeleteDataDialog from './DeleteDataDialog';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  button: {
    // color: 'red',
    marginRight: 16,
  },
}));

export default function Header(props) {
  const { deleteAllProducts } = props;
  const classes = useStyles();
  const history = useHistory();

  // const [loading, setLoading] = React.useState(false);
  const [openImportDataDialog, setOpenImportDataDialog] = React.useState(false);
  const [openDeleteDataDialog, setOpenDeleteDataDialog] = React.useState(false);

  const handleImportButtonOnClick = React.useCallback(e => {
    setOpenImportDataDialog(true);
  }, []);
  
  const handleImportDataDialogOnClose = React.useCallback(e => {
    setOpenImportDataDialog(false);
  }, []);

  const handleDeleteAllButtonOnClick = React.useCallback(e => {
    setOpenDeleteDataDialog(true);
  }, []);
  
  const handleDeleteDataDialogOnClose = React.useCallback(e => {
    setOpenDeleteDataDialog(false);
  }, []);

  const handleDeleteButtonOnClick = React.useCallback(async e => {
    // setLoading(true);
    try {
      await deleteAllProducts();
    } catch (e) {
      console.log("e",e)
    }
    // setLoading(false);
    setOpenDeleteDataDialog(false);
  }, [deleteAllProducts]);

  // if (loading) {
  //   return (
  //     <LoadingComponent />
  //   )
  // }
  
  return (
      <Paper 
        variant="outlined" 
        className={classes.root} 
        square 
      >
        <Button 
          className={classes.button} 
          color="secondary"
          variant="outlined" 
          aria-label="delete"
          // type="submit"
          onClick={handleDeleteAllButtonOnClick}
        >
          Delete All
        </Button>
        <Button 
          color="primary"
          variant="contained" 
          aria-label="import"
          onClick={handleImportButtonOnClick}
        >
          Import
        </Button>
        <ImportDataDialog open={openImportDataDialog} onClose={handleImportDataDialogOnClose} />
        <DeleteDataDialog 
          open={openDeleteDataDialog} 
          onClose={handleDeleteDataDialogOnClose}
          handleDeleteButtonOnClick={handleDeleteButtonOnClick}
        />
      </Paper>
  );
}
