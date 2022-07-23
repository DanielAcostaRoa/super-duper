import { Field, ObjectType, registerEnumType } from "type-graphql";
import Node from "./node";

export enum AccountType {
  A="A",
  B="B",
  C="C",
  M="M",
}

registerEnumType(AccountType, {
  name: "AccountType",
  description: "Account type",
});

@ObjectType({ implements: [Node] })
export class Account extends Node {
  @Field(() => AccountType)
  type: AccountType;

  @Field({ nullable: true , defaultValue: null })
  parent?: string;

  @Field(() => [Account], { nullable: true , defaultValue: null })
  branches?: Account[];
}