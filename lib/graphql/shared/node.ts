import "reflect-metadata"
import { InterfaceType, Field, ID } from "type-graphql";

@InterfaceType()
export default abstract class Node {
    @Field(() => ID)
    id: string;
}