/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TowerSiteWhereInput } from "./TowerSiteWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TowerSiteOrderByInput } from "./TowerSiteOrderByInput";

@ArgsType()
class TowerSiteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TowerSiteWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TowerSiteWhereInput, { nullable: true })
  @Type(() => TowerSiteWhereInput)
  where?: TowerSiteWhereInput;

  @ApiProperty({
    required: false,
    type: [TowerSiteOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TowerSiteOrderByInput], { nullable: true })
  @Type(() => TowerSiteOrderByInput)
  orderBy?: Array<TowerSiteOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TowerSiteFindManyArgs as TowerSiteFindManyArgs };
