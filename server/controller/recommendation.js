const userModel = require("../models/users");
const productModel = require("../models/products");
const {spawn} = require("child_process")



function toCsvRows(headers, columns) {
    const output = [headers]
    const numRows = columns.map(col => col.length)
      .reduce((a, b) => Math.max(a, b))
  
    for (let row = 0; row < numRows; row++) {
      output.push(columns.map(c => c[row] || ''))
    }
  
    return output
  }
  
  function toCsvString(data) {
    let output = ''
    data.forEach(row => output += row.join(',') + '\n')
    return output
  }
  
  function csvConstructor(headers, columns) {
    return toCsvString(toCsvRows(headers, columns))
  }

class Recommendation {
    async getAllUser(req, res) {
        
      }
  
  async getRecommendation(req, res) {
    try {
        let finalUsers=[];
        let finalProducts=[];
        let finalDescription=[];

        let users = await userModel
            .find({})
            .populate("allProduct.id", "pName pImages pPrice")
            .populate("user", "name email")
            .sort({ _id: -1 });

        let products = await productModel
            .find({})
            .populate("pCategory", "_id cName")
            .sort({ _id: -1 });

        if (users && products) {
          users.forEach(user => {
            user.history.forEach(histProduct => {
                finalProducts.push(histProduct)
                finalUsers.push(String(user._id))

            });
          });

            const headers = ['User ID', 'Product ID']
            const columns = [finalUsers, finalProducts, finalDescription]

            const csvFile = csvConstructor(headers, columns)
            
            var dataToSend;
            const python = spawn ('python3',['./script.py', csvFile, "62cdecfee2a58a0f313e8da1"]);

            python.stdout.on("data", function(data){
                dataToSend = data.toString();
            })

            python.stderr.on('data',data=>{
                console.log(`stdder: ${data}`);
            })

            python.on('exit', code=>{
                console.log(dataToSend)
            })

            console.log(dataToSend)
         
        }
      } catch (err) {
        console.log(err);
      }
  }


}

const recController = new Recommendation();
module.exports = recController;
