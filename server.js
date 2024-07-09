const jsonServer = require('json-server');
const path = require('path');
const express = require('express');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'todolistProject/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'todolistProject/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
