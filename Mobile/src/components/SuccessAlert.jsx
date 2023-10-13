import * as React from "react";

import { Snackbar } from "react-native-paper";

const SuccessAlert = ({ open, close, message }) => {
  return (
    <Snackbar
      visible={open}
      onDismiss={close}
      duration={2000}
      action={{
        label: "Dismiss",
        onPress: close,
      }}
      style={{ backgroundColor: "#0F9D58" }}
    >
      {message}
    </Snackbar>
  );
};
export default SuccessAlert;
