import * as React from "react";

import { Snackbar } from "react-native-paper";

const ErrorAlert = ({ open, close, message }) => {
  return (
    <Snackbar
      visible={open}
      onDismiss={close}
      duration={2000}
      action={{
        label: "Dismiss",
        onPress: close,
      }}
    >
      {message}
    </Snackbar>
  );
};
export default ErrorAlert;
