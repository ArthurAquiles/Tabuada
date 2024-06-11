import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SUBJECT_TITLE_FIELD } from "../subject/SubjectTitle";

export const VideoLessonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Subject" source="subject.id" reference="Subject">
          <TextField source={SUBJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="videoUrl" source="videoUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
