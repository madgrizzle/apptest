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
import { TowerSiteWhereInput } from "./TowerSiteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TowerSiteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TowerSiteWhereInput,
  })
  @ValidateNested()
  @Type(() => TowerSiteWhereInput)
  @IsOptional()
  @Field(() => TowerSiteWhereInput, {
    nullable: true,
  })
  every?: TowerSiteWhereInput;

  @ApiProperty({
    required: false,
    type: () => TowerSiteWhereInput,
  })
  @ValidateNested()
  @Type(() => TowerSiteWhereInput)
  @IsOptional()
  @Field(() => TowerSiteWhereInput, {
    nullable: true,
  })
  some?: TowerSiteWhereInput;

  @ApiProperty({
    required: false,
    type: () => TowerSiteWhereInput,
  })
  @ValidateNested()
  @Type(() => TowerSiteWhereInput)
  @IsOptional()
  @Field(() => TowerSiteWhereInput, {
    nullable: true,
  })
  none?: TowerSiteWhereInput;
}
export { TowerSiteListRelationFilter as TowerSiteListRelationFilter };
