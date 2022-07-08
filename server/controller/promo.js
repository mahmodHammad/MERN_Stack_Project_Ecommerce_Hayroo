const promoModel = require("../models/promo");
const fs = require("fs");

class Promo {
  
  async checkPromo(req, res) {
    let promo=req.body;
    let code= await promoModel.find({});
    let today = new Date();
    let expire = new Date(code[0].expire);

    if(code && today<expire){
        return res.json({ 
            active: true,
            discount: code[0].discount
         });
    } else {
        return res.json({active: false});
    }
  }

  async addPromo(req, res) {
    
        let { code, discount, expire } = req.body;
        
        if (
          !code ||
          !discount ||
          !expire
        ) {
          return res.json({ message: "Missing data" });
        } else {
          try {
            let newPromo = new promoModel({
              code,
              discount,
              expire
            });
            let save = await newPromo.save();
            if (save) {
              return res.json({ success: "Promo created successfully" });
            }
          } catch (err) {
            return res.json({ error: "Error" });
          }
        }
      
  }

}

const promoController = new Promo();
module.exports = promoController;
