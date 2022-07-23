const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;

const AccountSchema = new Schema({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: Types.String,
    enum: ["A", "B", "C", "M"],
  },
}, { timestamps: true });

module.exports = mongoose.models.Account || mongoose.model('Account', AccountSchema);
