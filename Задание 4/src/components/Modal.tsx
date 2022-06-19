import React from "react";

//redux
import type { RootState } from "../store/store";
import { useAppDispatch } from "../store/hooks";
import { useSelector } from "react-redux";
import { updateShow, updateState } from "../store/slices/modalSlice";
import { updatePost } from "../store/slices/postsSlice";

//import types
import type { IPopupOptions } from "devextreme-react/popup";
import type { FieldDataChangedEvent } from "devextreme/ui/form";

//devExtreme
import notify from "devextreme/ui/notify";
import { Popup } from "devextreme-react/popup";
import TextArea from "devextreme/ui/text_area";
import Form, {
  ButtonItem,
  GroupItem,
  SimpleItem,
  Label,
  RequiredRule,
} from "devextreme-react/form";

//types
interface iProps extends IPopupOptions {}

export default function NewModal(props: iProps) {
  const dispatch = useAppDispatch();
  const { body, title, id } = useSelector((state: RootState) => state.modal);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id) {
      dispatch(updatePost({ title, body, id }));
      dispatch(updateShow({ show: false }));
      notify("Post was changed!", "success");
    } else {
      notify("Error, no id!", "danger");
    }
  }

  function handleChange(e: FieldDataChangedEvent) {
    dispatch(updateState({ state: e.component.option("formData") }));
  }

  return (
    <Popup {...props}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form
          formData={{ body, title }}
          onFieldDataChanged={(e) => handleChange(e)}
        >
          <SimpleItem dataField="title" editorType="dxTextBox">
            <RequiredRule message="Title is required" />
          </SimpleItem>
          <SimpleItem
            dataField="body"
            editorType={TextArea}
            editorOptions={{ autoResizeEnabled: true }}
          >
            <Label text={"Text"} />
            <RequiredRule message="Text is required" />
          </SimpleItem>
          <GroupItem>
            <ButtonItem
              buttonOptions={{
                text: "Change",
                type: "success",
                useSubmitBehavior: true,
              }}
            />
            <ButtonItem
              buttonOptions={{
                text: "Cancel",
                type: "danger",
                useSubmitBehavior: false,
                onClick: () => dispatch(updateShow({ show: false })),
              }}
            />
          </GroupItem>
        </Form>
      </form>
    </Popup>
  );
}
