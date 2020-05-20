import axios from 'axios';
import { useFormik, Formik } from 'formik';
import { camelCase, reduce } from 'lodash';
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
  // const { id } = useParams();
  const { data } = props;
  console.log("data", data)
  const adminFields = (data && data[0]) || {
    aboutUs: {
      aboutUsContent: "",
      aboutUsFooter: "",
      aboutUsTitle: ""
    },
    faq: {
      faqContent: "",
    }
  };

  const {    
    // id="",   
    // aboutUs="",
    // questions="[]",
    // privacy="",
    // terms="",
    // version="", 
    id,
    aboutUs: {
      content: aboutUsContent,
      footer: aboutUsFooter,
      title: aboutUsTitle
    },
    // faq: {
    //   content: faqContent,
    // }
    faq
  } = adminFields;

  const faqContent = "";

  const formik = useFormik({
    initialValues: {
      aboutUsContent,
      aboutUsFooter,
      aboutUsTitle,
      faqContent,
      // terms,
      // version,
    },
    onSubmit: async values => {
      console.log("onSubmit values", values)
      const body = reduce(values, (acc, value, key) => {
        // console.log("body",body)
        // console.log("acc" ,acc)
        // console.log("value" ,value)
        // console.log("key" ,key)
        if (key.startsWith('aboutUs')) {
          const k = camelCase(key.substring(7));
          // console.log("k", k)
          acc['aboutUs'] = { ...acc['aboutUs'], [k]: value }
          // console.log("acc['aboutUs']", acc['aboutUs'])
        } else if (key.startsWith('faq')) {
          const k = camelCase(key.substring(3));
          // console.log("k", k)
          acc['faq'] = { ...acc['faq'], [k]: value }
          // console.log("acc['faq']", acc['faq'])
        } 
        return acc;
      }, {});
      console.log("body",body)
      setLoading(true);
      if (id) {
        await axios.post(`/admin/` + id, body);
      } else {
        await axios.post(`/admin/`, body);
      }
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