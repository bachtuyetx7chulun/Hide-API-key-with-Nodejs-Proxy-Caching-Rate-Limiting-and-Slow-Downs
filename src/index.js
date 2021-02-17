const app = require('./server');
const { PORT } = require('./configs');
const port = PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
