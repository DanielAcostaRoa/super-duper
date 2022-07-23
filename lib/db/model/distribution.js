const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;

const Distribution = new Schema({
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
    { type: Types.ObjectId, ref: "Product" },
  ],
}
, { timestamps: true }
);

module.exports = mongoose.models.Distribution || mongoose.model("Distribution", Distribution);