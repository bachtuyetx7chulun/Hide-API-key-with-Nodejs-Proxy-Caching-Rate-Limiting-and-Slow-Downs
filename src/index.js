const app = require('./server');
const listEndPoints = require('express-list-endpoints');
const { PORT } = require('./configs');
const port = PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(listEndPoints(app));
});
