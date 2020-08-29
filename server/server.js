const express =  require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.post('/', (request, response) => {
	response.status(200).send({
		title: 'Hello form express o/'
	})

});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});