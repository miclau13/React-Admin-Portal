import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    display: 'flex',
  },
}));

const Update = (props) => {
  const { formik } = props;
  const { handleSubmit, handleChange, handleBlur, values, initialValues } = formik;
  const classes = useStyles();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  }
  return (
    <FormControl 
      component="form" 
      className={classes.formControl} 
      onSubmit={handleOnSubmit}
    >
      <TextField
        id="productName"
        label="Product Name"
        variant="outlined"
        name="name"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['name'],
        }}
        defaultValue={initialValues['name']}
      />
      <TextField
        id="brandName"
        label="Brand Name"
        variant="outlined"
        name="brandName"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['brandName'],
        }}
        defaultValue={initialValues['brandName']}
      />
      <TextField
        id="category"
        label="Category"
        variant="outlined"
        name="category"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['category'],
        }}
        defaultValue={initialValues['category']}
      />
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        name="price"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['price'],
        }}
        defaultValue={initialValues['price']}
      />
      <TextField
        id="origin"
        label="Origin"
        variant="outlined"
        name="origin"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['origin'],
        }}
        defaultValue={initialValues['origin']}
      />
      <TextField
        id="barcodeNumber"
        label="Barcode Number"
        variant="outlined"
        name="barcodeNumber"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['barcodeNumber'],
        }}
        defaultValue={initialValues['barcodeNumber']}
      />
      <TextField
        id="valid"
        label="Valid"
        variant="outlined"
        name="isValid"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['isValid'],
        }}
        defaultValue={initialValues['isValid']}
      />
      <TextField
        id="labels"
        label="Labels"
        variant="outlined"
        name="labels"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['labels'],
        }}
        defaultValue={initialValues['labels']}
      />
      <TextField
        id="photos"
        label="Photos"
        variant="outlined"
        name="photos"
        margin="normal"
        inputProps={{
          onBlur: handleBlur,
          onChange: handleChange,
          value: values['photos'],
        }}
        defaultValue={initialValues['photos']}
      />
      <Button 
        color="primary"
        variant="contained" 
        aria-label="update"
        type="submit"
      >
        Update
      </Button>
    </FormControl>
  )
}
export default Update