import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';

import Header from './Header';
import Search from './Search';
import UpdateCard from './UpdateCard';
import LoadingComponent from "../common/LoadingComponent";

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100vw',
  },
  table: {
    // maxHeight: '100vh',
  },
  hover: {
		cursor: 'pointer',
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchCard(props) {
  const { data: incomingData = [], fetchProductList, deleteAllProducts } = props;
  const classes = useStyles();
  const history = useHistory();
  const [input, setInput] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const data = React.useMemo(() => { 
    return input 
      ? incomingData.filter(item => item.name.toLowerCase().includes(input.toLowerCase())) 
      : incomingData;
  }, [incomingData, input]);
  
  const onChange = React.useCallback((e) => {
    setInput(e.target.value);
  }, [setInput]);

  const onSubmit = React.useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    // await axios.get(`/products?name=${input}`);
    setLoading(false);
  }, [data, input]);

  const handleTableRowOnClick = React.useCallback((id) => (e) => {
    history.push(`/product/${id}`);
  }, []);

  const handleDeleteIconOnClick = React.useCallback((id) => async (e) => {
    e.stopPropagation();
    setLoading(true);
    try {
      await axios.delete(`/products/delete/`+ id);
      await fetchProductList();
    } catch (error) {
    };
    setLoading(false);
  }, [fetchProductList]);

  const handleAddIconOnClick = React.useCallback((e) => {
    history.push(`/product/add`);
  }, []);
  
  if (loading) {
    return (
      <LoadingComponent />
    )
  };

  return (
    <Card>
      <CardContent>
      <Header deleteAllProducts={deleteAllProducts} />
        <Search onSubmit={onSubmit} onChange={onChange} handleAddIconOnClick={handleAddIconOnClick} />
        <Paper className={classes.root}>
          <TableContainer className={classes.table}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Brand</TableCell>
                  <TableCell align="right">Origin</TableCell>
                  <TableCell align="right">BarCode Number</TableCell>
                  <TableCell align="right">Valid</TableCell>
                  <TableCell align="right">Labels</TableCell>
                  <TableCell align="right">CreatedAt</TableCell>
                  <TableCell align="right">UpdatedAt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => {
                  const { id, category, labels, origin, price, name, brandName, barcodeNumber, isValid, photos, createdAt, updatedAt } = row;
                  // console.log("row",row)
                  return (
                    <TableRow hover key={id} className={classes.hover} onClick={handleTableRowOnClick(row.id)} >
                      <TableCell component="th" scope="row">
                        <IconButton className={classes.iconButton} aria-label="delete" onClick={handleDeleteIconOnClick(row.id)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="right">{category}</TableCell>
                      <TableCell align="right">{price}</TableCell>
                      <TableCell align="right">{brandName}</TableCell> 
                      <TableCell align="right">{origin}</TableCell>
                      <TableCell align="right">{barcodeNumber}</TableCell>
                      <TableCell align="right">{Number(isValid)}</TableCell>
                      <TableCell align="right">{labels}</TableCell>
                      <TableCell align="right">{new Date(createdAt).toLocaleString()}</TableCell>
                      <TableCell align="right">{new Date(updatedAt).toLocaleString()}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </Paper>
      </CardContent>
    </Card>
  );
}