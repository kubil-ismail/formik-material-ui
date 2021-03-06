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
  fullname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8, "Password too short"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Password confirm is required"),
});

function Login() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        justifyItems="center"
        marginY={17}
        height="60vh"
        padding
      >
        <Card style={{ width: "25vw" }}>
          <Box paddingX={2} paddingY={3}>
            <Text variant="h5" align="center" gutterBottom>
              Register
            </Text>
            <Text align="center" gutterBottom>
              Please register first for continue to login
            </Text>

            <Box marginTop={2} marginBottom={2}>
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  password: "",
                  confirm_password: "",
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
                      id="fullname-input"
                      type="text"
                      name="fullname"
                      label="Fullname"
                      margin="dense"
                      variant="outlined"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.fullname && Boolean(errors.fullname)}
                      helperText={touched.fullname && errors.fullname}
                      fullWidth
                    />
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
                      id="new-password"
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
                    <TextField
                      id="new-password-confirm"
                      type="password"
                      name="confirm_password"
                      label="Confirm Password"
                      margin="dense"
                      variant="outlined"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.confirm_password &&
                        Boolean(errors.confirm_password)
                      }
                      helperText={
                        touched.confirm_password && errors.confirm_password
                      }
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
                      Register
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>

            <Text align="center" gutterBottom>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Already have an account
              </Link>
            </Text>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default Login;
