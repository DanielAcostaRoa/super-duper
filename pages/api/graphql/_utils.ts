
import "reflect-metadata"
import { buildSchema } from "type-graphql";
import { NextApiRequest, NextApiResponse } from "next";
import { createServer } from "@graphql-yoga/node";

export default class GraphQLServer {
 private schema: any;
 private resolvers: any;
 constructor(resolvers: any) {
  this.resolvers = resolvers;
 }
 public async start() {
  this.schema = await buildSchema({
   resolvers: this.resolvers,
  });
  return this.schema;
 }

 private createContext = ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => {
  return {
   req,
   res,
  }
 }

 public async createHandler(req: NextApiRequest, res: NextApiResponse) {
  const handler = createServer<{
   req: NextApiRequest;
   res: NextApiResponse;
  }>({
   schema: this.schema,
   context: this.createContext({ req, res }),
  })
  return handler(req, res)
 }
}
