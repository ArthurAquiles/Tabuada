import { SubjectCreateNestedManyWithoutCategoriesInput } from "./SubjectCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  subjects?: SubjectCreateNestedManyWithoutCategoriesInput;
};
