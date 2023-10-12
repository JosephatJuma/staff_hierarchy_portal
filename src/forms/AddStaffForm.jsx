import React from "react";
import { Formik } from "formik";
import { Grid, Button, TextField, Box } from "@mui/material";
import { TextInputField } from "../components/TextInputField";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
function AddStaffForm(props) {
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    role: yup.string().required("Role is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          role: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //props.handleSubmit(values);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form className="form-wrap" onSubmit={handleSubmit} method="POST">
            <Grid container className="form-grid" spacing={2}>
              <Grid item xs={6}>
                <div className="form-input">
                  <label htmlFor="name">
                    Staff Name
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                    name="name"
                    placeholder="E.g Juma Josephat"
                    type="input"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>

              <Grid item xs={6}>
                <div className="form-input">
                  <label htmlFor="role">
                    Staff Role
                    <span className="asterisks">*</span>
                  </label>

                  <TextInputField
                    name="role"
                    placeholder="E.g Software Developer"
                    type="input"
                    size="small"
                    sx={{
                      marginTop: "5px",
                    }}
                  />
                </div>
              </Grid>
            </Grid>

            <div className="form-grid">
              {props.submitting ? (
                <LoadingButton
                  className="btnNext"
                  loading
                  color="secondary"
                  loadingPosition="start"
                  variant="contained"
                  sx={{
                    fontSize: "14px",
                    padding: "8px 40px",
                    borderRadius: "15px",
                  }}
                >
                  Submitting
                </LoadingButton>
              ) : (
                <Button
                  type="submit"
                  className="submit-btn"
                  sx={{
                    fontSize: "14px",
                    padding: "8px 40px",
                    backgroundColor: "#0F9D58",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "none",
                    "&:hover": {
                      backgroundColor: "#0F9D58c0",
                    },
                  }}
                >
                  Submit
                </Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddStaffForm;
