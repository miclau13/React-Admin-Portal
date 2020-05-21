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
    },
    terms: {
      termsTitle1: "",
      termsContent1: "",
      termsTitle2: "",
      termsContent2: "",
      termsTitle3: "",
      termsContent3: "",
    },
    privacy: {
      title1: "",
      content1: "",
      title2: "",
      content2: "",
      title3: "",
      content3: "",
      title4: "",
      content4: "",
      title5: "",
      content5: "",
      title6: "",
      content6: "",
      title7: "",
      content7: "",
      title8: "",
      content8: "",
      title9: "",
      content9: "",
      title10: "",
      content10: "",
    },
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
    faq: {
      content: faqContent,
    },
    terms: {
      title1: termsTitle1,
      content1: termsContent1,
      title2: termsTitle2,
      content2: termsContent2,
      title3: termsTitle3,
      content3: termsContent3,
    },
  } = adminFields;

const privacyTitle1= "";
const privacyContent1= "";
const privacyTitle2= "";
const privacyContent2= "";
const privacyTitle3= "";
const privacyContent3= "";
const privacyTitle4= "";
const privacyContent4= "";
const privacyTitle5= "";
const privacyContent5= "";
const privacyTitle6= "";
const privacyContent6= "";
const privacyTitle7= "";
const privacyContent7= "";
const privacyTitle8= "";
const privacyContent8= "";
const privacyTitle9= "";
const privacyContent9= "";
const privacyTitle10= "";
const privacyContent10= "";

  const formik = useFormik({
    initialValues: {
      aboutUsContent,
      aboutUsFooter,
      aboutUsTitle,
      faqContent,
      termsTitle1,
      termsContent1,
      termsTitle2,
      termsContent2,
      termsTitle3,
      termsContent3,
      privacyTitle1,
      privacyContent1,
      privacyTitle2,
      privacyContent2,
      privacyTitle3,
      privacyContent3,
      privacyTitle4,
      privacyContent4,
      privacyTitle5,
      privacyContent5,
      privacyTitle6,
      privacyContent6,
      privacyTitle7,
      privacyContent7,
      privacyTitle8,
      privacyContent8,
      privacyTitle9,
      privacyContent9,
      privacyTitle10,
      privacyContent10,
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
        } else if (key.startsWith('terms')) {
          const k = camelCase(key.substring(5));
          // console.log("k", k)
          acc['terms'] = { ...acc['terms'], [k]: value }
          // console.log("acc['faq']", acc['faq'])
        } else if (key.startsWith('privacy')) {
          const k = camelCase(key.substring(7));
          // console.log("k", k)
          acc['privacy'] = { ...acc['privacy'], [k]: value }
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