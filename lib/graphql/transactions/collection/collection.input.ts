import "reflect-metadata"
import { Field, InputType, Float } from 'type-graphql';
import { ProductInput } from "lib/graphql/shared/product.type";

@InputType()
export class CollectionInput {
  @Field()
  to: string;

  @Field(() => [ProductInput])
  products: ProductInput[];

  @Field(() => Float)
  payment: number;
}