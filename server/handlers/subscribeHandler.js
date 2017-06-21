
const chimpKey = process.env.chimpKey || require('../config/credentials/mailchimpkey.js').key;
const chimpId = process.env.chimplistId || require('../config/credentials/mailchimpkey.js').id;
const Mailchimp = require('mailchimp-api-v3');
const sqlQuery = require('../db/config.js');

const mailchimp = new Mailchimp(chimpKey);

const subscribeHandler = (req, res, user) => {
  mailchimp.post(`/lists/${chimpId}/members`, {
    email_address: user.emails[0].value,
    status: 'subscribed',
    merge_fields: {
      FNAME: `${user.name.givenName}`,
      LNAME: `${user.name.familyName}`,
    }
  }).then(result => {
    sqlQuery(`insert into Users (googleId, name, email, subscribed, subscriptionDate) values 
    (${user.id}, '${user.displayName}', '${user.emails[0].value}', 1, CURRENT_TIMESTAMP);`);
  }).catch(err => {
    console.log('chimp error: ', err.errors);
  })
};
  

module.exports = subscribeHandler;