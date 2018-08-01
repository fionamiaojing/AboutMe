const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/AboutMe/', express.static(path.join(__dirname, 'public')));

const port = process.env.port || 3005;
app.listen(port, console.log(`App is Listenting to ${port}`));