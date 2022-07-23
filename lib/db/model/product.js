const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;

const ProductSchema = new Schema({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  salePrice: {
    type: Types.Number,
    required: true,
  },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
