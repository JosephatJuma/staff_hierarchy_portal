import React from "react";
import { Formik } from "formik";
import { Grid, Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";
import { useSelector } from "react-redux";
function AddStaffForm(props) {
  //const role = useSelector((state) => state.roles.selectedRole);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.handleSubmit(values);
        }}
      >
        {({ handleSubmit }) => (
          <form className="form-wrap" onSubmit={handleSubmit} method="POST">
            <Grid item xs={12}>
              <label htmlFor="nationality">
                {props.name}
                <span className="asterisks">*</span>
              </label>

              <TextField
                value="name"
                name="name"
                placeholder={props.name}
                type="input"
                size="small"
                sx={{
                  marginTop: "5px",
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="nationality">
                {props.description}
                <span className="asterisks">*</span>
              </label>

              <TextField
                multiline={true}
                value="description"
                name="description"
                placeholder={props.description}
                mulitline
                rows={4}
                sx={{
                  marginTop: "5px",
                }}
              />
            </Grid>

            <div className="formGrid">
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
                  className="submitBtn"
                  sx={{
                    fontSize: "14px",
                    padding: "8px 40px",
                    backgroundColor: "#542A52",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "none",
                    "&:hover": {
                      backgroundColor: "#6D3D6D",
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
