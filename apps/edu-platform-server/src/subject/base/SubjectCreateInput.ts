/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ExamCreateNestedManyWithoutSubjectsInput } from "./ExamCreateNestedManyWithoutSubjectsInput";
import { VideoLessonCreateNestedManyWithoutSubjectsInput } from "./VideoLessonCreateNestedManyWithoutSubjectsInput";

@InputType()
class SubjectCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => ExamCreateNestedManyWithoutSubjectsInput,
  })
  @ValidateNested()
  @Type(() => ExamCreateNestedManyWithoutSubjectsInput)
  @IsOptional()
  @Field(() => ExamCreateNestedManyWithoutSubjectsInput, {
    nullable: true,
  })
  exams?: ExamCreateNestedManyWithoutSubjectsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => VideoLessonCreateNestedManyWithoutSubjectsInput,
  })
  @ValidateNested()
  @Type(() => VideoLessonCreateNestedManyWithoutSubjectsInput)
  @IsOptional()
  @Field(() => VideoLessonCreateNestedManyWithoutSubjectsInput, {
    nullable: true,
  })
  videoLessons?: VideoLessonCreateNestedManyWithoutSubjectsInput;
}

export { SubjectCreateInput as SubjectCreateInput };
