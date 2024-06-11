import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AnswerTitle } from "../answer/AnswerTitle";
import { ExamTitle } from "../exam/ExamTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="answers"
          reference="Answer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="exam.id" reference="Exam" label="Exam">
          <SelectInput optionText={ExamTitle} />
        </ReferenceInput>
        <TextInput label="questionText" multiline source="questionText" />
      </SimpleForm>
    </Edit>
  );
};
