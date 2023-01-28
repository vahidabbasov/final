import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import './Index.scss'
import axios from "axios";
import { Helmet } from "react-helmet";
function Index() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .required("Required"),
    description:
      Yup.string()
      .required("Required"),
    img: Yup.string()
    .required("Required"),
    price:
      Yup.number()
      .required("Required"),
  });
  return (
    <div className="addPageContainer">
      <Helmet>
        <title>AddPage</title>
      </Helmet>
      <h1>Add New Service</h1>
      <Formik
        initialValues={{
          name: "",
          description: "",
          img: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          axios.post("http://localhost:8080/api/services", values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <Field name="name" placeholder="Name" className="input" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field
              placeholder="Description"
              name="description"
              className="input"
            />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <Field
              name="img"
              placeholder="Src for IMG"
              type="text"
              className="input"
            />
            {errors.img && touched.img ? <div>{errors.img}</div> : null}
            <Field
              placeholder="Price"
              name="price"
              type="number"
              className="input"
            />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Index;
