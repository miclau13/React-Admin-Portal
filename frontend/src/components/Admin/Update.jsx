import { camelCase, startCase } from 'lodash';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { MORE_INFO } from '../../common/constant';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
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
      {MORE_INFO.map((info, index) => {
        return (
          <FormGroup key={index}>
            <Typography variant="h6">{info.group}</Typography>
            <Divider />
            <Box 
              component="div" 
              p={1}
              mt={1}
            >
              {info.items.map((item, index) => {
                const placeholder = startCase(item);
                const name = camelCase(`${info.group} ${item}`);
                const value = values[name];
                const defaultValue = initialValues[name];
                return (
                  <TextField 
                    fullWidth 
                    placeholder
                    multiline
                    key={index}
                    rows={5}
                    label={placeholder}
                    variant="outlined" 
                    margin="dense"
                    name={name}
                    inputProps={{
                      onBlur: handleBlur,
                      onChange: handleChange,
                      value: value,
                    }}
                    defaultValue={defaultValue}
                  />
                )
              })}
            </Box>
          </FormGroup>
        )
      })}
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