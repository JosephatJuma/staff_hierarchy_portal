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
    name: yup.string().required("Name is required"),
    role: yup.string().required("Role is required"),
    supervisorId: yup.string().required("You must select the supervisor"),
  });

  return (
    <View style={{ marginTop: 100 }}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ name: "", role: "", supervisorId: "" }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <PaperTextInput
              mode="outlined"
              label="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={{ margin: 10 }}
              //error={touched.name}
            />
            <PaperTextInput
              mode="outlined"
              label="Role"
              onChangeText={handleChange("role")}
              onBlur={handleBlur("role")}
              value={values.role}
              style={{ margin: 10 }}
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
                    values.supervisorId
                      ? values.supervisorId
                      : "Select Supervisor"
                  }
                  style={{ margin: 10 }}
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
                    handleChange("supervisorId")(item.id);
                    setVisible(false);
                  }}
                  title={item.role}
                />
              ))}
            </Menu>
            <Button
              onPress={handleSubmit}
              mode="contained"
              style={{ margin: 10 }}
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
