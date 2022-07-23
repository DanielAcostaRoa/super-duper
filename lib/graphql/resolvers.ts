import "reflect-metadata"
import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { Collection, CollectionInput } from "./transactions/collection";
import { Distribution, DistributionInput } from "./transactions/distribution";
import dbConnect from "lib/db/dbConnect";

const { v4: uuidv4 } = require('uuid');
const {Distribution: DistributionModel} = require('lib/db/models/distribution');

@Resolver()
export default class AccountResolver {

  @Query(() => Distribution)
  async getLastDistribution(@Arg("accountId") accountId: string): Promise<Distribution> {
    await dbConnect();
    const from = "0" // TODO: get "from" from User Request Context
    const distribution_obj = await DistributionModel.findOne({
      where: {
        from: from,
        to: accountId,
      },
    },{}, { sort: { 'created_at' : -1 } }).populate('products');
    const distribution = new Distribution();
    distribution.id = distribution_obj.uuid;
    distribution.from = distribution_obj.from;
    distribution.to = distribution_obj.to;
    distribution.date = distribution_obj.created_at;
    distribution.products = distribution_obj.products.map(product => {
      return {
        uuid: product.uuid,
        salePrice: product.salePrice,
      }
    });
    return distribution;
  }

  @Mutation(() => Distribution)
  async makeDistribution(@Arg("distribution") distributionInput: DistributionInput): Promise<Distribution> {
    const distribution = new Distribution();
    distribution.id = uuidv4()
    distribution.from = "0" // TODO: get "from" from User Request Context
    distribution.to = distributionInput.to;
    distribution.date = String(new Date());
    distribution.products = distributionInput.products;
    await dbConnect();
    const distribution_obj = await DistributionModel.create({
      uuid: distribution.id,
      from: distribution.from,
      to: distribution.to,
      created_at: distribution.date,
      products: distribution.products.map(product => {
        return {
          uuid: product.uuid,
          salePrice: product.salePrice,
        }
      }),
    });
    return distribution;
  }

  @Mutation(() => Collection)
  async makeCollection(@Arg("collection") collectionInput: CollectionInput):  Promise<Collection> {
    const collection = new Collection();
    collection.id = uuidv4();
    collection.from = "0" // TODO: get "from" from User Request Context
    collection.to = collectionInput.to;
    collection.date = String(new Date());
    collection.products = collectionInput.products;
    collection.payment = collectionInput.payment;
    await dbConnect();
    const collection_obj = await DistributionModel.create({
      uuid: collection.id,
      from: collection.from,
      to: collection.to,
      created_at: collection.date,
      products: collection.products.map(product => {
        return {
          uuid: product.uuid,
          salePrice: product.salePrice,
        }
      }),
    });

    return collection;
  }
}