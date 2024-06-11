import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { QUESTION_TITLE_FIELD } from "./QuestionTitle";
import { EXAM_TITLE_FIELD } from "../exam/ExamTitle";

export const QuestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Exam" source="exam.id" reference="Exam">
          <TextField source={EXAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="questionText" source="questionText" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Answer"
          target="questionId"
          label="Answers"
        >
          <Datagrid rowClick="show">
            <TextField label="answerText" source="answerText" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isCorrect" source="isCorrect" />
            <ReferenceField
              label="Question"
              source="question.id"
              reference="Question"
            >
              <TextField source={QUESTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
