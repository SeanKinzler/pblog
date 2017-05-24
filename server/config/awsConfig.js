const aws = require('aws-sdk');

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY || require('./credentials/awsaccessid.js').accessKeyId;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || require('./credentials/awsaccessid.js').secretAccessKey;
const AWS_REGION = process.env.AWS_REGION || require('./credentials/awsaccessid.js').region;
const AWS_BASE_URL = process.env.AWS_BASE_URL || require('./credentials/awsaccessid.js').baseUrl;

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID, 
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

aws.config.baseUrl = AWS_BASE_URL;

const saveToS3 = (file, fileName) => {
  console.log(file.data_url.slice(0,30));
  buf = new Buffer(file.data_url.replace(/^data:image\/\w+;base64,/, ""),'base64')
  const params = {
    Bucket: 'poliblogbucket',
    ACL: 'public-read',
    Key: `images/${fileName}.jpg`,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
  }
  s3 = new aws.S3();
  s3.putObject(params, (err, data) => {
    if (err) {
      throw err;
      console.log('s3 bucket err: ', err);
    } else {
    }
  })
  return `${aws.config.baseUrl}images/${fileName}.jpg`;
}

module.exports = saveToS3;