const S3 = require('aws-sdk/clients/s3')
const fs = require("fs");

const accessKeyId='AKIA27QEM2PSLCK5V4BH'
const secretAccessKey="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"
const bucketName="grad-project-35"
const region="eu-west-3"

const s3 = new S3 ({
    region, 
    accessKeyId,
    secretAccessKey
})

function uploadImage(image){
    const fileStream = fs.createReadStream(image.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: image.filename
    }

    return s3.upload(uploadParams).promise()
}
function downloadImage(imageKey){

    const downloadParams = {
        Bucket: bucketName,
        Key: imageKey 
    }

    return s3.getObject(downloadParams).createReadStream()
}

exports.uploadImage = uploadImage 
exports.downloadImage  = downloadImage  