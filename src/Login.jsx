import React from "react";
import {
  Button,
  Box,
  Card,
  Typography as Text,
  TextField,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

function Login() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        justifyItems="center"
        marginY={20}
        height="50vh"
        padding
      >
        <Card style={{ width: "25vw" }}>
          <Box paddingX={2} paddingY={3}>
            <Text variant="h5" align="center" gutterBottom>
              Login
            </Text>
            <Text align="center" gutterBottom>
              Please login first for continue to application
            </Text>

            <Box marginTop={2} marginBottom={2}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleBlur,
                  isValid,
                }) => (
                  <Form>
                    <TextField
                      id="email-input"
                      type="email"
                      name="email"
                      label="Email"
                      margin="dense"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                    />
                    <TextField
                      id="password-input"
                      type="password"
                      name="password"
                      label="Password"
                      margin="dense"
                      variant="outlined"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      fullWidth
                    />
                    <Box marginTop={1} />
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={!isValid}
                      fullWidth
                    >
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>

            <Text align="center" gutterBottom>
              <Link to="/register" style={{ textDecoration: "none" }}>
                Create new account
              </Link>
            </Text>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default Login;
