const mongoose = require("mongoose");

const promoSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      maxlength: 32,
    },
    discount: {
      type: Number
    },
    expire:{
      type: Date
    }
  }
);
const promoModel = mongoose.model("promo", promoSchema);
module.exports = promoModel;
