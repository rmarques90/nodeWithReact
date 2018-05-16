const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/', (req, res) => {
	res.send({'status':'true', 'msg':'teste'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));