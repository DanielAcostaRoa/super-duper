import GraphQLServer from "./_utils";
import { NextApiRequest, NextApiResponse } from "next";
import Resolvers from "lib/graphql";

const graphqlServer = new GraphQLServer(Resolvers);
const startServer = graphqlServer.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
 await startServer;
 return graphqlServer.createHandler(req, res);
}

export default handler;
