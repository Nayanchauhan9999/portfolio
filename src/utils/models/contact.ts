import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: String,
  company: String,
  email: String,
  mobile: String,
  message: String,
  submitedAt: {
    type: Date,
    default: Date.now(),
  },
});

contactSchema.set("toJSON", {
  virtuals: true,
});

contactSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const contactModel =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default contactModel;
