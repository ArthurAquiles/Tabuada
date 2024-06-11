import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXAM_TITLE_FIELD } from "../exam/ExamTitle";

export const QuestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Questions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Exam" source="exam.id" reference="Exam">
          <TextField source={EXAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="questionText" source="questionText" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
