import React from "react";
import "./App.css";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
function App() {
  return (
    <React.Fragment>
      {/* <TodoListFC /> */}
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={yup.object().shape({
            name: yup.string().required("Please enter your name"),
            email: yup.string().required("Please enter your email").email(),
            password: yup
              .number()
              .required("Please enter your password")
              .min(15),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Please enter your name"
                components={Text}
                // error={errors.name ? true : false}
                // helperText={errors.name && errors.name}
              />
              <Field
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Please enter your email"
                // error={errors.email ? true : false}
                // helperText={errors.email && errors.email}
              />
              <Field
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Please enter your password"
                // error={errors.password ? true : false}
                // helperText={errors.password && errors.password}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
}

export default App;
