const userModel = require("../models/users");
const productModel = require("../models/products");
const {spawn} = require("child_process")
const {Parser} = require('json2csv')
const fs = require('fs')



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
          // let prod=[]
          // for (let i = 0; i < users.length; i++) {
          //   for (let j = 0; j < users[i].history.length; j++) {
          //     prod.push({
          //       uId:users[i]._id,
          //       pId: users[i].history[j]
          //     })
              
          //   }
          // }
          users.forEach(user => {
            user.history.forEach(histProduct => {
                finalProducts.push(histProduct)
                finalUsers.push(String(user._id))

            });
          });

            const headers = ['uId', 'pId']
            const columns = [finalUsers, finalProducts, finalDescription]

            let csvFile = csvConstructor(headers, columns)
            // uncomment to write to csv file, but the file headers need to be written manually in the file
            // csvFile = csvFile.split('\n');
            // csvFile.splice(0,1);
            // csvFile=csvFile.join('\n');
            // console.log(csvFile)
            // fs.appendFile('/Users/mohamedraafat/Desktop/Project/MERN_Stack_Project_Ecommerce_Hayroo/server/products.csv', csvFile, err => {
            //   if (err) {
            //     console.error(err)
            //     return
            //   }
            //   //file written successfully
            // })
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
