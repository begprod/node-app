const express =  require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
	response.send('Hello world');
	// response >>> user form show response
	console.log(request);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});