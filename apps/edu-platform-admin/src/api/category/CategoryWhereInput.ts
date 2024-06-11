import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubjectListRelationFilter } from "../subject/SubjectListRelationFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subjects?: SubjectListRelationFilter;
};
