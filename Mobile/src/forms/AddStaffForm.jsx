import React from "react";
import { TextInput, View } from "react-native";
import { Formik } from "formik";
import { TextInput as PaperTextInput, Menu, Button } from "react-native-paper";

const AddStaffForm = () => {
  const [visible, setVisible] = React.useState(false);
  const supervisorData = [];
  return (
    <View>
      <Formik
        initialValues={{ name: "", role: "", supervisor: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <PaperTextInput
              label="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            <PaperTextInput
              label="Role"
              onChangeText={handleChange("role")}
              onBlur={handleBlur("role")}
              value={values.role}
            />
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={
                <Button onPress={() => setVisible(true)}>
                  {values.supervisor || "Select Supervisor"}
                </Button>
              }
            >
              {supervisorData.map((item, index) => (
                <Menu.Item
                  key={index}
                  onPress={() => {
                    handleChange("supervisor")(item);
                    setVisible(false);
                  }}
                  title={item}
                />
              ))}
            </Menu>
            <Button onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddStaffForm;
