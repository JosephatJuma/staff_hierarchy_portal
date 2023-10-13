import React from "react";
import { View } from "react-native";
import useStaff from "../api/hooks/useStaff";
import { Formik } from "formik";
import { TextInput as PaperTextInput, Menu, Button } from "react-native-paper";
import * as yup from "yup";
import { useSelector } from "react-redux";

const AddStaffForm = () => {
  const [visible, setVisible] = React.useState(false);
  const { handleSubmit } = useStaff();
  const submitting = useSelector((state) => state.staff.submitting);
  const userList = useSelector((state) => state.staff.userList);

  const loading = useSelector((state) => state.staff.loading);
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[A-Za-z\s]+$/, "Please enter a valid full name"),
    role: yup.string().required("Role is required"),
    //supervisorId: yup.string().required("You must select the supervisor"),
  });

  return (
    <View style={{ flex: 1 }}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", role: "", supervisor: {} }}
        onSubmit={(values) => {
          handleSubmit({
            name: values.name,
            role: values.name,
            supervisorId: values.supervisor.id,
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View>
            <PaperTextInput
              mode="outlined"
              label="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={{ margin: 10 }}
              disabled={submitting}
            />
            <PaperTextInput
              mode="outlined"
              label="Role"
              onChangeText={handleChange("role")}
              onBlur={handleBlur("role")}
              value={values.role}
              style={{ margin: 10 }}
              disabled={submitting}
            />
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={
                <PaperTextInput
                  mode="outlined"
                  showSoftInputOnFocus={false}
                  onPressIn={() => setVisible(true)}
                  value={
                    !values.supervisor.id
                      ? "Select Supervisor"
                      : values.supervisor.role
                  }
                  style={{ margin: 10 }}
                  disabled={submitting}
                  right={
                    <PaperTextInput.Icon
                      icon="chevron-down"
                      onPress={() => setVisible(true)}
                    />
                  }
                />
              }
            >
              {userList.map((item, index) => (
                <Menu.Item
                  style={{ margin: 10 }}
                  key={index}
                  onPress={() => {
                    setFieldValue("supervisor", item);
                    setVisible(false);
                  }}
                  title={item.role}
                />
              ))}
            </Menu>
            <Button
              onPress={handleSubmit}
              mode="contained"
              style={{ margin: 10, backgroundColor: "#0F9D58" }}
              loading={submitting}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddStaffForm;
