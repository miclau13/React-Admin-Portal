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
    info: {
      infoTitle1: "",
      infoContent1: "",
      infoTitle2: "",
      infoContent2: "",
      infoTitle3: "",
      infoContent3: "",
    },
    version: {
      versionContent: "",
    },
  };

  const {    
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
    privacy: { 
      title1: privacyTitle1,
      content1: privacyContent1,
      title2: privacyTitle2,
      content2: privacyContent2,
      title3: privacyTitle3,
      content3: privacyContent3,
      title4: privacyTitle4,
      content4: privacyContent4,
      title5: privacyTitle5,
      content5: privacyContent5,
      title6: privacyTitle6,
      content6: privacyContent6,
      title7: privacyTitle7,
      content7: privacyContent7,
      title8: privacyTitle8,
      content8: privacyContent8,
      title9: privacyTitle9,
      content9: privacyContent9,
      title10: privacyTitle10,
      content10: privacyContent10,
    },
    info: {
      title1: infoTitle1,
      content1: infoContent1,
      title2: infoTitle2,
      content2: infoContent2,
      title3: infoTitle3,
      content3: infoContent3,
    },
    version: {
      content: versionContent,
    },
  } = adminFields;

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
      infoTitle1,
      infoContent1,
      infoTitle2,
      infoContent2,
      infoTitle3,
      infoContent3,
      versionContent,
    },
    onSubmit: async values => {
      const body = reduce(values, (acc, value, key) => {
        if (key.startsWith('aboutUs')) {
          const k = camelCase(key.substring(7));
          acc['aboutUs'] = { ...acc['aboutUs'], [k]: value }
        } else if (key.startsWith('faq')) {
          const k = camelCase(key.substring(3));
          acc['faq'] = { ...acc['faq'], [k]: value }
        } else if (key.startsWith('terms')) {
          const k = camelCase(key.substring(5));
          acc['terms'] = { ...acc['terms'], [k]: value }
        } else if (key.startsWith('privacy')) {
          const k = camelCase(key.substring(7));
          acc['privacy'] = { ...acc['privacy'], [k]: value }
        } else if (key.startsWith('info')) {
          const k = camelCase(key.substring(4));
          acc['info'] = { ...acc['info'], [k]: value }
        } else if (key.startsWith('version')) {
          const k = camelCase(key.substring(7));
          acc['version'] = { ...acc['version'], [k]: value }
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