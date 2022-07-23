const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;

const CollectionSchema = new Schema(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
    },
    from: {
      type: Types.ObjectId,
      ref: "Account",
    },
    to: {
      type: Types.ObjectId,
      ref: "Account",
    },
    date: {
      type: Types.Date,
      default: Date.now,
    },
    products: [
      {
        type: Types.ObjectId,
        ref: "Product",
      },
    ],
    payment: {
      type: Types.Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Collection || mongoose.model("Collection", CollectionSchema);
