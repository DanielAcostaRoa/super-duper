import { Field, ObjectType, Float } from 'type-graphql';
import { Product } from "../../shared/product.type";
import Node from '../../shared/node';

@ObjectType({ implements: [Node] })
export class Collection extends Node {
  @Field()
  from: string;

  @Field()
  to: string;

  @Field()
  date: string;

  @Field(() => [Product])
  products: Product[];

  @Field(() => Float)
  payment: number;
}
