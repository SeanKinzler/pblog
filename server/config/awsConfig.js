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

const getObject = (key, cb) => {
  s3 = new aws.S3();
  s3.getObject({
    Bucket: 'poliblogbucket',
    Key: key,
  }, cb)
}

const saveHtmlToS3 = (file, key) => {
  const params = {
    Bucket: 'poliblogbucket',
    ACL: 'public-read',
    Key: key,
    Body: file,
    ContentType: 'html/text',
  }
  s3 = new aws.S3();
  s3.putObject(params, (err, data) => {
    if (err) {
      throw err;
      console.log('s3 bucket err: ', err)
    }
  });
  return `${aws.config.baseUrl}${key}`;
}

const saveImageToS3 = (file, key) => {
  buf = new Buffer(file.data_url.replace(/^data:image\/\w+;base64,/, ""),'base64')
  const params = {
    Bucket: 'poliblogbucket',
    ACL: 'public-read',
    Key: key,
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
  return `${aws.config.baseUrl}${key}`;
}

module.exports = {
  saveImageToS3, 
  getObject,
  saveHtmlToS3,
};
