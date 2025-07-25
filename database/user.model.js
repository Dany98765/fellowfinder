import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    fields: { type: Array, required: true },
    role: { type: String, required: true },
    money: { type: Number },
    desc: { type: String, required: true },
    filledPartnerForm: { type: Boolean },
    hasPartnerPackage: { type: Boolean },
    hasSessionPackage: { type: Boolean }
  },
  { timestamps: true }
);

const User = models?.User || model("User", UserSchema);

export default User;