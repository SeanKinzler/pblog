const aws = require('aws-sdk');

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY || require('./credentials/awsaccessid.js').accessKeyId;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || require('./credentials/awsaccessid.js').secretAccessKey;
const AWS_REGION = process.env.AWS_REGION || require('./credentials/awsaccessid.js').region;
const AWS_BASE_URL = process.env.AWS_BASE_URL || require('./credentials/awsaccessid.js').region;

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID, 
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  // region: AWS_REGION,
});

aws.config.baseUrl = AWS_BASE_URL;

const saveToS3 = (file, filepath) => {
  const params = {
    Bucket: 'poliblogbucket',
    ACL: 'public-read',
    Key: `images/${filepath}`,
    Body: file.data_url,
  }
  s3 = new aws.S3();
  s3.putObject(params, (err, data) => {
    if (err) {
      throw err;
      console.log('s3 bucket err: ', err);
    } else {
    }
  })
  return aws.config.baseUrl + filepath;
}

module.exports = saveToS3;