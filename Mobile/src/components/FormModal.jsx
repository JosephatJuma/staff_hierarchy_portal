import React from "react";
import { ScrollView } from "react-native";
import { Dialog, Portal, Text } from "react-native-paper";
import AddStaffForm from "../forms/AddStaffForm";
function FormModal(props) {
  return (
    <Portal>
      <Dialog visible={true} onDismiss={props.close}>
        <Dialog.ScrollArea>
          <ScrollView>
            <Text>Hello</Text>
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
}

export default FormModal;
