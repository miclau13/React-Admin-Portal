import axios from 'axios';
import { useFormik, Formik } from 'formik';
import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Update from './Update';
import LoadingComponent from "../common/LoadingComponent";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
  },
}));

export default function UpdateCard(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const { data = [], fetchProductList } = props;
  const product = data.filter(item => item.id === id)[0] || {};
  const { name, category, price, origin, labels, productionDate, brandName, isValid, barcodeNumber, photos } = product;

  const formik = useFormik({
    initialValues: {
      name,
      category,
      price,
      origin,
      labels,
      brandName,
      isValid: Number(isValid),
      barcodeNumber,
      photos
    },
    onSubmit: async values => {
      setLoading(true);
      console.log("values",values)
      const finalLabels = typeof values.labels === "string" ? values.labels.split(",") : values.labels;
      console.log("finalLabels", finalLabels)
      const finalPhotos = typeof values.photos === "string" ? values.photos.split(",") : values.photos;
      console.log("finalPhotos", finalPhotos)
      try {
        if (id !== "add") {
          await axios.post(`/products/`+ id, {
            ...values,
            labels: finalLabels,
            photos: finalPhotos,
            devicedId: "admin"
          });
        } else {
          await axios.post(`/products`, {
            ...values,
            devicedId: "admin"
          });
        };
      } catch (error) {
        console.log("Error", error);
      }
      await fetchProductList();
      setLoading(false);
    },
  });

  if (loading) {
    return (
      <LoadingComponent />
    )
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Formik
          initialValues={formik.initialValues}
          onSubmit={formik.onSubmit}
        >
          <Update formik={formik} />
        </Formik>
      </CardContent>
    </Card>
  );
}