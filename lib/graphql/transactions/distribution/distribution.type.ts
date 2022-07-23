import "reflect-metadata"
import { Field, ObjectType } from 'type-graphql';
import { Product } from "../../shared/product.type";
import Node from '../../shared/node';

@ObjectType({ implements: [Node] })
export class Distribution extends Node {
  @Field()
  from: string;

  @Field()
  to: string;

  @Field()
  date: string;

  @Field(() => [Product])
  products: Product[];
}