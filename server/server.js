const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '../client/')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/', 'index.html'));
});

app.listen(port, () => {
  console.log('Blog listening on port ' + port)
})