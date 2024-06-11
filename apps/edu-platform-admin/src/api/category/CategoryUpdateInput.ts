import { SubjectUpdateManyWithoutCategoriesInput } from "./SubjectUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  subjects?: SubjectUpdateManyWithoutCategoriesInput;
};
