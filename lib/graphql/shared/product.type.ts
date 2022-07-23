import { Field, ObjectType, Float, InputType } from "type-graphql";

@ObjectType()
export class Product {
  @Field()
  uuid: string;

  @Field(() => Float)
  salePrice: number;
}

@InputType()
export class ProductInput {
  @Field()
  uuid: string;

  @Field(() => Float)
  salePrice: number;
}
