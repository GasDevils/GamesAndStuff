let express = require('express');
let app = express();

app.get('/', (req, res) => res.send('hi'));
app.listen(420);
