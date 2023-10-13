import React from "react";
import { ProgressBar } from "react-native-paper";
import { Dialog, Portal, Text, Button } from "react-native-paper";

function DeleteDialog(props) {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.close}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title>
          <Text variant="titleLarge">{props.title}</Text>
        </Dialog.Title>
        <Dialog.Content>
          {props.performing ? (
            <ProgressBar indeterminate={true} color="red" />
          ) : (
            <Text variant="titleMedium">This Action can not be reversed!</Text>
          )}
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            mode="contained"
            style={{ backgroundColor: "#0F9D58" }}
            onPress={props.close}
          >
            Cancel
          </Button>
          <Button
            mode="contained"
            style={{ backgroundColor: "red" }}
            onPress={props.action}
          >
            Continue
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

export default DeleteDialog;
