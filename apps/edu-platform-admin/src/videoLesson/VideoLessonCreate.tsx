import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SubjectTitle } from "../subject/SubjectTitle";

export const VideoLessonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="subject.id" reference="Subject" label="Subject">
          <SelectInput optionText={SubjectTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Create>
  );
};
